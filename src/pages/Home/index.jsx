import "./Home.css";
import topImg from "../../assets/skyline-cropped.jpg";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { EmployeePortrait } from "./EmployeePortrait";
import { Textbox } from "../../components/Textbox";
import { CardComponent } from "./Card";

export function Home() {
  const mediation_card_text = <>Resolve your legal conflict peacefully through respectful negotiation <br/><br/> We facilitate conversations and guides all parties toward a mutually acceptable agreement</>;
  const elections_card_text = <>Is there an dispute with your Band or Council election? <br/> <br/> Our impartial Tribunal services can resolve your election in six months or less</>;
  const disputes_card_text = <>Do you have a civil dispute? <br/> <br/> Resolve it confidentially and faster than in court, through our mediation, arbitration and tribunal services. </>;
  const estates_card_text = <>Secure your family's future with confidence—we specialize in  estate planning services, including wills, trusts, power of attorney, and probate guidance.<br/> <br/>Let us help you protect what matters most. </>;
  return (
    <Container fluid className="home-container d-grid gap-2 p-0">
      {/* Our Vision Container */}
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

      {/* 4 Cards */}
      <Col>
        <Row className="justify-content-evenly">
          <CardComponent
            title="Election Appeals"
            description={elections_card_text}
            link="/ElectionAppeals"
          />
          <CardComponent
            title="Civil Disputes"
            description={disputes_card_text}
            link="/EmploymentMediation"
          />
        </Row>
        <Row className="justify-content-evenly">
          <CardComponent
            title="Family Mediation"
            description={mediation_card_text}
            link="/FamilyMediation"
          />
          <CardComponent
            title="Estate Services"
            description={estates_card_text}
            link="/EstateServices"
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
