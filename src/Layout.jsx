import { Navigationbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navigationbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}