import React from "react";
import classes from "./Post.module.css";
function Post(props) {
  return (
    <div className={classes.post}>
      <img src="https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA-%D0%BD%D0%B0-light-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-%D1%84%D0%BE%D0%BD%D0%B0-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C-%D1%80%D0%B5%D1%87%D0%B8-%D1%81-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8-%D0%BB%D0%B8%D1%86%D0%BE%D0%BC-167869100.jpg"></img>
      <div>{props.message}</div>
    </div>
  );
}
export default Post;
