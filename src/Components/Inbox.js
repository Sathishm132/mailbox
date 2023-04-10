import React, { useEffect, useState } from 'react'
import "./Inbox.css"
import {Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Inbox = () => {
  const[mail ,setMail]=useState([])
  useEffect(()=>{
    const fetch=async()=>{
      const response= await axios.get("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json")
    let fetchdata=[]
    for(let key in response.data){
       fetchdata.push({...response.data[key],id:key})
  
       }
       console.log(fetchdata)
       setMail(fetchdata)
    }
    fetch()
    
    
    
  },[])

const inboxmail=mail.map((data)=>(<ul><div dangerouslySetInnerHTML={{ __html: data.content }} /></ul>))
 
  return (
    <div>
         <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">React mail</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
           
           
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex justify-content-inline'>
    <div className='conatiner-fluid'>
       
       <div className='row'>
        <div className='bg-light col-auto col-md- min-vh-100'>
            <a href='/mail' className='nav-link'>compose</a>
          
        </div>
       
       
       </div>
    </div>
    <div >
        {inboxmail}
        {}
          
        </div>
     </div>
     </div>
    
  )
}

export default Inbox