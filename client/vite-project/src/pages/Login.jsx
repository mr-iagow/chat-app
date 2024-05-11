import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {
        loginUser,
        loginInfo,
        loginrError,
        updateLoginInfo,
        isLoginLoading } =  useContext (AuthContext);

    return (
        <>
            <Form onSubmit={loginUser}>
                <Row style = {{
                    height: "100vh",
                    justifyContent: "Center",
                    paddingTop: "10%"
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control 
                            type="email" placeholder="Email" onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})} 
                            />
                            <Form.Control type="password" placeholder="Senha" onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}  />
                            <Button variant="primary" type="submit">
                                {isLoginLoading ? "Logando no sistema....": "Login"}
                            </Button>

                            {loginrError?.error &&

                                <Alert variant = "danger">
                                    <p>{loginrError?.message}</p>
                                </Alert>}

                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Login;