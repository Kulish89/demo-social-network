import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";
const CATCHED_ERROR = "CATCHED_ERROR";
let initialState = {
  initialized: false,
  globalError: null,
};
const appReducer = (state = initialState, action) => {
  if (action.type === INITIALIZED_SUCCES) {
    return {
      ...state,
      initialized: true,
    };
  } else if (action.type === CATCHED_ERROR) {
    return {
      ...state,
      globalError: action.error,
    };
  }
  return state;
};
export const initializedSucces = () => {
  return { type: INITIALIZED_SUCCES };
};
export const catchedError = (error) => {
  return { type: CATCHED_ERROR, error };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;
