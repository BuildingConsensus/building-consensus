import "./Home.css";
import { Container, Row, Carousel, Image } from "react-bootstrap";
import { EmployeePortrait } from "./EmployeePortrait";
import { Textbox } from "../../components/Textbox";
import { CardComponent } from "../../components/Card";

export function Home() {
  const mediation_card_text = (
    <>
      Resolve your legal conflict peacefully through respectful negotiation{" "}
      <br />
      <br /> We facilitate conversations and guides all parties toward a
      mutually acceptable agreement
    </>
  );
  const elections_card_text = (
    <>
      Is there an dispute with your Band or Council election? <br /> <br /> Our
      impartial Tribunal services can resolve your election in six months or
      less
    </>
  );
  const disputes_card_text = (
    <>
      Do you have a civil dispute? <br /> <br /> Resolve it confidentially and
      faster than in court, through our mediation, arbitration and tribunal
      services.{" "}
    </>
  );
  const estates_card_text = (
    <>
      Secure your family's future with confidence—we specialize in estate
      planning services, including wills, trusts, power of attorney, and probate
      guidance.
      <br /> <br />
      Let us help you protect what matters most.{" "}
    </>
  );

  return (
    <Container fluid className="background-tile d-grid p-0">
      {/* Our Vision Container */}
      <Container className="justify-content-center mt-3 text-background">
        <h2 className="display-5 text-start border-bottom border-dark border-4 mx-5 pt-2">
          <b> Our Vision </b>
        </h2>
        <p className="text-center lead fs-3 py-1 my-1">
          Our mission is to provide independent impartial and substantial
          consultation
        </p>
        <p className="text-center lead fs-3 py-1 my-1">
          We aim to make our services accessible to all communities
        </p>
        <p className="text-center lead fs-3 py-1 my-1">
          Restoring relationships and keeping the peace
        </p>
      </Container>
      <Container fluid>
        <Row className="centered">
          <Textbox title="Our Services" text="" variant="nobar"></Textbox>
        </Row>
      </Container>

      {/* 4 Cards */}
      <Row className="centered g-0">
        <CardComponent
          title="Election Appeals"
          description={elections_card_text}
          link="/ElectionAppeals"
        />
        {/*
        <CardComponent
          title="Civil Disputes"
          description={disputes_card_text}
          link="/EmploymentMediation"
        />
        */}
        <CardComponent
          title="Family Mediation"
          description={mediation_card_text}
          link="/FamilyMediation"
        />
        {/*
        <CardComponent
          title="Estate Services"
          description={estates_card_text}
          link="/EstateServices"
        />
        */}
      </Row>

      <Container
        className="d-flex align-items-center flex-column px-0 py-5 bg-default "
        fluid
      >
        <Container className="text-background p-0 shadow-lg ">
          <h2 className="section-heading mb-0 p-0 dark-mask">Our Team</h2>
        </Container>
        <Carousel className="w-100" interval={null}>
          <Carousel.Item>
            <Container className="d-flex p-0 justify-content-center">
              <EmployeePortrait
                photoURL={
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                points={["10+ years of experience in family law", "...", "..."]}
              />
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
