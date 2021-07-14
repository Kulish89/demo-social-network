const NEW_MESSAGE = "NEW_MESSAGE";
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  if (action.type === NEW_MESSAGE) {
    return {
      ...state,
      messages: [
        ...state.messages,
        {
          id: 5,
          message: action.newMessageText,
        },
      ],
      newMessageBody: "",
    };
  }
  return state;
};
export const newMessageActionCreat = (newMessageText) => {
  return { type: NEW_MESSAGE, newMessageText };
};

export default dialogsReducer;
