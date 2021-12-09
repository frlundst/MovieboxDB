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
                    <Form.Control type="email" placeholder="name@example.com" onInput={e => props.setEmail(e.target.value)} />
                    <Form.Label id="error-message-email"></Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password-input">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onInput={e => props.setPassword(e.target.value)} />
                    <Form.Label id="error-message-password"></Form.Label>
                </Form.Group>
                <Form.Group className="buttons">
                <Button variant="primary" type="button" onClick={() => props.createUser()}>
                    Create Account
                </Button>
                <Button variant="primary" type="button" onClick={() => props.loginUser()}>
                    Login
                </Button>
                <Button variant="primary" type="button" onClick={() => props.signOut()}>
                    Sign Out
                </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default LoginView;