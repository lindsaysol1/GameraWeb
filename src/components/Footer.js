import React from "react";
import "./Footer.css";
import logo from "../../src/images/logo2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const Footer = () => {
  return (
    <Container className="footer">
      <Row >
        <Col sm={1}>&nbsp;</Col>
          <Col sm={8} className="text">
            <img src={logo} alt="" className="logo-g"/>
            <ol>Para solicitar asesoría o para cualquier información adicional, no dude en contactarnos.</ol>
            <ol> (+57) 301 212 8137 </ol>
            <ol>info@gameratys.com </ol>
            <ol>Bogotá, Colombia </ol>
          </Col>
          <Col  sm={2} className="text2">
            <ol >Inicio</ol>
            <ol>Empresas</ol>
            <ol>Personas</ol>
            <ol>Portafolio</ol>
          </Col>
        <Col sm={1}>&nbsp;</Col>
      </Row>
  </Container>
    
    
  );
}

export default Footer;

