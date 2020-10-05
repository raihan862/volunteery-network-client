import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import people from '../../../logos/usersIcon.png';
import logo from '../../../logos/logo.png';
import plus from '../../../logos/plus.png'
import VolunteerList from '../VolunteerList/VolunteerList';
import AddActivity from '../AddActivity/AddActivity';
import './admin.css'
import NavBar from '../../Header/NavBar';
const AdminHome = () => {
    
    const [activities, setActivities] = useState([]);
    const [view,setView] = useState(false);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/getActivity`)
    //         .then(res => res.json())
    //         .then(data => setActivities(data))

    // },[])

   
    const handleCancel = ( event,id) => {
       
        event.target.parentNode.parentNode.parentNode.style.display="none";
        fetch(`http://localhost:5000/delete-activity/${id}`, {
            method: 'DELETE',
        })
         .then(res => {
           
         })
    }
    return (
       <Container fluid style={{backgroundColor:"white", position:"relative",height:"600px",width:"100%",padding:"15px"}}>
         <NavBar></NavBar>
         
           <Row style={{marginTop:"20px"}} >
               <Col sm={3} >
                 <button className="viewBtn"   onClick={()=>setView(false)}> <img src={people} alt="" width="20px"/>  Volunteer List</button>
                 <button className="viewBtn" onClick={()=>setView(true)}> <img src={plus} alt="" width="20px"/>    Add Activity</button>
               </Col>
               <Col sm={9}>
                    {
                        view?(<AddActivity/>):(<VolunteerList/>)
                    }
               </Col>
           </Row>
       </Container>
  
  );
};

export default AdminHome;