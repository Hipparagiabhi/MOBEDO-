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
                                <img src="/unify-logo.svg"
                                    width="150px"
                                    height="100px"
                                    className="d-inline-block align-top footerlogo"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </Link>
                    </Col>
                </Row>
                <Row className='linkblock'>
                    <Col sm={6}>
                        <div className='linkdiv' >
                            <h5 className='qlinks'>
                                Quick links
                            </h5>
                            <ul className='links'>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About us
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Contact us
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='servicediv' >
                            <h5 className='serlinks'>
                                Services
                            </h5>
                            <ul className='slinks'>
                                <li>
                                    Web Development
                                </li>
                                <li>
                                    Mobile Development
                                </li>
                                <li>
                                    .Net Development
                                </li>
                                <li>
                                    Software Testing
                                </li>
                                <li>
                                    RPA Development
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>


                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end socialmediafooter">
                    <Navbar className='socialmediafooter' >
                        <ul>
                            <li>
                                <div className='find'>
                                    <h6>Find us on</h6>
                                </div>
                            </li>
                            <li>
                                <Row >
                                    <Col>
                                        <div>
                                            <img src="/fb2.png" width="25px" height="25px" alt="" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <img src="/linkedin.png" width="20px" height="20px" alt="" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <img src="/twitter.png" width="25px" height="25px" alt="" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <img src="/youtube1.png" width="25px" height="25px" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <div className='contactblock'>
                                <h5 className='contact'> Contact us </h5>
                                <ul className='cnum'>
                                    <li>
                                        +91-9894512313
                                    </li>
                                    <li>
                                        +91-9894512313
                                    </li>
                                </ul>

                            </div>


                        </ul>


                    </Navbar>

                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}
