import { Container, Row } from 'react-bootstrap'
import { CardComponent } from './Card'
import './Home.css'

export function Home() {
  return (
    <Container className="home-container">
        <h2 className="tagline">
          <span className='accent1'>Access</span> to professional dispute resolution
          <br />has never been <span className='accent1'>so easy.</span> </h2>
        <p className="description text-muted">Avoid headaches while saving money and time by letting us mediate instead of the courts.</p>
        <Row className='card-row'>
          <CardComponent
            title="Indigenous Election Appeals"
            description="A neutral third party helps disputing parties reach a mutually acceptable agreement."
            imageSrc="https://via.placeholder.com/150"
          />
          <CardComponent
            title="Family Mediation"
            description="A neutral third party makes a binding decision to resolve the dispute."
            imageSrc="https://via.placeholder.com/150"
          />
          <CardComponent
            title="Employment Mediation"
            description="Parties communicate directly to reach a mutually acceptable agreement."
            imageSrc="https://via.placeholder.com/150"
          />
        </Row>
    </Container>
  )
}