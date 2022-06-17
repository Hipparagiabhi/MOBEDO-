import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import {Link} from "gatsby"


 function Navitem() {
  return (
    <Navbar >
        <Container fluid >
          <Link to="/">
          <Navbar.Brand >
        <img src="/unify-logo.svg"
              width="150px"
              height="100px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
          </Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar className='talkbtn' >
         <Link to="contact"> <Button variant="outline-primary">Talk to us</Button>{' '}
         </Link> 
          </Navbar>
          <Navbar>
            <div>
             <img  className='hamimage' src="/ham.png" alt=""/>
             <img className='crossimage' src="/cross.png" alt=""/>
            </div>
          </Navbar>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
export default Navitem;
