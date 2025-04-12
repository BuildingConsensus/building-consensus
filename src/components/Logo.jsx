import Image from 'react-bootstrap/Image';
import sunset from '../assets/sunset cropped.jpg';
import './Logo.css';

export function Logo() {
  return (
    <>
      <Image src={sunset} alt="Sunset" className='sunset-image' fluid />
    </>
  );
}