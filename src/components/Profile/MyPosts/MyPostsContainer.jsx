import { connect } from "react-redux";
import { addNewPost } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addNewPost })(MyPosts);
export default MyPostsContainer;
