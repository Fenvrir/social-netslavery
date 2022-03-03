import s from './Post.module.css'

function Post(props) {
	return (
		<div className={s.content__list}>
			<div className={`${s.item} ${s.item_gold}`}>{props.message}</div>
			<div className={s.content_feedback}>
				<span><button>Like</button></span>
				<span>{props.likesCount}</span>
				<span><button>Dislike</button></span>
			</div>
		</div>
	)
}

export default Post
