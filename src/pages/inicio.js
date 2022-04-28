import React from 'react';
import "./inicio.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const Inicio = () => {
  return (
    <Container>
      <Row>
      <Col sm={1}>&nbsp;</Col>
      <Col sm={6}>
            <h2 className="i-intro">Telecomunicaciones & sistemas</h2>
            <p className="i-desc">
              Somos una empresa del sector de las tecnologías de información
              enfocada en prestar soluciones y servicios de forma innovadora e
              integral para mejorar la eficiencia y productividad de su compañía.
            </p>
            <button> Solicitar información</button>
      </Col>
      <Col  sm={4}>
                <ul >Inicio</ul>
                <ul>Empresas</ul>
                <ul>Personas</ul>
                <ul>Portafolio</ul>
        </Col>
        <Col sm={1}>&nbsp;</Col>
      </Row>
    </Container>
  );
};

export default Inicio;
