import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import deleteIcon from '../../../logos/deleteIcon.png'
const VolunteerList = () => {
    
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(`https://radiant-cliffs-39414.herokuapp.com/getActivityAdmin`)
            .then(res => res.json())
            .then(data => setActivities(data))

    },[])

    const handleCancel = ( event,id) => {
       
        event.target.parentNode.parentNode.parentNode.style.display="none";
        fetch(`https://radiant-cliffs-39414.herokuapp.com/delete-activity/${id}`, {
            method: 'DELETE',
        })
         .then(res => {
           
         })
    }
    return (
       <div style={{backgroundColor:"#F4F7FC",padding:"30px"}}>
         <h4>Volunteer List</h4>
         <div style={{overflow:"auto", backgroundColor: "white",padding:"20px 5px",minHeight:"450px"}}>

        
          <table id="activityTable">
              
                  <tr>
                      <th>Name</th>
                      <th>Email Id</th>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Action</th>
                  </tr>
              
                  {
                      activities.map(activity=>
                        <tr>
                            <td>{activity.name}</td>
                            <td>{activity.email}</td>
                            <td>{activity.date}</td>
                            <td>{activity.title}</td>
                            <td>
                                <button onClick={(e)=>handleCancel(e,activity._id)} style={{border:"none"}}>
                                    <img id="deleteIcon" src={deleteIcon} alt="" width="50%" style={{color:"red"}} />
                                </button>
                             </td>
                        </tr>
                        
                        )
                  }
              
          </table>
         
          </div>
           </div>
  
  );
};

export default VolunteerList;