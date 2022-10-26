import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import navTitle from "../../../Images/img3.png";
import "./NavigationBar.css";
import {FaMoon, FaRegMoon } from "react-icons/fa";

const NavigationBar = () => {
  const [dark, setDark] = useState(true);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={dark ? "bg-dark text-light py-0" : "bg-dark bg-opacity-25 text-dark py-0"}
    >
      <Container className={dark?'text-light':'text-dark'}>
        <Navbar.Brand href="#home">
          <img className="nav-img" src={navTitle} alt="nav-title" />
          <span
            className={
              dark
                ? "text-light nav-title mx-2 fw-bold"
                : "text-dark nav-title mx-2 fw-bold"
            }
          >
            Tech Learner
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav ms-auto">
            <ul className="d-lg-flex">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/home"
              >
                <li>Courses</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="blogs"
              >
                <li>Blogs</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="blogs"
              >
                <li>F&Q</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="about"
              >
                <li>About Us</li>
              </NavLink>
            </ul>
          </Nav>
          <span className="dark-mood"
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? <FaRegMoon /> : <FaMoon />}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
