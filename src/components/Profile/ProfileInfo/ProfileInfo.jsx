import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = React.useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
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
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          onSubmit={onSubmit}
          profile={profile}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contacts}>
      {contactTitle}: {contactValue}
    </div>
  );
};
export default ProfileInfo;
