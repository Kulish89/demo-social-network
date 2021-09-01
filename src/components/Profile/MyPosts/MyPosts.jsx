import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const maxLength10 = maxLengthCreator(10);
const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newPostText"}
        placeholder="Write your new post!"
        validate={[requiredField, maxLength10]}
      ></Field>
      <Field component={"button"} name={"addPost"}>
        Send
      </Field>
    </form>
  );
};
const NewPostFormRedux = reduxForm({ form: "newPostTextForm" })(NewPostForm);
// shouldConponentUpdate - метод классовой компоненты вызывается перед рендерингом и сравнивает пропсы и стейт!!!!
// shouldComponentUpdate(nextProps, nextState) {
//   // если новый пропсы и стейт не равны, то возвращает тру и идет рендер!!!
//   return nextProps != this.props || nextState != this.state;
// }
// НО можно наследоваться от PureComponent , там шулдкомпонентапдейт прописан за нас!!!

// React.memo() - HOC , который проверяет стэйт и пропсы до рендеринга!!!
const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((el) => {
    return <Post key={el.id} message={el.message} />;
  });

  let addNewPost = (values) => {
    props.addNewPost(values.newPostText);
  };
  return (
    <div>
      <div className={classes.posts}>
        <h3>My posts</h3>
        <div>New post</div>
        <NewPostFormRedux onSubmit={addNewPost} />
      </div>

      <div>{postsElements}</div>
    </div>
  );
});
export default MyPosts;
