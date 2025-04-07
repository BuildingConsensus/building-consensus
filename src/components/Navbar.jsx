import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export function Navigationbar() {
  return (
    <Navbar expand="lg" className='mb-3'>
      <Container>
        <Navbar.Brand as={Link} to="/">Building Consensus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ElectionAppeals">Indigenous Election Appeals</Nav.Link>
            <Nav.Link as={Link} to="/FamilyMediation">Family Mediation</Nav.Link>
            <Nav.Link as={Link} to="/EmploymentMediation">Employment Mediation</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}