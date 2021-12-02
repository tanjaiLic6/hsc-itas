import React from "react";
import Table from 'react-bootstrap/Table';
import SingleUser from "../SingleUser/SingleUser";


class Users extends React.Component {
    constructor(props){
        super(props);
        
    }

    
    render(){
      const users=this.props.users;
      const sum=this.props.users.map(item => item.salary).reduce((prev, next) => parseFloat(prev) + parseFloat(next));
        return (
    <Table className='user-table' responsive>
    <thead>
     <tr>
      <th className='text-center'>First Name</th>
      <th className='text-center'>Last Name</th>
      <th className='text-center'>Username</th>
      <th className='text-center'>Email</th>
      <th className='text-center'>Phone number</th>
      <th className='text-center'>Address</th>
      <th className='text-center'>Salary</th>
      <th className='text-center'>Control</th>
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
          <td className='text-center fw-bold' colSpan="2">Sum of all salaries : {sum} </td>
          <td></td>
      </tr>
     </tbody>
    </Table>
        )
    }
}

export default Users;