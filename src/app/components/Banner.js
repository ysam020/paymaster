import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/banner.css";
import axios from "axios";

function Banner() {
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
      className="banner-container"
      style={{ backgroundImage: `url(${data.banner_bg})` }}
    >
      <Row className="banner-row">
        <Col xs={6} className="banner-col-left">
          <h2>{data.banner_heading}</h2>
          <p>{data.banner_content}</p>
          <button>Lorem</button>
        </Col>
        <Col
          xs={6}
          className="banner-col-right"
          style={{ backgroundImage: `url(${data.banner_image})` }}
        ></Col>
      </Row>
    </Container>
  );
}

export default Banner;
