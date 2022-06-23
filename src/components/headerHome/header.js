import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Avatar, Badge } from 'antd';
import { CartItensContext } from '../../context/CartItem';

export const Topo = () => {
  const { getTotalItensOnCart } = useContext(CartItensContext)
  const navigate = useNavigate();


  function handleClick() {
    navigate("/login")
  }
  function handleClick1() {
    navigate("/carrinho")
  }
  function handleClick2() {
    navigate("/contato")
  }
  function handleClick3() {
    navigate("/home")
  }

  return (<>

    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand ><button type="button" class="btn btn-light" onClick={handleClick3}>Tech Books</button></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><button type="button" class="btn btn-light" onClick={handleClick2}>Contato</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{ marginRight: '12px', cursor: 'pointer'}}>
          <Badge count={getTotalItensOnCart()} >
            <Avatar shape="square" size="large" onClick={handleClick1} style={{color:'black'}}><i class="bi bi-cart"></i></Avatar>
          </Badge>
        </div>
        <button type="button" class="btn btn-outline-danger" onClick={handleClick}>Sair</button>

      </Container>

    </Navbar>

  </>);
}