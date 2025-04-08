import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { PathLocationName } from "../utilities/PathLocationName";

export function Navigationbar() {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  // 992 is the bootstrap breakpoint for large devices
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 992);
  };

  // Easiest way I found to monitor window size changes
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  return (
    <Navbar expanded={expanded} expand="lg" className="mb-3" variant="dark">
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
            <Nav.Link
              as={Link}
              to="/EmploymentMediation"
              onClick={() => setExpanded(false)}
              active={PathLocationName(true) === "/EmploymentMediation"}
            >
              Employment Mediation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/AboutUs"
              onClick={() => setExpanded(false)}
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
