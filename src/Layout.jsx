// You may place things outside of the Router in this file in order to prevent re-renders
import { Navigationbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Layout() {
  return (
    <Container>
      <Navigationbar />
      <Row>
        <Col><Logo /></Col>
      </Row>
      <Row>
        <Col><Outlet /></Col>
      </Row>
    </Container>
  );
}