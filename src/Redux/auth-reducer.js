import { stopSubmit } from "redux-form";
import { headerAPI, securityAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES =
  "social-network/security/get-captcha-url/GET_CAPTCHA_URL_SUCCES";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};
const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA || action.type === GET_CAPTCHA_URL_SUCCES) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
export const setUserData = (userId, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};
export const getCaptchaUrlSucces = (captchaUrl) => {
  return { type: GET_CAPTCHA_URL_SUCCES, payload: { captchaUrl } };
};

export const getAuthUserData = () => (dispatch) => {
  return headerAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await headerAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = () => (dispatch) => {
  headerAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export default authReducer;
