import React from "react";
import Table from 'react-bootstrap/Table';



class SingleUser extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
        <tr>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.userName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.phone}</td>
            <td>{this.props.user.address}</td>
            <td>{this.props.user.sallary}</td>

        </tr>

        )

        
    }
}

export default SingleUser;