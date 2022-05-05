import React from 'react';
import "./inicio.css";
import persona from "../../src/images/persona1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import soporte from "../../src/images/soporte.png";


const Inicio = () => {
  return (
    <Container>
      <Row className="rowstyle">
        <Col sm={1}>&nbsp;</Col>
        <Col sm={6} className="col1">
            <h2 className="light">Telecomunicaciones & sistemas</h2>
            <p className="info-2">
              Somos una empresa del sector de las tecnologías de información
              enfocada en prestar soluciones y servicios de forma innovadora e
              integral para mejorar la eficiencia y productividad de su compañía.
            </p>
            <button> Solicitar información </button>
        </Col>
        <Col  sm={4}>
            <img src={persona} className="img"/>
        </Col>
        <Col sm={1}>&nbsp;</Col>
      </Row>

      <Row xs={1} md={5} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col>
            <Card className="card">
              <Card.Img variant="top" src={soporte} alt="" className="card-img" />
              <Card.Body >
                <Card.Title className="card-title">Soporte remoto</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          
        ))}
      </Row>
      <Row> 
      <Col sm={4}>&nbsp;</Col>
      <Col sm={4}> 
        <h4 className="text-2"> Servicios que tenemos para ti</h4>
      </Col>
      <Col sm={4}>&nbsp;</Col>
      </Row>
    </Container>
  );
};

export default Inicio;
