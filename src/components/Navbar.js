import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



 function Navitem() {
  return (
    <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="/Facebook.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
export default Navitem;
