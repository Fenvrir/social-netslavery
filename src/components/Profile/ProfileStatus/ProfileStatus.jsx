import React from 'react'

class ProfileStatus extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           editMode: false,
           status: 'Some status',
       }
   }

    toggleEditMode = () => {
        console.log('this:', this);
        this.setState(
            {
                editMode: !this.state.editMode
                
            }
        )
        console.log('this:', this);
    }

    changeStatus = (ev) => {
        this.setState({
            status: ev.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    {this.state.editMode 
                    ? <input autoFocus={true} onBlur={this.toggleEditMode} onChange={(ev) => {this.changeStatus(ev)}} /> 
                    : <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.state.status}</span> }
                </div>     
            </div>)
    }
}

export default ProfileStatus;