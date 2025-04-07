import { Container, Row } from 'react-bootstrap'
import { CardComponent } from './Card'
import './Home.css'

export function Home() {
  return (
    <Container className="home-container">
        <h2 className="company-name">Building Consensus</h2>
        <p className="description">Mediations, Civil Disputes, <br/> and Elections Appeals</p>
        <Row className='card-row'>
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
    </Container>
  )
}