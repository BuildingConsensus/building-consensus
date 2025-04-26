import { Container, Row } from "react-bootstrap";
import { CardComponent } from "./Card";
import { EmployeeCardComponent } from "./EmployeeCard";
import { PhotoText } from "../../components/PhotoText";
import { Textbox } from "../../components/Textbox";
import { Carousel } from "react-bootstrap";

import Flowers from "../../assets/Flowers.jpg";

import "./Home.css";

export function Home() {
  return (
    <Container fluid className="home-container pt-3 p-0 h-100">
      <Container>
        <h2 className="company-name">Building Consensus</h2>
        <p className="description">
          Mediations, Civil Disputes, and Elections Appeals
        </p>
      </Container>
      <Row className="centered justify-content-around my-5 h-100">
        <Textbox
          title="What is Mediation?"
          text="Mediation is a form of assisted negotiation 
            where a neutral third party, the mediator, 
            helps  disputing parties find a mutually agreeable resolution to their conflict. 
            It's a structured process that allows parties to express their perspectives, explore solutions, 
            and potentially reach a settlement that addresses  their needs."
          variant="normal"
        ></Textbox>
        <Textbox
          title="Why Mediate?"
          text="Mediation offers a more collaborative and less formal approach to resolving disputes than going to court. 
          Mediation is typically quicker, more cost-effective, and results in mutually agreeable solutions. 
          It allows parties to retain control over the outcome and tailor solutions  to their specific needs, 
          fostering a more lasting resolution."
          variant="normal"
        ></Textbox>
      </Row>
      <PhotoText
        photoURL={Flowers}
        title="Our Experience"
        text="We consist of three lawyers who bring a combined 50 years of legal and ADR resolution  experience. 
          All three have sat before professional tribunals such as the Indian Residential School tribunal,
          the Human Rights Commission, Rentals Board, and First Nation tribunals.
          We all have extensive court and litigation experience paired with a complex understanding of principles 
          of natural justice and court procedures."
        variant="normal"
      />
      <Row className="justify-content-center mt-5">
        <Textbox
          title={
            <>
              Want to know more?
              <br />
              Check out the cards below
            </>
          }
          text=""
          variant="nobar"
        ></Textbox>
      </Row>

      <Row className="centered mb-5">
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
              <PhotoText
                photoURL={
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                title="Marilyn"
                points={["10+ years of experience in family law", "...", "..."]}
                variant="portrait"
              ></PhotoText>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <PhotoText></PhotoText>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
