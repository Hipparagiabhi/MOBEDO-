import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import {Link} from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function footer() {
    return (
        <Navbar >
            <Container fluid >
              <Link to="/">
              <Navbar.Brand >
              <Row className='row_content'>
                        <Col >
                            <h3 className=''>
                                Email
                            </h3>
                            <p> mobedo@gmail.com</p>
                        </Col>
                        <Col >
                            <h3>
                                Phone
                            </h3>
                            <p>
                                1234567890
                            </p>
                        </Col>
                    </Row>
                </Navbar.Brand>
              </Link>
            
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar className='talkbtn' >
             <Link to=""> <Button variant="outline-primary">Social</Button>{' '}
             </Link> 
              </Navbar>
              
            </Navbar.Collapse>
          </Container>
          </Navbar>
      )
}
