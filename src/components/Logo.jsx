import Image from 'react-bootstrap/Image';
import sunset from '../assets/sunset cropped.jpg';

export function Logo() {
  return (
    <>
      <Image src={sunset} alt="Sunset" className="sunset-image" fluid />
    </>
  );
}