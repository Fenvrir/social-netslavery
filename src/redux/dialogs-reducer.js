const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages:
    [{ id: 1, message: 'Hello', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 2, message: 'How are you?', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 1, message: 'Good', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    ],
  dialogs:
    [{ id: 1, name: 'Anton', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 3, name: 'Alex', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
    { id: 4, name: 'Mikhail', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      // if (action.newMessage === undefined ) return state;
      let newMessage = {
        id: 1,
        message: action.newMessage,
        avatar:
          "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
      };
      return {
        ...state,
        messages: [...state.messages, newMessage ]
      };
    }
    default:
      return state;
  }
};

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;
