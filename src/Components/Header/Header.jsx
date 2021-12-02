import React, { Fragment } from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Link} from "react-router-dom";
import './Header.css'


const Header = () => {

return(

  <div class="container-fluid bcontent">
        <h2 className="text-center">APP FOR USER CREATING AND EDITING</h2>
        <hr />
        <nav className="navbar navbar-light bg-light">
            <ul class="navbar-nav">
                
                <Link to="/create-user" className="nav-link">Create User</Link>
                
                
                <Link to="/" className="nav-link">Users</Link>
                
                
            </ul>
        </nav>
    </div>

//   <Nav defaultActiveKey="/" className="flex-column">
//   <Link to="/create-user">Create User</Link>
//   <Link to="/">Users</Link>
// </Nav>

)







}

export default Header;