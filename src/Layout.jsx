// You may place things outside of the Router in this file in order to prevent re-renders
import { Navigationbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Logo />
      <Navigationbar />
      <Outlet />
    </>
  );
}
