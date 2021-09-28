import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Header';
import AddUser from './AddUser';
import UserList from './UserList';
import {uuid} from "uuidv4";

function App() {
  const Storage = "users";
  const [users, setUsers] = useState([]);
  
  const addUserHandler = (userd) =>{
    //console.log(userd);
    setUsers([...users, {id: uuid(), ...userd }]);
  };

  const deleteUser = (id) =>{
    const newUserList = users.filter((user)=>{
      return user.id !== id;
    })

    setUsers(newUserList);
  }
  useEffect(() => {
    const retrieveUser = JSON.parse(localStorage.getItem(Storage));
    if(retrieveUser) setUsers(retrieveUser);
  }, []);  

  useEffect(() => {
    localStorage.setItem(Storage, JSON.stringify(users));
  }, [users]);

 return(
   <div className = "ui container">
     <Header />
     <AddUser addUserHandler={addUserHandler}/>
     <UserList users={users} getContactId={deleteUser}/>
   </div>
 );
}

export default App;

