import Container from "react-bootstrap/Container";
import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar className="w-100" bg="light" expand="lg">
      <Container className="w-100 d-flex  justify-content-center">
        <Navbar.Brand>
          <Link to={"/"}>
            <Image style={{ width: "15vh" }} src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav className="d-flex justify-content-between navbarList">
            <Link className="navbarList nav-link mx-3" to={"/"}>
              Home
            </Link>
            <Link className="navbarList nav-link mx-3" to={"/about"}>
              About
            </Link>
            <Link className="navbarList nav-link mx-3" to={"/shop"}>
              Shop
            </Link>
            <Link className="navbarList nav-link mx-3" to={"/counter"}>
              Counter
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
