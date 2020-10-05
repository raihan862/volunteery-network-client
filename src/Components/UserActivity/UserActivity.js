import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { loginContext } from '../../App';
import NavBar from '../Header/NavBar';

const UserActivity = () => {
    const [user, setUser] = useContext(loginContext)
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/getActivityUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setActivities(data))

    },[])

    const handleCancel = ( event,id) => {
       
        event.target.parentNode.parentNode.parentNode.style.display="none";
        fetch(`http://localhost:5000/delete-activity/${id}`, {
            method: 'DELETE',
        })
         .then(res => {
           
         })
    }
    
    return (
        <Container>
            <NavBar/>
            <Row style={{marginTop:"30px"}}>
                {
                    activities.map(activity =>
                        <Col md={5} key={activity._id} style={{marginBottom:"15px"}} >
                            <div style={{backgroundColor:"white",color:"black",padding:"10px",marginLeft:"15px",boxShadow:"5px 5px 10px rgb(0,0,0,.1)"}}>

                            
                            <Row>
                                <Col sm={8} md={5}>
                                    <img src={activity.photo} alt="" width="100%" />
                                </Col>
                                <Col>
                                    <h4 style={{fontWeight:"600"}}>{activity.title}</h4>
                                    <h6>{activity.date}</h6>
                                    <Button variant="warning" style={{ display: "block", marginLeft: "auto",marginTop:"25px" }} onClick={(e) => handleCancel(e,activity._id)}>Cancel</Button>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                    )
                }

            </Row>

        </Container>
    );
};

export default UserActivity;