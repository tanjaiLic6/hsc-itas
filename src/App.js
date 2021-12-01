import { Fragment } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CreateUser from "./Components/CreateUser/CreateUser";
import Users from "./Components/Users/Users";



import './App.css';
import MainPage from "./Components/MainPage/MainPage";

class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     users:[]
   }

 }

 createUser=(user)=>{
   this.setState({users:[...this.state.users,user]})
 }
 render(){
  return (
   
    <Fragment>
      <Header />
      <Routes>
        
      <Route  path="/" element={<Users users={this.state.users} />}/>
       
      <Route  path="/create-user" element={<CreateUser createUser={this.createUser} users={this.state.users}  />}/>
        
      
      

      
      </Routes>
   

      
    </Fragment>
  );
}
 }
export default App;
