import React, { Fragment } from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Link} from "react-router-dom";


const Header = () => {

return(

  <Nav defaultActiveKey="/" className="flex-column">
  <Link to="/create-user">Create User</Link>
  <Link to="/">Users</Link>
</Nav>

)







}

export default Header;