import React from "react";
import { BsThreeDots, BsChat, BsBookmark, BsHeart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./Post.module.css";
import Spacer from "../Spacer";
const Posts = ({ posts, people }) => {
  return (
    <div>
      {posts.map((post, i) => {
        let user = people[i];
        user.userImageURL = user.userImageURL || post.userImageURL || post.previewURL;
        return <Post key={post.id} {...{ post, user }} />;
      })}
    </div>
  );
};

const Post = ({ post, user }) => {
  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.postHeader}>
          <div className={styles.postUserDetails}>
            <div className={styles.userImageContainer}>
              <img src={user.userImageURL} />
            </div>

            <p className={styles.userName}>{user.user}</p>
          </div>
          <BsThreeDots size={17} />
        </div>
        <img loading="lazy" src={post.largeImageURL} style={{ maxHeight: 500, width: "100%", objectFit: "cover" }} />
        <div className={styles.postActions}>
          <div className={styles.postActionsLeft}>
            <div className={`${styles.postAction} ${styles.heartAction}`}>
              <BsHeart size={23} />
            </div>
            <div className={styles.postAction}>
              <BsChat size={23} />
            </div>
          </div>
          {/* <div className={styles.postActionsMiddle}>
          <BsThreeDots size={17} />
        </div> */}
          <div className={styles.postActionsRight}>
            <div className={styles.postAction}>
              <BsBookmark size={23} />
            </div>
          </div>
        </div>
        {/* <div className={styles.likedByContainer}>
        <div className={styles.userImageContainer}>
          <img src={people[i].userImageURL} />
        </div>
      </div> */}
        <p className={styles.likes}>{post.likes} likes</p>
        <p className={styles.timeAgo}>2 HOURS AGO</p>
        <div className={styles.addCommentContainer}>
          <input className={styles.addACommentInput} placeholder="Add a comment"></input>
        </div>
      </div>
      <Spacer space={15} />
    </>
  );
};

export { Posts, Post };
