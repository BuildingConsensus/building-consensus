import Flowers from "../../assets/Flowers.jpg";
import Court from "../../assets/court-room.jpg";
import { Container, Row } from "react-bootstrap";
import { PhotoText } from "../../components/PhotoText";
import { Textbox } from "../../components/Textbox";

export function FamilyMediation() {
  const mediationVsCourtText = (
    <>
      In mediation, the parties decide the outcome themselves. The focus is on
      cooperation and communication
      <br />
      Mediation can often be scheduled quickly and resolved in hours or days,
      while court cases can drag on for months or even years.
      <br />
      Mediation costs far less than litigation (in legal fees, expert witnesses,
      court costs, etc.).
      <br />
      Mediation is private. What is discussed remains confidential, while court
      cases are public — court filings and hearings become public records.
    </>
  );

  return (
    <Container fluid className="background-tile d-grid gap-5 p-0 pt-4">
      <PhotoText
        photoURL={Court}
        title="Mediation Over Traditional Court"
        text={mediationVsCourtText}
        variant="normal"
      />
      <Row className="centered justify-content-around my-5">
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
        title="Our Experience in Mediation"
        text="With years of proven success in mediation, our team offers a practical, cost-effective alternative to litigation by
          helping clients resolve disputes amicably and efficiently. Our skilled mediators bring deep legal knowledge and a calm,
          neutral approach to every session, guiding parties toward fair, lasting agreements in matters ranging from family law to
          business conflicts. Trust our experience to help you find common ground and move forward."
        variant="reverse"
      />
    </Container>
  );
}
