import { Container, Row } from 'react-bootstrap'
import './Home.css'

export function Home() {
  return (
    <Container className="home-container">
        <h2 className="tagline">
          <span className='accent1'>Access</span> to professional dispute resolution
          <br />has never been <span className='accent1'>so easy.</span> </h2>
        <p className="description">Avoid headaches while saving money and time by letting us mediate instead of the courts.</p>
    </Container>
  )
}