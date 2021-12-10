import React from 'react'
import Form from 'react-bootstrap/Form';
import '../../css/loginRegister.css';

function LoginView(props) {
    return (
        <div className={`login-section ${props.signIn ? 'background-purple' : 'background-blue'}`}>
            <form action="" className="login-container">

                <ul className="login-nav">
                    <li className={`login-nav-item ${props.signIn ? 'active' : ''}`}>
                        <a onClick={() => props.login()}>Sign In</a>
                    </li>
                    <li className={`login-nav-item ${!props.signIn ? 'active' : ''}`}>
                        <a onClick={() => props.signUp()}>Sign Up</a>
                    </li>
                </ul>

                <p className="login-text">EMAIL</p>
                <input className="login-box" onInput={e => props.setEmail(e.target.value)}/>
                <Form.Label id="error-message-email"></Form.Label>
                
                <p className="login-text">PASSWORD</p>
                <input className="login-box" type="password" onInput={e => props.setPassword(e.target.value)}/>
                <Form.Label id="error-message-password"></Form.Label>

                <div className="terms-and-conditions">
                    <input type="checkbox" classNames="form-check-input" id="exampleCheck1"/>
                    <a href="" hidden={props.signIn}> Terms and Condition</a>
                    <a hidden={!props.signIn}> Remember me</a>
                </div>

                <button className="login-sign-in" hidden={props.signIn} onClick={() => props.createUser()}>REGISTER</button>
                <button className="login-sign-in" hidden={!props.signIn} onClick={() => props.loginUser()}>LOGIN</button>
            </form>
        </div>
    );
}
export default LoginView;