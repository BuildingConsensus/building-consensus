import Card from 'react-bootstrap/Card';

export function EmployeeCardComponent({ name, phone, email, srcImg}) {
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Body>
        <Card.Img variant="top" src={srcImg} className='card-image' />
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text className='text-muted text-center'>{phone}<br/>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
}