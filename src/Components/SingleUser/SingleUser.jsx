import React from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditUser from "../EditUser/EditUser";
import Form from 'react-bootstrap/Form'



class SingleUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            modalVisible:false,

        }
        
    }

    saveChanges=()=>{

    }

    handleClose=()=>{
        this.setState({modalVisible:false})
    }

    handlestartEdit=()=>{
        this.setState({modalVisible:true})
    }

    render(){
        console.log(this.props)
        const user=this.props.user;
        return(
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.sallary}</td>
            <td>
                <button onClick={()=>this.handlestartEdit()}>edit</button>
                <button onClick={()=>this.props.deleteUser(user.userName)}>delete</button>
            </td>

            <EditUser modalVisible={this.state.modalVisible} currentUser={user} users={this.props.users} handleClose={this.handleClose} 
            
            editUser={this.props.editUser}
            
            />
        


        </tr>

        )

        
    }
}

export default SingleUser;