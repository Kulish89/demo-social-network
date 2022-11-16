import React from "react";
import { Field } from "redux-form";
import classes from "./FormsControls.module.css";
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : " ")}
    >
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : " ")}
    >
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export function createField(
  placeholder,
  component,
  validate,
  name,
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        component={component}
        validate={validate}
        name={name}
        {...props}
      ></Field>
      {text}
    </div>
  );
}
