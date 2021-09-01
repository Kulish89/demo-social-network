import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
