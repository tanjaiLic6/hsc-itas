import { Fragment } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CreateUser from "./Components/CreateUser/CreateUser";
import Users from "./Components/Users/Users";





import './App.css';


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     users:this.getStoredUsers()
    
   

 }
}
  

 
getStoredUsers=()=>{
  const retrievedArray = JSON.parse(localStorage.getItem('usersArray'));
  
  if(!!retrievedArray && Array.isArray(retrievedArray)){
   return  retrievedArray;
  }
 return [];
}

storeUser=()=>{
 localStorage.setItem('usersArray',JSON.stringify(this.state.users));
  
}
 createUser=(user)=>{
   this.setState({users:[...this.state.users,user]},()=>{this.storeUser()});
   
 }



 deleteUser=(userName)=>{
 const newUsers= this.state.users.filter((user)=>user.userName !== userName);
 this.setState({users:newUsers},()=>this.storeUser());
 }

 editUser=(user,oldUserName)=>{
    const copyOfUsers=[...this.state.users];
    let  indexOfUser=  copyOfUsers.findIndex((u)=>u.userName===user.userName)
    if(indexOfUser===-1){
      indexOfUser= copyOfUsers.findIndex((u)=>u.userName===oldUserName)
    }
    copyOfUsers[indexOfUser]=user;
    this.setState({users:copyOfUsers},()=>this.storeUser());
    
 }
 render(){
 
  return (
  
    <div className='app-wrap'>
      <Header />
      <Routes>
        
      <Route  path="/" element={<Users users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />}/>
       
      <Route  path="/create-user" element={<CreateUser createUser={this.createUser} users={this.state.users}  />}/>
        
      
      

      
      </Routes>
   

      
    </div>
  );
}
 }
export default App;
