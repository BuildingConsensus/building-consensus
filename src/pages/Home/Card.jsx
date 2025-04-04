import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Card.css';

export function CardComponent({ title, description, imageSrc, link }) {
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Body>
        <Card.Title className='mb-3 accent2'>{title}</Card.Title>
        <Card.Text className='text-muted'>{description}</Card.Text>
        <Card.Link as={Link} to={link} className='stretched-link'>Card Link</Card.Link>
      </Card.Body>
      <Card.Img src={imageSrc} />
    </Card>
  );
}