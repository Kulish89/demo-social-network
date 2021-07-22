import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
  if (action.type === INITIALIZED_SUCCES) {
    return {
      ...state,
      initialized: true,
    };
  }
  return state;
};
export const initializedSucces = () => {
  return { type: INITIALIZED_SUCCES };
};

export const initializeApp = () => (dispatch) => {
  // если запросов много, то можно всех объединить в один массив, а потом из массива выполнять then Promise.all([массивСПромиссами]).then(()=>{})
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;
