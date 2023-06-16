import type React from "react";
import { Navbar } from "flowbite-react";
import logo from "../../ui/logo.svg";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navigation: React.FC = () => {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <img src={logo} width={70} height={70} alt="logo" />
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
