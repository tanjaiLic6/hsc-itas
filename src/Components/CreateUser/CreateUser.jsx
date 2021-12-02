import React from "react";
import {Form,Row,Col,Button} from 'react-bootstrap';
import { withRouter } from "../RouterWrapper";
import { areYouSure } from "../../Helpers";


class CreateUser extends React.Component {
    constructor(props,history){
        super(props);
        this.state=this.initalState;
    }

    initalState={
            isUniqeUserName:true,
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            phone:'',
            address:'',
            salary:''   
    }

    onChangeProperty=(property,value)=>{
      this.setState({[property]:value})
     
    }

    isUserNameTaken=()=>{
        return this.props.users.some(user=>user.userName===this.state.userName)
    }
    
     submit= async (e)=>{
      e.preventDefault();
    
      if(this.isUserNameTaken()){
          this.setState({isUniqeUserName:false})
          return;
      }
      
     const isUserSure= await areYouSure();

      if(isUserSure){ 
          this.props.createUser({
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          userName:this.state.userName,
          email:this.state.email,
          phone:this.state.phone,
          address:this.state.address,
          salary:this.state.salary})
         this.props.navigate('/');
          }
    }
    render(){ 
    
       return (
  <Form onSubmit={this.submit} className='w-50 mx-auto' >
   <Row className="mb-3">
    
   <Form.Group as={Col} md="12" id="first-name">
      <Form.Label className='align-middle'>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" className='align-middle' value={this.state.firstName} onChange={(e)=>this.onChangeProperty('firstName',e.target.value)} required />
    </Form.Group>

    <Form.Group as={Col} md="12" id="last-name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter last name" value={this.state.lastName} onChange={(e)=>this.onChangeProperty('lastName',e.target.value)} required />
    </Form.Group>

    <Form.Group as={Col} md="12" id="username" >
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" value={this.state.userName} onChange={(e)=>this.onChangeProperty('userName',e.target.value)} required/>
      
    </Form.Group>
    {!this.state.isUniqeUserName && <p>Username has to bee uniqe!</p>}
  
   
   <Form.Group as={Col} md="12" id="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e)=>this.onChangeProperty('email',e.target.value)}required />
    </Form.Group>


   <Form.Group as={Col} md="12" id="phone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="number" placeholder="Enter phone number" value={this.state.phone} onChange={(e)=>this.onChangeProperty('phone',e.target.value)} required />
    </Form.Group>
   

    <Form.Group as={Col} md="12" id="address">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter address" value={this.state.address} onChange={(e)=>this.onChangeProperty('address',e.target.value)} required />
   </Form.Group>

   <Form.Group as={Col} md="12"  id="salary">
    <Form.Label>Salary</Form.Label>
    <Form.Control type="number" placeholder="Enter salary" value={this.state.salary} onChange={(e)=>this.onChangeProperty('salary',e.target.value)}  required/>
   </Form.Group>

   
   </Row>
   
  

   

  <Button variant="primary" type="submit" id='createUser-btn' >
    Submit
  </Button>
</Form>

      );
      
     }
    }
    export default withRouter(CreateUser);