import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import HeaderBackground from '../../logos/background.png';

import { FaBars } from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const Header = () => {
    return (
        <div    >
            <img className="header" src={HeaderBackground} alt="" />
            <Container fluid={'xl'} style={{ marginTop: "15px" }}>
                
                <div className="searchBar">
                    <h1>I CROW BY HELPING PEOPLE IN NEED</h1>
                    <div className="box">
                    <div class="input-group md-form form-sm form-1 pl-0" >

                        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                        <div class="input-group-prepend">
                            <Button style={{borderTopRightRadius:"25px"}} >Search</Button>
                        </div>
                    </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Header;