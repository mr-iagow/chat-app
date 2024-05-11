import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
    const {user, logoutUser} = useContext(AuthContext);

    return (
        <Navbar bg="dark" className="mb-4" style={{ height: "3.72rem" }} expand="lg">
            <Container>
                <h2>
                <Link to="/" className="text-light text-decoration-none">Chat Interno
                </Link>
                </h2>
                { user && (<span className="text-warning">Logged {user?.name}</span>)}
                <Nav>
                    <Stack
                        direction = "horizontal" gap = {3}>
                            {
                                user && (<>
                                <Link onClick={() => logoutUser()} to="/login" className="text-light text-decoration-none"> Sair </Link>
                                </>)
                            }

                            {!user && (<>
                                <Link to="/login" className="text-light text-decoration-none">Login </Link>
                                <Link to="/register" className="text-light text-decoration-none">Registrar-se </Link>
                            </>)}
                    </Stack>
                </Nav>
            </Container>
            </Navbar>
    );
};

export default NavBar;
