import { Container, Placeholder, Row } from 'react-bootstrap'
import { CardComponent } from './Card'
import { EmployeeCardComponent } from './EmployeeCard'
import ListGroup from 'react-bootstrap/ListGroup'
import './Home.css'

export function Home() {
  return (
    <>
      <Container className="home-container">
        <h2 className="company-name">Building Consensus</h2>
        <p className="description">Mediations, Civil Disputes, <br/> and Elections Appeals</p>
        <Row className='card-row mb-3'>
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
      <Container fluid className='py-2'>
        <Row className='card-row mb-3 flex-nowrap d-flex'>
          <EmployeeCardComponent name="Marilyn Adsit" phone="(780) 123-4567" email="adsit@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <EmployeeCardComponent name="James H." phone="(780) 123-4567" email="james@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <EmployeeCardComponent name="Marilyn Adsit" phone="(780) 123-4567" email="adsit@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <EmployeeCardComponent name="James H." phone="(780) 123-4567" email="james@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <EmployeeCardComponent name="Marilyn Adsit" phone="(780) 123-4567" email="adsit@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <EmployeeCardComponent name="James H." phone="(780) 123-4567" email="james@outlook.ca" srcImg={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
        </Row>
      </Container>
    </>
  )
}