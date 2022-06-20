import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header"



export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Container fluid className="maincontainer" >
        <h1>
          Home page
        </h1>
      </Container>
      <Footer />
    </>

  )
}
