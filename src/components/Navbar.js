import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navitem() {
  return (
    
     <Navbar collapseOnSelect expand="lg" bg="#ffffff"  variant="light" className="maincontainer sticky-top">
     <Container fluid className='Navbarpage'>
     <Link to="/">
          <Navbar.Brand >
            <img src="/mobedologo1.jpeg"
              width="150px"
              height="100px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
           
         </Nav>
         <Nav className='navitems'>
         <Link to="/"><Nav  className='navlist'  >Home</Nav></Link>
           <Link to="/about"><Nav className='navlist' >About us</Nav></Link>
           <NavDropdown  className='navlist' title="Services" id="collasible-nav-dropdown">
             <NavDropdown.Item to="#action/3.1">Services1</NavDropdown.Item>
             <NavDropdown.Item to="#action/3.2">Services2 </NavDropdown.Item>
             <NavDropdown.Item to="#action/3.3">Services3</NavDropdown.Item>
             <NavDropdown.Item to="#action/3.4"> Services4</NavDropdown.Item>
           </NavDropdown>
           <Link to="/careers"><Nav className='navlist' >Careers</Nav></Link>
           <Link to="/blog"><Nav  className='navlist' > Blog</Nav></Link>
           <Link to="/contact"><Nav className='navlist'   > <Button variant="warning">CONTACT NOW</Button>{' '} </Nav></Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}
export default Navitem;
