import Card from 'react-bootstrap/Card';
import './Card.css';

export function CardComponent({ title, description, imageSrc }) {
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Body>
        <Card.Title className='mb-3 accent2'>{title}</Card.Title>
        <Card.Text className='text-muted'>{description}</Card.Text>
      </Card.Body>
      <Card.Img src={imageSrc} />
    </Card>
  );
}