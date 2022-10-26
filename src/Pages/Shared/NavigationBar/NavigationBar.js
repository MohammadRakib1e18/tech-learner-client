import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import navTitle from "../../../Images/img3.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar
      className="py-0"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="nav-img" src={navTitle} alt="nav-title" />
          <span className="nav-title mx-2 fw-bold">Tech Learner</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav">
            <ul className="d-lg-flex">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="blogs"
              >
                <li>Blogs</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="about"
              >
                <li>About Us</li>
              </NavLink>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
