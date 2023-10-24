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

