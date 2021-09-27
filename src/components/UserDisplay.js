import React from "react";

const UserDisplay = (props) => {
    const {id, fname, email, lname, eid, bdate} = props.user;
    return(
        <div className="ui message">
        <div className="header">
            <div>Enterprise ID: {eid}</div>
            <div>First Name: {fname}</div>
            <div>Last Name: {lname}</div>
            <div>Email: {email}</div>
            <div>Birthdate: {bdate}</div>
        </div>
        <button class="ui red button" 
        onClick={() => props.clickHandler(id)}> DELETE
        </button>
    </div>
    );
};

export default UserDisplay;