import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";
const SET_USER_DATA = "/auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
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
// санка - функция, которая принимает диспатч, а оборачивает её санк-креэйтор, который принимает нужные данные для аяксзапроса.
export const authMe = () => async (dispatch) => {
  let data = await headerAPI.authMe();
  if (data.resultCode == 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await headerAPI.login(email, password, rememberMe);
  if (data.resultCode == 0) {
    dispatch(authMe());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    // метод стопсабмит из редакс-форм , первый парамерт - название формы, а вторым обьект с _error - это на всю форму.
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let data = await headerAPI.logout();
  if (data.resultCode == 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
