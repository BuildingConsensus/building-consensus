import Figure from 'react-bootstrap/Figure';
import sunset from '../assets/sunset cropped.jpg';
import './Sunset.css'

export function Sunset() {
  return (
    <Figure>
      <Figure.Image
        alt="A sunset"
        src={sunset}
      />
      <Figure.Caption>
        Building Consensus
      </Figure.Caption>
    </Figure>
  );
}