import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../static/svg.png";
import styles from "../theme/index.module.css";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            {" "}
            <div className="col-4 col-lg-8">
              <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/Who-We-Are">Who We Are</Nav.Link>
              <Nav.Link href="/Our-Approach">Our Approach</Nav.Link>
              <Nav.Link href="/Case-Studies">Our Work</Nav.Link>
              <Nav.Link href="/Careers">Careers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
