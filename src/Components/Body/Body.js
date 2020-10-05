import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { serviceContext } from '../../App';

const Body = () => {
    const color= ['#FFBD3E','#FF7044','#3F90FC','#421FCF'];
     let count=0;
    const [service,setService] = useContext(serviceContext);
 
   
    return (
        <Container style={{marginTop:"100px"}}  >
            <Row>
                {
                    service.map(data=>
                       
                       
                       
                        <Col xs={6} sm={6} md={4} lg={3} style={{textAlign:"center",marginTop:"15px"}}>
                             <Link to={`/service/${data.id}`} style={{textDecoration:"none"}} >
                            <img src={data.photo} alt="" width="100%" style={{borderRadius:"0px"}} />
                            <h5  style={{backgroundColor:`${color[count++]}`,padding:"10px",height:"70px",position:"relative",top:"-5px",color:"white"}}>{data.title}</h5>
                            {count>=4?(<span style={{visibility:"hidden"}}>{count=0}</span>):null}
                            </Link>
                        </Col>
                      
                        
                        )
                }
            </Row>
        </Container>
    );
};

export default Body;