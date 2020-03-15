import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../static/logo/logo.png";
import "./Header.scss";

const Header = props => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar as={Container} collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="120px"
            alt="UA_logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="header-item" href="">
              총학 소개
            </Nav.Link>
            <Nav.Link
              active={props.notice}
              className="header-item"
              href="/notice-detail"
            >
              공지사항
            </Nav.Link>
            <Nav.Link className="header-item" href="">
              학생 청원
            </Nav.Link>
            <Nav.Link className="header-item" href="">
              학생 복지
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-item" href="">
              <Button variant="outline-dark">로그인</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
