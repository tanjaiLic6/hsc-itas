import React from "react";
import Table from 'react-bootstrap/Table';
import SingleUser from "../SingleUser/SingleUser";
import './Users.css'

class Users extends React.Component {
    constructor(props){
        super(props);
        
    }

    
    render(){
      const users=this.props.users;
    //   const sum=this.props.users.map(us).reduce((prev,cur)=>parseInt(prev.sallary)+parseInt(cur.sallary))
      const sum=this.props.users.map(item => item.sallary).reduce((prev, next) => parseFloat(prev) + parseFloat(next));
        return (
    <Table className='user-table'>
    <thead>
     <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone number</th>
      <th>Address</th>
      <th>Sallary</th>
      <th>Control</th>
     </tr>
     </thead>
     <tbody>
      {users.map((user,index)=>{
        return  <SingleUser key={index} user={user} deleteUser={this.props.deleteUser} users={users} editUser={this.props.editUser}/>
      }
      )}
      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{sum}</td>

      </tr>
     </tbody>
    </Table>
        )
    }
}

export default Users;