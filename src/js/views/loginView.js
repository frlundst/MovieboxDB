import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../css/loginView.css';

function LoginView(props) {
    return (
        <div className="login-section">
            <Form>
                <Form.Group className="mb-3" controlId="email-input">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password-input">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    );
}
export default LoginView;