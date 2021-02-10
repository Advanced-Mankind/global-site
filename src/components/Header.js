import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";
import btnMenuClose from "../../static/Button_ Menu.png";
import btnMenuOpen from "../../static/Button_ Menu_Open.png";
import logo from "../../static/svg.png";
import styles from "../theme/index.module.css";
import "./layout.css";
const Header = (props) => {
  const { open, setOpen } = props;
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  useEffect(() => {
    if (!isTabletOrMobile) {
      setOpen(false);
    }
  }, [isTabletOrMobile]);
  return (
    <>
      {isTabletOrMobile ? (
        <>
          <div className={`${styles.header} pl-3 ${open ? "zindex" : ""}`}>
            <Navbar className="p-0">
              <Navbar.Brand href="/">
                {" "}
                <div className="col-4 col-lg-8">
                  <img src={logo} alt="Logo" />
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
        </>
      ) : (
        <div className={` ${styles.header}`}>
          <Navbar className={`p-0 `}>
            <Navbar.Brand href="/">
              {" "}
              <div className="col-4 col-lg-8">
                <img src={logo} alt="Logo" />
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
      )}
    </>
  );
};

export default Header;
