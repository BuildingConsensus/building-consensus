// You may place things outside of the Router in this file in order to prevent re-renders
import { Navigationbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export function Layout() {
  return (
    <>
      <Logo />
      <Navigationbar />
      <Outlet />
    </>
  );
}