import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.background}></div>
      <img src={profile.photos.large} className={classes.userImg} />
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
export default ProfileInfo;
