import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage=() =>{
    return(
      <>
      <Container fluid className="maincontainer" >
      <Navbar/>
      <h1>
        About us page
      </h1>
      <Footer/>
      </Container>
      </>
    )
  }
export default AboutPage