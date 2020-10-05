import React, { useContext } from 'react';
import firebaseConfig from '../PrivateRoute/Authentication';
import * as firebase from "firebase/app";
import "firebase/auth";
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css'
import logo from '../../logos/logo.png'
import { loginContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user,setUser] = useContext(loginContext);
    const history= useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle=()=>{
        const  provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
            let newUser = {
                email:result.user.email,
                name:result.user.displayName
            }
            setUser(newUser)
            history.replace(from);
            
          }).catch(function(error) {
           
            var errorCode = error.code;
            
             
          });
          
    }

    return (
        <div id= "parent">
            <img src={logo} alt="" width="150px" />
            <Form className="login-form" >
                <h4 style={{ textAlign: "left", paddingBottom: "20px", fontWeight: "bold" }}>Login</h4>
                <p style={{ color: "red" }}>  </p>


                <Button id="sigining-btn" variant="light" onClick={handleGoogle} >
                    <FcGoogle style={{ fontSize: "36px" }}/> 
                    Continue With Facebook
                  </Button>
                  <h6 style={{marginTop:"15px"}}>Dont have an account ?? 
                <Link to="/user/sign-up">
                        <span>  Create an account</span>
                </Link>
                </h6>

            </Form>

        </div>
    );
};

export default Login;


