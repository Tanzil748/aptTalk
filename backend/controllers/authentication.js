import { pool } from "../db/connectDb.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  const { userName, email, userPassword } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res
        .status(401)
        .json("User already has an account with that email!"); // bad credentials, if same email used again => row will be populated with original account details for that user email (this is bad, can't have two accounts with same email)
    }

    // Bcrypt password
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(userPassword, salt);

    // now create the new user
    const registerNewUser = await pool.query(
      "INSERT INTO users (userName, email, userPassword) VALUES ($1, $2, $3) RETURNING *",
      [userName, email, hashed]
    );

    // now generate jwt token
    const jwtToken = jwt.sign(
      { id: registerNewUser.rows[0].id },
      process.env.JWTkey,
      { expiresIn: "1h" }
    );

    return res.json({ jwtToken }); // outputs the jwt token in JSON format
  } catch (error) {
    console.log(error);
    res.status(500).send("Server not working");
  }
};

export const login = async (req, res) => {
  const { email, userPassword } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length < 1) {
      // there is no user with given email
      return res.status(401).json("No account associated to given email");
    }

    // make sure userpassword all lowercase, postgres seems to have issues with uppercase
    const isRightPassword = await bcrypt.compare(
      userPassword,
      user.rows[0].userpassword
    );

    if (!isRightPassword) {
      return res.status(400).json("Incorrect password");
    }

    // now generate jwt token
    const jwtToken = jwt.sign({ id: user.rows[0].id }, process.env.JWTkey, {
      expiresIn: "1h",
    });

    res
      .cookie("accessToken", jwtToken, {
        httpOnly: true,
      })
      .status(200)
      .json({ jwtToken });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server not working");
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("Current user logged out.");
};
