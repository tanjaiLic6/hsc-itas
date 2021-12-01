import React from "react";
import Table from 'react-bootstrap/Table';
import SingleUser from "../SingleUser/SingleUser";

class Users extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.users)
        return (
    <Table>
    <thead>
     <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone number</th>
      <th>Address</th>
      <th>Sallary</th>
     </tr>
     </thead>
     <tbody>
      {this.props.users.map((user)=>{
        return  <SingleUser key={user.index} user={user} />
      }
      )}
      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>suma</td>
      </tr>
     </tbody>
    </Table>
        )
    }
}

export default Users;