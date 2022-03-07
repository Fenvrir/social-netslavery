import s from './Post.module.css'

function Post(props) {
	return (
		<div className={s.content__list}>
			<div className={s.content__user}>
				<div className={s.avatar}>
					<img src={props.avatar} alt="Avatar" />
				</div>
				<div className={s.item}>{props.message}</div>
			</div>
			<div className={s.content_feedback}>
				<span><button>Like</button></span>
				<span>{props.likesCount}</span>
				<span><button>Dislike</button></span>
			</div>
		</div>
	)
}

export default Post
