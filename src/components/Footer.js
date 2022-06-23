import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function footer() {
    return (

        <Navbar className='footerbg maincontainer'>
            <Container fluid className="" >

                <Row>
                    <Col>
                        <Link to="/">
                            <Navbar.Brand  >
                                {/* <img src="/mobedologo1.jpeg"
                                    width="150px"
                                    height="100px"
                                    className="d-inline-block align-top footerlogo"
                                    alt="React Bootstrap logo"
                                /> */}
                                <p className="logo">MOBEDO</p>
                            </Navbar.Brand>
                        </Link>
                    </Col>
                </Row>
                <Row className='linkblock footerpage'>
                    <Col sm={6}>
                        <div className='linkdiv' >
                            <h5 className='qlinks'>
                                Contact Us
                            </h5>
                            <ul className='links'>
                                <li>
                                    +91-9894512313
                                </li>
                                <li>
                                    +91-9894512313
                                </li>

                            </ul>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='servicediv' >
                            <h5 className='serlinks'>
                                Privacy Policy
                            </h5>
                            <ul className='slinks'>
                                <li>

                                    dummy
                                </li>
                                <li>

                                    dummy
                                </li>
                                <li>

                                    dummy
                                </li>
                                <li>

                                    dummy
                                </li>
                                <li>

                                    dummy
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>


                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end socialmediafooter footerpage">
                    <Navbar className='socialmediafooter' >
                        <div className='find'>
                            <h6>Find us on</h6>
                            <ul className='socialmediaicons'>
                                <li>

                                </li>
                                <li>
                                    <div>
                                        <img src="/fb2.png" width="25px" height="25px" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/linkedin.png" width="20px" height="20px" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/twitter.png" width="25px" height="25px" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/youtube1.png" width="25px" height="25px" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>




                    </Navbar>

                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}
