import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container fluid className="maincontainer" >
        <h1>
          About us page
        </h1>
      </Container>
      <Footer />
    </>
  )
}
export default AboutPage