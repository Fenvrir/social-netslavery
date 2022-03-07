import React from "react"
import Friend from "./Friend/Friend"
import s from './Friends.module.css'



function Friends(props) {

	const friendsElements = props.state.friends.map(f => {
		return (
			<Friend name={f.name} avatar={f.avatar} />
		)
	})

	return (
		<div className={s.friends}>
			{friendsElements}
		</div>
	)
}

export default Friends
