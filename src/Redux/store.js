import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello, world!" },
        { id: 2, message: "Hi! It's my first App" },
        { id: 3, message: "Blablabla" },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Andrey",
          avatar:
            "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
          status: "Hello, How are you?",
        },
        {
          id: 2,
          name: "Vasili",
          avatar:
            "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1443584492/vosgqpvicpjgknz2rn2l.png",
          status: "Where are my friends? Heeeyo!!!",
        },
        {
          id: 3,
          name: "Olga",
          avatar:
            "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg",
          status: "Oh! I need a husband! Now!",
        },
        {
          id: 4,
          name: "Nikola",
          avatar:
            "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
          status: "I'm careful!",
        },
      ],
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you!" },
        { id: 3, message: "This is my first project!" },
      ],
      newMessageBody: "",
    },
    sidebar: [
      {
        id: 1,
        name: "Andrey",
        avatar:
          "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      },
      {
        id: 2,
        name: "Vasili",
        avatar:
          "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1443584492/vosgqpvicpjgknz2rn2l.png",
      },
      {
        id: 3,
        name: "Olga",
        avatar:
          "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg",
      },
      {
        id: 4,
        name: "Nikola",
        avatar:
          "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
      },
    ],
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
