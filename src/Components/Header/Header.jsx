import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

return(

  <div className="container-fluid bcontent">
        <h2 className="text-center">APP FOR USER CREATING AND EDITING</h2>
        <hr />
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar-nav">
                
                <Link to="/create-user" className="nav-link">Create User</Link>
                
                
                <Link to="/" className="nav-link">Users</Link>
                
                
            </ul>
        </nav>
    </div>


)







}

export default Header;