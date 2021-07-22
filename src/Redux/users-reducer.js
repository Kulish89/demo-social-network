import { usersAPI } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   name: "Dmitri",
    //   status: "I am a boss",
    //   location: { city: "Minsk", country: "Belarus" },
    //   avatar:
    //     "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   name: "Andrew",
    //   status: "I am a boss too",
    //   location: { city: "Moskow", country: "Russia" },
    //   avatar:
    //     "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1443584492/vosgqpvicpjgknz2rn2l.png",
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   name: "Sasha",
    //   status: "I am a boss too",
    //   location: { city: "Kiev", country: "Ukraine" },
    //   avatar:
    //     "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
    // },
  ],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: true,
  followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map((el) => {
        if (el.id === action.userId) {
          return { ...el, followed: true };
        }
        return el;
      }),
    };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map((el) => {
        if (el.id === action.userId) {
          return { ...el, followed: false };
        }
        return el;
      }),
    };
  } else if (action.type === SET_USERS) {
    return {
      ...state,
      users: action.users,
    };
  } else if (action.type === SET_CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.page,
    };
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    return {
      ...state,
      totalUsersCount: action.totalCount,
    };
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
    return {
      ...state,
      followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userIid]
        : state.followingInProgress.filter((id) => id != action.userId),
    };
  }
  return state;
};
export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, page };
};
export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId };
};
export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      debugger;
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const unfollowThunk = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode == 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};
export const followThunk = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode == 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};
export default usersReducer;
