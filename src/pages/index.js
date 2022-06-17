import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
    <Container fluid  className="maincontainer" >
      <Navbar/>
      <h1>
        Home page
      </h1>
      <Footer/>
      </Container>
    </>
    
  )
}
