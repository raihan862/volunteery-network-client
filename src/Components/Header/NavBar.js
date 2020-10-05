import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { loginContext } from '../../App';
import logo from '../../logos/logo.png';
const NavBar = () => {
    const [user, setUser] = useContext(loginContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant=""  >
        <Navbar.Brand>
            <img src={logo} alt="" width="150px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span><FaBars/> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                 <Link to="/home">Home</Link>
                 <Link to="/">Donation</Link>
                 <Link to="/user-activity">Event</Link>
                 <Link to="/">Blog</Link>
                 {
                     user.email?(
                         <Link>
                         <small>{user.name} </small>
                        <Button variant="primary" onClick={()=>setUser({email:"",name:""})}> LogOut</Button> 
                        </Link>
                     ):(
                        <Link to ="/login">
                        <Button variant="primary">Login</Button> 
                    </Link>
                     )
                 }
                 
                 <Link to="/admin"> 
                    <Button variant="dark" >Admin</Button> 
                </Link>
            </Nav>
             
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;