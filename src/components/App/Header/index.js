//importation des méthodes react
import React, { useState, useEffect } from 'react';

//importation des composants
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//importation des styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Header() {
  const [theme, setTheme] = useState('light');
  const {toggleTheme} = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Navbar bg="light" expand="lg" className="header_navBar">
      <Container fluid>
        <Navbar.Brand href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Top 100</Nav.Link>
            <Nav.Link href="/simulator">Simulateur</Nav.Link>
            <NavDropdown title="Liens utiles" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.ledger.com/fr" target="_blank">Sécuriser mes actifs</NavDropdown.Item>
              <NavDropdown.Item href="https://etherscan.io/" target="_blank">
                Etherscan
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://cryptoast.fr/qu-est-ce-que-la-blockchain/" target="_blank">
                Qu'est-ce que la blockchain ?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button type="button" onClick={toggleTheme}>Toggle Theme</button>
          <Form className="d-flex">
            <Form.Control
              expand="xl"
              type="search"
              placeholder="Nom du projet"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
