import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';



function MyPosts(props) {
	const postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />)

	const newPostElement = React.createRef();

	const onChangeHandler = () => {
		let newText = newPostElement.current.value;
		props.updateNewPostText(newText);
	}

	const addNewPost = () => {
		props.addPost();
	}

	return (
		<div className={s.post__block}>
			<div >
				<div className={s.content__textArea} >
					<textarea
						value={props.profilePage.newPostText}
						onChange={onChangeHandler}
						rows="4"
						cols="120"
						ref={newPostElement} />
				</div>
				<div className={s.content__btn}>
					<button
						onClick={addNewPost}
						type='button'>Send
					</button>
				</div>
			</div>
			{postsElements}
		</div>
	)
}

export default MyPosts
