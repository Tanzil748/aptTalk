import React from "react";
import css from "../styles/userPost.module.css";
import { BiUpvote, BiDownvote, BiChat } from "react-icons/bi";

const UserPost = ({ post }) => {
  return (
    <div key={post.id} className={css.postCard}>
      <div className={css.topRow}>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>{post.username}</p>|<span>Time</span>
        </div>
        <button className={css.followButton}>Follow</button>
      </div>
      <div className={css.content}>
        <p>{post.text}</p>
        <img src={post.picture} alt="" className={css.pic} />
      </div>
      <div className={css.feedback}>
        <div className={css.reactButton}>
          <BiUpvote size={20} />
          <span>Upvote</span>
        </div>
        <div className={css.reactButton}>
          <BiDownvote size={20} />
          <span>Downvote</span>
        </div>
        <div className={css.reactButton}>
          <BiChat size={20} />
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
