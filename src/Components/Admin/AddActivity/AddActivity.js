import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { serviceContext } from '../../../App';
const imgUrl="https://www.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/23/Incoming/Pictures/1329521_Wallpaper2.jpg"

const formStyle = {
    width: "450px",
     marginLeft:"10%",
    boxShadow: "5px 5px 10px rgb(0,0,0,.2),-5px -5px 10px rgb(0,0,0,.1)",
    padding: "15px 10px",
    marginTop: "20px"
 }
let initialValues = {
    id:"",
    title:"",
    photo:imgUrl
 }

const AddActivity = () => {
    const [service, setService] = useContext(serviceContext);
    const [message,setMgs] = useState(false);
    const onSubmit = values => {
        fetch("https://radiant-cliffs-39414.herokuapp.com/AddServices",{
            method:"POST",
            headers: {
               'Content-Type': 'application/json'
             },
             body:JSON.stringify(values)
         }).then(res=>{
            setMgs(true)
            setService([...service,values])
            initialValues.id="";
            initialValues.title="";
         })
   
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
     })

    
    return (
        <>
        {
        message ?(
            <div>
            <h6>Successfully Added</h6>
            <Button onClick={()=>setMgs(false)}>Add More</Button>
            </div>
        ):(
            <div>
            <Form style={formStyle} onSubmit={formik.handleSubmit}>
         <h4>Add Activity</h4>
         
         <Form.Group controlId="formBasicTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control type="text" name="title" required placeholder="Enter event title"
               {...formik.getFieldProps("title")}
            />

         </Form.Group>
         <Form.Group controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" name="id" required placeholder="enter an unique Id"
               {...formik.getFieldProps("id")}
            />
            
         </Form.Group>
         <Form.Group controlId="formBasicPhoto">
            <Form.Label>Image <span style={{color:"red"}}>**i have use a default Image</span> </Form.Label>
            <Form.Control type="text" name="photo" required disabled placeholder=""
               {...formik.getFieldProps("photo")}
            />
           <img src={imgUrl} alt="img" width="150px"/>
         </Form.Group>
         
        
         <Button variant="primary" type="submit" style={{ width: "60%", margin: "auto", display: "block" }}>
            Confirm Order
  </Button>

      </Form>
        </div>
        )
        }
       </>
    );
};

export default AddActivity;