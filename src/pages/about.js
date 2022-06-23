import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "gatsby";
import Button from 'react-bootstrap/Button';


const AboutPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container className="maincontainer font" >
        <div className="partion text-center">
          <img className="yellowdot" src="../yellowdots.svg" alt="this is innovation"></img>
        </div>
        <div className="about-heading text-center ">
          <h1>About Mobedo</h1>
        </div>
        <Row className="row_content">
          <Col>
            <div className="col_side_heading">
              <p>We have been delivering top-quality software solutions on time, on scope, on budget since 1992.</p>
            </div>
          </Col>
          <Col className="col_side_content">
            <img className="aboutus" src="../about-us.png" alt="this is Aboutus image"></img>
          </Col>
        </Row>
      </Container>
      <Row className="row_content_aboutus font">
        <Col>
          <img className="ourmission" src="../our-mission.png" alt="this is Aboutus image"></img>
        </Col>
        <Col className="col_side_content">
          <div className="partion ">
            <img className="yellowdot1" src="../yellowdots.svg" alt="this is innovation"></img>
          </div>
          <h2>Our Mission</h2>
          <p className="aboutus_secondrow">At Sparsh, we work with passion & commitment to become a globally <br />
            renowned software development company. With our ingenious software <br />
            solutions, we help companies embrace digital transformation to improve  <br />
            their business agility, optimize operations & boost their revenues.</p>
        </Col>
      </Row>
      <Container className="maincontainer font" >
        <Row className="row_content ">
          <Col>
            <div className="partion ">
              <img className="yellowdot2" src="../yellowdots.svg" alt="this is innovation"></img>
            </div>
            <h2>Our Vission</h2>
            <p className="aboutus_secondrow">We are committed to delivering value-added, high-quality IT solutions with a holistic approach that incorporates innovative thinking & collaborative techniques. By working alongside our clients we innovate on projects like never before and build their trust.</p>
          </Col>
          <Col className="col_side_content">
            <img className="ourvision" src="../our-vision.png" alt="this is Aboutus image"></img>
          </Col>
        </Row>
        <Row className="row_content ">
          <Col>
          <img className="ourvision" src="../our-vision.png" alt="this is Aboutus image"></img>
          </Col>
          <Col className="col_side_content">
          <div className="partion ">
              <img className="yellowdot2" src="../yellowdots.svg" alt="this is innovation"></img>
            </div>
            <h2>Our Values</h2>
            <p className="aboutus_secondrow">We are committed to delivering value-added, high-quality IT solutions with a holistic approach that incorporates innovative thinking & collaborative techniques. By working alongside our clients we innovate on projects like never before and build their trust.</p>
          </Col>
        </Row>
        <Row>
        <div className="about-heading text-center ">
          <h1>Our Team</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates mollitia dignissimos dolore unde ad alias voluptatibus vero eveniet neque dicta, perferendis perspiciatis, adipisci iure porro possimus, officiis omnis quia a.</p>
        </div>
        </Row>
      </Container>
      <Row className="banner font">
        <Col>
          <div >
            <h2 className="banner-content">We specialize in turning your ideas into software. <br />
              Give us a call, and we’ll work with you to turn your <br />
              great idea into reality!</h2>
          </div>
        </Col>
        <Col>
          <Row>
            <Col>
              <img className="exclametry-mark" src="../exclamation-mark-90.png" alt="this is innovation"></img>
            </Col>
            <Col>
              <div className='email-about-us'>
                <img src="/mail.png" width="25px" height="25px" alt="" /> info@mobedo.com
              </div>
              <div className='phone-about-us'>
                <img src="/phone.png" width="25px" height="25px" alt="" /> 01897465226
              </div>
              <Link to="/contact"> <Button variant="warning" className="btn1">GET IN TOUCH</Button>{' '} </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className="maincontainer font" >
      <Row>
      <div className="col_side_heading text-center head">
          <p>Why Mobedo</p>
        </div>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
        </p>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
        </p>
        </Row>
        </Container>
     

      <Footer />
    </>
  )
}
export default AboutPage