import React from 'react';
import { Navbar, Container, NavDropdown, FormControl, Button, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const Header = () => {


  let navigate = useNavigate();

  function handleClick() {
    navigate("/contato")
  }


  return (<>

    <Navbar bg="light" expand="lg" >


      <Container fluid>

        <Navbar.Brand href="/"><button type="button" class="btn btn-light">Tech Books</button></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><button type="button" class="btn btn-light" onClick={handleClick} >Contato</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>

  </>);
}