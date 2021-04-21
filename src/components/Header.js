import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../static/AM_Logo_header.svg";
import btnMenuClose from "../../static/Button_ Menu.png";
import btnMenuOpen from "../../static/Button_ Menu_Open.png";
import styles from "../theme/index.module.css";
import "./layout.css";
const Header = (props) => {
  const { open, setOpen } = props;

  return (
    <>
      <div
        className={`${styles.header} d-md-block d-lg-none ${
          open ? "zindex" : ""
        }`}
      >
        <Navbar className="p-0">
          <Navbar.Brand href="/">
            <div className="col-8">
              <img src={logo} className="w-100" alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <span id="menuButton" onClick={() => setOpen(!open)}>
                {open ? (
                  <img src={btnMenuClose} alt="btnMenuOpen" />
                ) : (
                  <img src={btnMenuOpen} alt="btnMenuClose" />
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div id="myNav" className={`overlay ${open ? "h-100" : "h-0"}`}>
        <div className="overlay-content">
          <a href="/Who-We-Are">Who We Are</a>
          <a href="/Our-Approach">Our Approach</a>
          <a href="/Case-Studies">Our Work</a>
          <a href="/Careers">Careers</a>
        </div>
      </div>
      <>
        <div className={` ${styles.header} d-lg-block d-none`}>
          <Navbar className={`p-0 `}>
            <Navbar.Brand href="/">
              {" "}
              <div className="col-8 ">
                <img src={logo} className="w-100" alt="Logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link className="mx-4 nav-link-am" href="/Who-We-Are">
                  Who We Are
                </Nav.Link>
                <Nav.Link className="mx-4 nav-link-am" href="/Our-Approach">
                  Our Approach
                </Nav.Link>
                <Nav.Link className="mx-4 nav-link-am" href="/Case-Studies">
                  Our Work
                </Nav.Link>
                <Nav.Link className="mx-4 nav-link-am" href="/Careers">
                  Careers
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    </>
  );
};

export default Header;
