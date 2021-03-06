import React from 'react';
import { Container , Button , Form,Card } from 'react-bootstrap';
import './login.css';
import {Link} from 'react-router-dom';


const Login = ()=>(
    
    <div className="login-container">
       
            <Container style={{maxWidth:"400px"}} >
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Link to="/home">
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Link>
                </Form>
            </Container>
        
    </div>

)

export default Login;