import React from "react";
import '../styles/global.css';
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import samplevideo from "../videos/samplevideo.mp4";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <Container fluid className="maincontainer">
      <Row>
        <Col>
          <div className="col_side_heading">
            <p>To unite is to come together. To unify is to make whole.</p>
          </div>
        </Col>
        <Col className="col_side_content">
          <p>Unify Consulting is a management consulting firm designed to leap over boundaries to discover what lies beyond. Our model breaks the mold with a bespoke approach to every challenge. We’re passionate about co-creating solutions to unlock potential and propel your vision.</p>
          <Link to="about"><Button className="button" variant="outline-primary">About us</Button>{' '}</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <video className="embed-responsive embed-responsive-16by9 video_content" controls>
            <source className="embed-responsive-item" src={samplevideo} type="video/mp4"></source>
          </video>
        </Col>
      </Row>
      <Row>
        <div className="col_side_heading">
          <p>Our expertise is our service.</p>
        </div>
        <div className="col_side_content">
          <p>
            We are truth-tellers. We listen, ask the right questions, and elevate strategies to support your transformation.
          </p>
        </div>
        <Col sm className="col_heading_row">
          <h3>Practices</h3>
          <p className="col_content">What we know.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Industries</h3>
          <p className="col_content">Where we go.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Solutuions</h3>
          <p className="col_content">How we deliver.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
      </Row>
      <Row>
        <div className="col_side_heading">
          <p>What sets us apart.</p>
        </div>
        <Col>
        <Carousel >
          <Carousel.Item interval={500} className="slide1">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide2">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
