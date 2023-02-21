/* eslint-disable linebreak-style */
// importation des méthodes react
import { useState, useEffect } from 'react';
import axios from 'axios';

// importation des composants
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// importation des styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Header() {
  return (
    <Navbar expand="lg" className="header_navBar">
      <Container fluid>
        <Navbar.Brand className="header_menu" href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="header_menu" href="/">Classement</Nav.Link>
            <Nav.Link className="header_menu" href="/simulator">Simulateur</Nav.Link>
            <NavDropdown title="Liens utiles" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://etherscan.io/" target="_blank">
                Etherscan
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.ledger.com/fr" target="_blank">Sécuriser mes actifs</NavDropdown.Item>
              <NavDropdown.Item href="https://app.uniswap.org/#/swap" target="_blank">
                Uniswap (DEX)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://cryptoast.fr/qu-est-ce-que-la-blockchain/" target="_blank">
                Qu'est-ce que la blockchain ?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              expand="xl"
              type="search"
              placeholder="Nom du projet"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" className="btn btn-light">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
