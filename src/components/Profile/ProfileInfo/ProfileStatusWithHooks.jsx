import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div className={styles.status}>
          <span onDoubleClick={activateEditMode}>
            {`"${status}"` || "_____________"}
          </span>
        </div>
      )}
      {editMode && props.isOwner && (
        <div className={styles.status}>
          <textarea
            className={styles.statusTextarea}
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
