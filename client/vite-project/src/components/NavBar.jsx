import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" className="mb-4" style={{ height: "3.72rem" }} expand="lg">
            <Container className="text-center">
                <Navbar.Brand>
                    <Link to="/" className="text-light text-decoration-none">ChatApp Teste</Link>
                </Navbar.Brand>
                <span className="text-warning">Logged Iago</span>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/login" className="text-light text-decoration-none">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="text-light text-decoration-none">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;
