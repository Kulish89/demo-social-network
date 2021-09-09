import React from "react";
import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";
function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.photo}>
        <img src={userPhoto}></img>
      </div>

      <div className={styles.message}>{props.message}</div>
    </div>
  );
}
export default Post;
