import type React from "react";
import { Navbar } from "flowbite-react";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navigation: React.FC = () => {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <img src="/logo.svg" alt="logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/korea">Korea</Navbar.Link>
        <Navbar.Link href="/china">China</Navbar.Link>
        <Navbar.Link href="/japan">Japan</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
