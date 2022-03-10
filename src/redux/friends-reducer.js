const ADD_FRIEND = 'ADD-FRIEND';

let initialState = {
    friends:
        [{ id: 1, name: 'Anton', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        { id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        { id: 3, name: 'Alex', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        { id: 4, name: 'Mikhail', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = { id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" };
            state.friends.push(newFriend);
            return state;
        default: return state;
    }
};

export const addFriendActionCreator = () => ({type: ADD_FRIEND });
export default friendsReducer;