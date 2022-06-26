import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from "../components/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby'
import Footer from "../components/Footer";
import Header from '../components/Header';
import Image from 'react-bootstrap/Image'


export default function contact() {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid className="maincontainer contactpage"  >

                <Row className='row_content'>
                    <Col sm={7}>
                        <h1 className='side_head'>
                            We want to hear from you.
                        </h1>
                    </Col>
                    <Col sm={5}   >
                        <p className='side_content'>
                            Whether you’re interested in our work or interested in working with us (or both) we’d love to connect. Fill out your information below and we’ll get you in touch with one of our real, live Unifiers. No robots here!
                        </p>
                    </Col>
                </Row>
            </Container>
                <Row className='row_content row_content_form contactpage ' >
                    <Col sm={7}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><strong>Name</strong> </Form.Label>
                                <Form.Control type='Name' placeholder='What is your  Name' />
                                <Form.Label><strong>Email</strong>  </Form.Label>
                                <Form.Control type="email" placeholder="What is your  email" />
                                <Form.Label> <strong>Phone</strong>  </Form.Label>
                                <Form.Control type="number" placeholder="Can we call you?" />
                                <Form.Label> <strong>Nearest Office</strong>  </Form.Label>
                                <Form.Control type="email" placeholder="Enter Location" />
                                <Form.Label> <strong>Industry</strong> </Form.Label>
                                <Form.Control type="text" placeholder="Industry?" />
                                <Form.Label> <strong>Reason for Connecting </strong> </Form.Label>
                                <Form.Control type="text" placeholder="What can we do for you?" />
                            </Form.Group>
                            <Link to="contact">
                                <Button variant="outline-primary">Send Away</Button>{' '}
                            </Link>
                        </Form>
                    </Col>
                    <Col sm={5} className="dirCol">
                        <div className='contcontet'>
                            <p className="contacth">
                                YOUR UNIFIER
                            </p>
                            <Image className='contactimg1' src="/contactimg1.png" alt="" />
                            {/* <img  Image className='contactimg1' src="/contactimg1.png" alt=""/> */}
                            <h3 className="contactn">Joyce Buck</h3>
                            <p className="contactd">Managing Director</p>
                            <div className="contacti">
                                Based on the information you provided, Joyce will be reaching out to you soon!
                            </div>
                        </div>
                    </Col>
                </Row>
            <Footer />
        </>

    )
}
