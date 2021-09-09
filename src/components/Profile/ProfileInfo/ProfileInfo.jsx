import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
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
      <div className={styles.background}></div>
      <div className={styles.mainInfoAboutProfile}>
        <div>
          <div>
            <img
              src={profile.photos.large || userPhoto}
              className={styles.userImg}
            />
          </div>
          <div>
            {isOwner && (
              <label className={styles.labelUploadFile}>
                <input
                  type={"file"}
                  onChange={onMainPhotoSelected}
                  className={styles.inputUploadFile}
                />
                <span>upload file</span>
              </label>
            )}
          </div>
        </div>

        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>

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
    </div>
  );
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  const [contactsContainerActive, setContactsContainerActive] =
    React.useState(false);
  return (
    <div className={styles.descriptionProfile}>
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
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b
          className={styles.dropdownButton}
          onClick={() => {
            setContactsContainerActive(!contactsContainerActive);
          }}
        >
          Contacts:
        </b>
        <div
          className={
            contactsContainerActive
              ? styles.dropdownContainer + " " + styles.active
              : styles.dropdownContainer
          }
        >
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
      {isOwner && contactsContainerActive && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts}>
      {contactTitle}: {contactValue}
    </div>
  );
};
export default ProfileInfo;
