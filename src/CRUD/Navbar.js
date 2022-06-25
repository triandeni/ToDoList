import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link>
            <Nav.Link href="#action2">Portofolio</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="btn btn-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
