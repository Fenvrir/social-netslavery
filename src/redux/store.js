import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
	_state: {
		profilePage: {
			posts:
				[{ id: 1, message: 'Hello', likesCount: 22, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 2, message: 'How are you?', likesCount: 14, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				],
			newPostText: '',
		},
		dialogsPage: {
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
		},
		friendsPage: {
			friends:
				[{ id: 1, name: 'Anton', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 3, name: 'Alex', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 4, name: 'Mikhail', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },]
		},
		navBarPage: {
			friends:
				[{ id: 1, name: 'Anton', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 2, name: 'Dmitri', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
				{ id: 3, name: 'Alex', avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },]
		},
	},

	_callSubscriber() { },

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	getState() {
		return this._state;
	},

	dispatch(action) { //!action {type: '', etc} 
		this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
		this._state.profilePage = profileReducer(action, this._state.profilePage);

		this._callSubscriber(this._state);
	}
}

export default store;