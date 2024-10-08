import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <Container fluid className="testimonials-container">
      <Row className="testimonials-row">
        <h2>People say the nicest things</h2>
        <Col xs={4}>
          <div className="testimonials-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s"
              alt=""
            />
            <span>Lorem ipsum</span>
            <p className="testimonials-position">Position</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident earum fuga odit natus vero qui doloremque officia sequi
              blanditiis.
            </p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="testimonials-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s"
              alt=""
            />
            <span>Lorem ipsum</span>
            <p className="testimonials-position">Position</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident earum fuga odit natus vero qui doloremque officia sequi
              blanditiis.
            </p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="testimonials-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s"
              alt=""
            />
            <span>Lorem ipsum</span>
            <p className="testimonials-position">Position</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident earum fuga odit natus vero qui doloremque officia sequi
              blanditiis.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
