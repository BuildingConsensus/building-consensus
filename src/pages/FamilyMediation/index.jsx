import { Container, Row } from "react-bootstrap";
import { PhotoText } from "../../components/PhotoText";
import { Textbox } from "../../components/Textbox";

export function FamilyMediation() {
  return (
    <Container fluid className="home-container d-grid gap-5 p-0 pt-4">
      <PhotoText
        title="Our Experience"
        text="We consist of three lawyers who bring a combined 50 years of legal and ADR resolution  experience. 
          All three have sat before professional tribunals such as the Indian Residential School tribunal,
          the Human Rights Commission, Rentals Board, and First Nation tribunals.
          We all have extensive court and litigation experience paired with a complex understanding of principles 
          of natural justice and court procedures."
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
        title="Our Experience"
        text="We consist of three lawyers who bring a combined 50 years of legal and ADR resolution  experience. 
          All three have sat before professional tribunals such as the Indian Residential School tribunal,
          the Human Rights Commission, Rentals Board, and First Nation tribunals.
          We all have extensive court and litigation experience paired with a complex understanding of principles 
          of natural justice and court procedures."
        variant="reverse"
      />
    </Container>
  )
}
