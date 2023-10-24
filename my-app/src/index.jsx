import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import {Cart} from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar bg="light" expand="lg" className="bg-gradient">
    <Container className="py-2">
      <Nav className="justify-content-start">
        <Nav.Link href="#home"><h4>LUNCH</h4></Nav.Link>
        <Nav.Link href="#home"><h4>DINNER</h4></Nav.Link>
        <Nav.Link href="#home"><h4>DRINKS &amp; PUPU</h4></Nav.Link>
      </Nav>
      <Nav className="justify-content-center">
        <Nav.Link href="#home"><Image src="wod-BuzzsLogo60Years.png" height={70}/> </Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#home"><h4>ABOUT</h4></Nav.Link>
        <Nav.Link href="#home"><h4>LOCATION</h4></Nav.Link>
        <Nav.Link href="#home"><h4>SHOP</h4></Nav.Link>
        <Nav.Link href="#home"><Cart color="white" size={30} /></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const CenterImage = () => (
  <Container className="justify-content-center p-5 m-5"><Image src="wod-buzzs-on+thebeach.png" width={1200}/></Container>
);

const BottomFooter = () => (
  <footer className="mt-auto fixed-bottom">
    <Row>
      <Col className="text-center">
        <h2>Lunch Served Daily</h2>
        <h3>11AM - 3PM</h3>
      </Col>
      <Col className="text-center">
        <h2>Dinner Served Daily</h2>
        <h3>4:30 - 9PM</h3>
      </Col>
    </Row>
    <Row>
      <Image src="wod-buzzs-mahalo.png" />
    </Row>
  </footer>
);
const Buzzs = () => (
  <>
    <TopMenu/>
    <CenterImage/>
    <BottomFooter/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Buzzs/>);
