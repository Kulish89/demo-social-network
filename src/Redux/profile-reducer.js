import { profileAPI } from "../api/api";
const NEW_POST = "NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCES = "SAVE_PHOTO_SUCCES";

let initialState = {
  posts: [
    { id: 1, message: "Hello, world!" },
    { id: 2, message: "Hi! It's my first App" },
    { id: 3, message: "Blablabla" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  if (action.type === NEW_POST) {
    return {
      ...state,
      posts: [
        ...state.posts,
        {
          id: 4,
          message: action.newPostText,
        },
      ],
    };
  } else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile,
    };
  } else if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status,
    };
  } else if (action.type === SAVE_PHOTO_SUCCES) {
    return {
      ...state,
      profile: { ...state.profile, photos: action.photos },
    };
  }
  return state;
};
export const newPostActionCreat = (newPostText) => {
  return { type: NEW_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const savePhotoSucces = (photos) => {
  return { type: SAVE_PHOTO_SUCCES, photos };
};

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSucces(response.data.data.photos));
  }
};
export default profileReducer;
