import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { PathLocationName } from "../utilities/PathLocationName";

export function Navigationbar() {
  return (
    <Navbar expand="lg" className="mb-3" variant="dark">
      <Container fluid>
        {/* Brand visible only on large devices */}
        <Navbar.Brand className="d-none d-lg-block" as={Link} to="/">
          Building Consensus
        </Navbar.Brand>
        {/* Current page title visible on small devices */}
        <Navbar.Brand className="d-lg-none">{PathLocationName()}</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={PathLocationName(true) === "/"}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ElectionAppeals"
              active={PathLocationName(true) === "/ElectionAppeals"}
            >
              Indigenous Election Appeals
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/FamilyMediation"
              active={PathLocationName(true) === "/FamilyMediation"}
            >
              Family Mediation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/EmploymentMediation"
              active={PathLocationName(true) === "/EmploymentMediation"}
            >
              Employment Mediation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/AboutUs"
              active={PathLocationName(true) === "/AboutUs"}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
