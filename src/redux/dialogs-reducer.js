const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages:
    [{ id: 1, message: 'Hello', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 2, message: 'How are you?', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 1, message: 'Good', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    ],
  newMessageText: '',
  dialogs:
    [{ id: 1, name: 'Anton', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 3, name: 'Alex', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 4, name: 'Mikhail', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (state.newMessageText === '') return state;
      let newMessage = {
        id: 1,
        message: state.newMessageText,
        avatar:
          "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text }
    }
    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default dialogsReducer;
