import React from "react";
import "./Footer.css";
import logo from "../../src/images/logo2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const Footer = () => {
  return (
    <Container>
      <Row>
      <Col sm={1}>&nbsp;</Col>
        <Col sm={8}>
      
        <img src={logo} alt="" className="logo-g"/>
        <ul>Para solicitar asesoría o para cualquier información adicional, no dude en contactarnos.</ul>
          <ul> (+57) 301 212 8137 </ul>
          <ul>info@gameratys.com </ul>
          <ul>Bogotá, Colombia </ul>
        
        </Col>
        <Col  sm={2}>
        
                <ul >Inicio</ul>
                <ul>Empresas</ul>
                <ul>Personas</ul>
                <ul>Portafolio</ul>
      
        </Col>
        <Col sm={1}>&nbsp;</Col>
      </Row>
  </Container>
    
    
  );
}

export default Footer;

