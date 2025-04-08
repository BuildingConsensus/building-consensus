import { useLocation } from 'react-router-dom';

export function PathLocationName(wantRawPathname = false) {
  const location = useLocation();
  return wantRawPathname ? location.pathname : getPageName(location.pathname);
}

function getPageName(pathname) {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/ElectionAppeals':
      return 'Indigenous Election Appeals';
    case '/FamilyMediation':
      return 'Family Mediation';
    case '/EmploymentMediation':
      return 'Employment Mediation';
    case '/AboutUs':
      return 'About Us';
    default:
      return '';
  }
}