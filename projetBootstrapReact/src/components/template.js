import React from "react";
import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap";

const Template = () => {
  return (
    <Navbar 
        bg="success"
        variant="light"
        expand="sm"
    >
      <Container>
        <Navbar.Brand href="#home">
            <img
             src='logo.png' 
             width="30"
             hieght="30"
             classeName='d-inline-block align-top'
             />
             { ' '}
            Template Test
        </Navbar.Brand>
        {/* {console.log(Navbar)} */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Template;
