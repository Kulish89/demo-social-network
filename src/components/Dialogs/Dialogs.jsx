import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
const maxLength = maxLengthCreator(100);
const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[requiredField, maxLength]}
        name={"newMessageText"}
        placeholder={"Write your message!"}
      ></Field>
      <Field component={"button"} name={"addMessage"}>
        Send
      </Field>
    </form>
  );
};
const DialogReduxForm = reduxForm({
  form: "dialogNewMessageForm",
})(DialogForm);

function Dialogs({ dialogs, messages, sendNewMessage }) {
  let dialogsElements = dialogs.map((el) => {
    return <DialogItem key={el.id} name={el.name} avatar={el.avatar} />;
  });

  let messagesElements = messages.map((el) => {
    return <Message key={el.id} message={el.message} />;
  });

  let addMessage = (values, dispatch, props) => {
    sendNewMessage(values.newMessageText);
    dispatch(reset("dialogNewMessageForm"));
  };
  return (
    <div className={classes.dialogsSection}>
      <div className={classes.dialogs}>{dialogsElements}</div>

      <div className={classes.messages}>
        {messagesElements}
        <div>
          <DialogReduxForm onSubmit={addMessage} />
        </div>
      </div>
    </div>
  );
}
export default Dialogs;
