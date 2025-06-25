import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { PathLocationName } from "../utilities/PathLocationName";

export function Navigationbar() {
  const [expanded, setExpanded] = useState(false);

  // This is the solution for getting the Bootstrap breakpoint values in JavaScript
  const lgBreakpoint = getComputedStyle(document.body).getPropertyValue(
    "--bs-breakpoint-lg"
  );
  /*
  99% of the time it is unnessary to use useMediaQuery because any css can be rendered responsive using
  Bootstrap's classNames. However, because of bootstrap-react and having to provide a Variant prop to the Nav
  in order to underline active links, It was least messy to just use a javascript variable.
  */
  const isDesktop = useMediaQuery({ query: `(min-width: ${lgBreakpoint})` });

  return (
    <Navbar expanded={expanded} expand="lg" variant="dark">
      <Container fluid>
        {/* Brand visible only on large devices */}
        <Navbar.Brand className="d-none d-lg-block" as={Link} to="/">
          Building Consensus
        </Navbar.Brand>
        {/* Current page title visible on small devices */}
        <Navbar.Brand className="d-lg-none">{PathLocationName()}</Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" variant={isDesktop ? "underline" : "none"}>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
              active={PathLocationName(true) === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ElectionAppeals"
              onClick={() => setExpanded(false)}
              active={PathLocationName(true) === "/ElectionAppeals"}
            >
              Indigenous Election Appeals
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/FamilyMediation"
              onClick={() => setExpanded(false)}
              active={PathLocationName(true) === "/FamilyMediation"}
            >
              Family Mediation
            </Nav.Link>
            {/*
            <Nav.Link
              as={Link}
              to="/EmploymentMediation"
              onClick={() => setExpanded(false)}
              active={PathLocationName(true) === "/EmploymentMediation"}
            >
              Employment Mediation
            </Nav.Link>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
