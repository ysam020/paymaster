import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/about-us.css";
import axios from "axios";

function AboutUs() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      setData(res.data);
    }

    getBannerData();
  }, []);

  return (
    <Container
      fluid
      className="about-us-container"
      style={{ backgroundImage: `url(${data.about_us_bg})` }}
    >
      <Row>
        <Col>
          <h1>About Us</h1>

          <hr />
        </Col>
      </Row>
      <Row
        className="about-us-row-2"
        style={{ backgroundImage: `url(${data.about_us_img})` }}
      ></Row>
      <Row>
        <div className="about-us-col">{data.about_us_content}</div>
      </Row>
    </Container>
  );
}

export default AboutUs;
