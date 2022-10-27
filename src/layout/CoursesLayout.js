import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import SideBar from "../Pages/Shared/SideBar/SideBar";

const Courses = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg="4">
            <SideBar></SideBar>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
