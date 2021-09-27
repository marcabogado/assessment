import React from "react";
import UserDisplay from "./UserDisplay";


const UserList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderUserList = props.users.map((user)=>{
        return <UserDisplay user={user} clickHandler={deleteContactHandler} key={user.id}/>;
    });
    return(
        <div className= "ui celled list">
            {renderUserList}
        </div>
    );
}

export default UserList;