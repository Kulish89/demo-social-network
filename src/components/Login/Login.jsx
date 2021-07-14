import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  } else {
    return (
      <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  }
};

const LoginForm = ({ handleSubmit, error }) => {
  return (
    // прокидываем в форму хэндлсабмит, чтобы не перегружалась страница
    <form onSubmit={handleSubmit}>
      {/* тег form обязателен для формы, обрамлять им обязательно!!!!!!! */}

      {createField("Email", Input, [required], "email")}

      {createField("Password", Input, [required], "password", {
        type: "password",
      })}

      {createField(
        null,
        Input,
        [],
        "rememberMe",
        {
          type: "checkbox",
        },
        "remember me"
      )}

      {error && <div className={classes.formError}> Error</div>}
      <div>
        <button>login</button>
        {/* кнопка в форме автоматом сабмитит форму и страница перегружается */}
      </div>
    </form>
  );
};
// оборачиваем форму в контейнерную компоненту HOC
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
