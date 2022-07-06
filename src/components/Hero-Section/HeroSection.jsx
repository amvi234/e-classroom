import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            
            <div className="search">
              <p>
                <h1>WELCOME TO THE E-LEARNING PLATFORM. Provides education with information, tools and resources to support and enhance education delivery.</h1>
              </p>
              {/* <input type="text" placeholder="Search" /> */}
              {/* <button className="btn">Search</button> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
