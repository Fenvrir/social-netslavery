import axios from "axios";
import React from "react"
import { connect } from "react-redux";
import { headerAPI } from "../../dal/api";
import { setUserAuthData, setUserPhoto } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
	
	componentDidMount() {
		this.props.setUserAuthData();
	}

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default  connect(mapStateToProps, {setUserAuthData, setUserPhoto})(HeaderContainer);
