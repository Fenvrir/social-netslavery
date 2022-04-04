import React, { useEffect, useState } from 'react'


const ProfileStatus = (props) => {

   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const changeStatus = (ev) => {
       setStatus(ev.target.value);
       
    }

    const closeInput = () => {
        toggleEditMode()
        props.updateUserStatus(status);
    }
   
        return (
            <div>
                <div>
                    {editMode
                    ? <input value={status}
                        autoFocus={true}
                        onBlur={closeInput}
                        onChange={(ev) => {changeStatus(ev)}} /> 
                    : <span onDoubleClick={toggleEditMode}>{props.status}</span> }
                </div>
            </div>)
}

export default ProfileStatus;