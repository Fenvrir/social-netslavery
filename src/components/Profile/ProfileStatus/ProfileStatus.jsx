import React from 'react'


class ProfileStatus extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           editMode: false,
           status: this.props.status,
       }
   }

    toggleEditMode = () => {
        this.setState(
            {
                editMode: !this.state.editMode  
            }
        )
    }

    changeStatus = (ev) => {
        this.setState({
            status: ev.target.value
        })
    }

    closeInput = () => {
        this.setState(
            {
                editMode: !this.state.editMode  
            }
        );
        this.props.updateUserStatus(this.state.status);  
    }

    updateStatus = (status) => {
        this.props.updateUserStatus(status);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.editMode
                    ? <input value={this.state.status}
                        autoFocus={true}
                        onBlur={this.closeInput}
                        onChange={(ev) => {this.changeStatus(ev)}} /> 
                    : <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span> }
                </div>
            </div>)
    }
}

export default ProfileStatus;