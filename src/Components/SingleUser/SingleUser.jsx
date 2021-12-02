import React from "react";
import Button from 'react-bootstrap/Button'
import EditUser from "../EditUser/EditUser";

class SingleUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            modalVisible:false,

        }
        
    }


    handleClose=()=>{
        this.setState({modalVisible:false})
    }

    handlestartEdit=()=>{
        this.setState({modalVisible:true})
    }

    render(){
        const user=this.props.user;
        return(
        <tr>
            <td className='text-center'>{user.firstName}</td>
            <td className='text-center'>{user.lastName}</td>
            <td className='text-center'>{user.userName}</td>
            <td className='text-center'>{user.email}</td>
            <td className='text-center'>{user.phone}</td>
            <td className='text-center'>{user.address}</td>
            <td className='text-center'>{user.salary}</td>
            <td className='text-center'>
                <Button className='btn-secondary mx-4 align-middle' onClick={()=>this.handlestartEdit()}>EDIT </Button>
                <Button className='btn-secondary align-middle' onClick={()=>this.props.deleteUser(user.userName)}>DELETE</Button>
            </td>

            <EditUser modalVisible={this.state.modalVisible} currentUser={user} users={this.props.users} handleClose={this.handleClose} 
            
            editUser={this.props.editUser}
            
            />
        
        </tr>

        )
        
    }
}

export default SingleUser;