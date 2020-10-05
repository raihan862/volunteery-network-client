import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap';
import logo from '../../logos/logo.png'
import { loginContext, serviceContext } from '../../App';
import { DatePicker } from 'react-rainbow-components';

 const formStyle = {
   width: "450px",
   margin: "auto",

   boxShadow: "5px 5px 10px rgb(0,0,0,.2),-5px -5px 10px rgb(0,0,0,.1)",
   padding: "25px 10px",
   marginTop: "20px"
}
const Registration = () => {
   const { id } = useParams();
   const [user, setUser] = useContext(loginContext)
   const [service, setService] = useContext(serviceContext);
   const [date, setDate] = useState(new Date())
   const selectedItem = service.filter(s => s.id == id)
   const history = useHistory();
   const initialValues = {
      name: user.name,
      email: user.email,
      description: "",
      title: selectedItem[0].title

   }

   const onSubmit = values => {
      const d = date.toDateString()
      const registerData = { serviceId:id,...values, date:d,photo:selectedItem[0].photo}
      fetch("http://localhost:5000/addVolunteer",{
         method:"POST",
         headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(registerData)
      }).then(res=>{
        history.push('/user-activity')
      })

   }
   const formik = useFormik({
      initialValues: initialValues,
      onSubmit,
   })

   return (
      <div id= "parent" style={{textAlign:"left"}}>
         
      <img src={logo} alt="" width="150px" style={{margin:"auto",display:"block"}} />
      <Form style={formStyle} onSubmit={formik.handleSubmit}>
         <h4>Resister</h4>
         <Form.Group controlId="formBasicfirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
               type="text" required name="name" disabled
               placeholder=" first name"
               {...formik.getFieldProps("name")} />
         </Form.Group>

         <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" required disabled placeholder="Enter email"
               {...formik.getFieldProps("email")}
            />
         </Form.Group>
         <Form.Group controlId="formBasicdate">
            <Form.Label>Date</Form.Label>
            <DatePicker
               name="date"
               minDate={new Date()}
               value={date}
               onChange={date => setDate(date)}
            />
         </Form.Group>
         <Form.Group controlId="formBasicdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" required placeholder=""
               {...formik.getFieldProps("description")}
            />
         </Form.Group>
         <Form.Group controlId="formBasictitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" required disabled placeholder=""
               {...formik.getFieldProps("title")}
            />
         </Form.Group>
         <Button variant="primary" type="submit" style={{ width: "60%", margin: "auto", display: "block" }}>
            Confirm Order
  </Button>

      </Form>
      </div>
   );
};

export default Registration;