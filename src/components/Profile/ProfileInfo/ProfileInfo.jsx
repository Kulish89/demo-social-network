import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={classes.background}></div>
      <img
        src={profile.photos.large || userPhoto}
        className={classes.userImg}
      />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
export default ProfileInfo;
