import { rerenderEntireTree } from "../render";

const state = {
	profilePage: {
		posts:
			[{ id: 1, message: 'Hello', likesCount: 22, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
			{ id: 2, message: 'How are you?', likesCount: 14, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
			],
		newPostText: 'Text'
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
	}
}

export const updateNewMessageText = (text) => {
	state.dialogsPage.newMessageText = text;
	rerenderEntireTree(state);
}

export const sendMessage = () => {
	let newMessage = {
		id: 1,
		message: state.dialogsPage.newMessageText,
		avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
	}
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
	state.profilePage.newPostText = text;
	rerenderEntireTree(state);
}

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
		avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}
export default state;