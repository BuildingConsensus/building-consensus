import { Container, Row, Col } from "react-bootstrap";
import { CardComponent } from "./Card";
import { Textbox } from "../../components/Textbox";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import topImg from "../../assets/skyline-cropped.jpg";
import "./Home.css";
import { EmployeePortrait } from "./EmployeePortrait";

export function Home() {
  return (
    <Container fluid className="home-container d-grid gap-2 p-0">
      {/* Our Vision Container */ }
      <Container fluid="xl" className="justify-content-center d-flex border border-dark p-0 border-2 position-relative bg-secondary d-none d-md-flex">
        <Image src={topImg} className="bg-image" fluid></Image>
        <Container fluid className="d-flex img-text flex-column">
          <h2 className="display-1 text-start border-bottom border-dark border-4 pt-xl-5 mx-5 mt-xxl-5 my-lg-4 mb-md-2 mb-sm-1">
            Our Vision
          </h2>
          <p className="text-center lead fs-2 my-xl-5 my-lg-4 mb-md-2 mb-sm-1">
            Our mission is to provide independent impartial and substantial consultation
          </p>
          <p className="text-center lead fs-2 mb-xl-5 mb-lg-4 mb-md-2 mb-sm-1">
            We aim to resolve disputes by consensus building in
            communities
          </p>
          <p className="text-center lead fs-2">
            Restoring relationships and keeping the peace
          </p>
        </Container>
      </Container>

      <Row className="centered">
        <Textbox
          title="Our Services"
          text=""
          variant="nobar"
        ></Textbox>
      </Row>

      {/* 4 Cards */ }
      <Col>
        <Row className="justify-content-evenly">
          <CardComponent
            title="Election Appeals"
            description="Resolve band and council elections appeals in 6 months or less."
            link="/ElectionAppeals"
          />
          <CardComponent
            title="Civil Disputes"
            description="Resolve workplace disputes and grievances."
            link="/EmploymentMediation"
          />
        </Row>
        <Row className="justify-content-evenly">
          <CardComponent
            title="Family Mediation"
            description="Family law and court ordered mediations."
            link="/FamilyMediation"
          />
          <CardComponent
            title="Estate Services"
            description="Content"
            link="/FamilyMediation"
          />
        </Row>
      </Col>

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
          <Carousel.Item>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
