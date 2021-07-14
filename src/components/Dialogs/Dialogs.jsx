import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
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
        validate={[required, maxLength]}
        name={"newMwssageText"}
        placeholder={"Write your message!"}
      ></Field>
      <Field component={"button"} name={"addMessage"}>
        Send
      </Field>
    </form>
  );
};
const DialogReduxForm = reduxForm({ form: "dialogNewMessageForm" })(DialogForm);

function Dialogs({ dialogs, messages, addNewMessage }) {
  let dialogsElements = dialogs.map((el) => {
    return <DialogItem id={el.id} name={el.name} avatar={el.avatar} />;
  });

  let messagesElements = messages.map((el) => {
    return <Message message={el.message} />;
  });

  let addMessage = (values) => {
    // из сабмита приходят values, в которых лежит текст формы.!!!!
    addNewMessage(values.newMwssageText);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

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
