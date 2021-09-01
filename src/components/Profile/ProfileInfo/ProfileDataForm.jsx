import classNames from "classnames";
import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import classes from "../../common/FormsControls/FormsControls.module.css";
const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={classes.formError}> {error}</div>}
      <div>
        <b>Full name:</b> {createField("Full Name", Input, [], "fullName")}
      </div>
      <div>
        <b>Looking for a job:</b>{" "}
        {createField("", Input, [], "lookingForAJob", { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills:</b>{" "}
        {createField(
          "My professional skills",
          Textarea,
          [],
          "lookingForAJobDescription"
        )}
      </div>
      <div>
        <b>About me:</b> {createField("About me", Textarea, [], "aboutMe")}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}:</b>
              {createField(key, Input, [], "contacts." + key)}
            </div>
          );
        })}
      </div>
    </form>
  );
};
export default reduxForm({ form: "edit-profile" })(ProfileDataForm);
