import { Container, Placeholder, Row } from "react-bootstrap";
import { CardComponent } from "./Card";
import { EmployeeCardComponent } from "./EmployeeCard";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.css";

export function Home() {
  return (
    <Container fluid className="home-container pt-3">
      <h2 className="company-name">Building Consensus</h2>
      <p className="description">
        Mediations, Civil Disputes, <br /> and Elections Appeals
      </p>
      <Row className="centered mb-3">
        <CardComponent
          title="Indigenous Election Appeals"
          description="Resolve band and council elections appeals in 6 months or less."
          link="/ElectionAppeals"
        />
        <CardComponent
          title="Family Mediation"
          description="Family law and court ordered mediations."
          link="/FamilyMediation"
        />
        <CardComponent
          title="Employment Mediation"
          description="Resolve workplace disputes and grievances."
          link="/EmploymentMediation"
        />
      </Row>
      <Row className="flex-nowrap overflow-auto employee-row">
        <EmployeeCardComponent
          name="Marilyn Adsit"
          phone="(780) 123-4567"
          email="adsit@outlook.ca"
          srcImg={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
        <EmployeeCardComponent
          name="James H."
          phone="(780) 123-4567"
          email="james@outlook.ca"
          srcImg={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
        <EmployeeCardComponent
          name="Boris Nedev"
          phone="(780) 123-4567"
          email="boris@outlook.ca"
          srcImg={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </Row>
    </Container>
  );
}
