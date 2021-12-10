import React from "react";
import '../../css/loginRegister.css';

function LoginTempView(props) {
    return (
        <div class={`login-section ${props.signIn ? 'background-purple' : 'background-blue'}`}>
            <form action="" class="login-container">

                <ul class="login-nav">
                    <li class={`login-nav-item ${props.signIn ? 'active' : ''}`}>
                        <a onClick={() => props.login()}>Sign In</a>
                    </li>
                    <li class={`login-nav-item ${!props.signIn ? 'active' : ''}`}>
                        <a onClick={() => props.signUp()}>Sign Up</a>
                    </li>
                </ul>

                <p className="login-text">EMAIL</p>
                <input class="login-box"/>

                <p className="login-text">PASSWORD</p>
                <input class="login-box" type="password" />

                <div className="terms-and-conditions">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <a href="" hidden={props.signIn}>Terms and Condition</a>
                    <a hidden={!props.signIn}>Remember me</a>
                </div>

                <button class="login-sign-in">{props.signIn ? "SIGN IN" : "REGISTER"}</button>
            </form>
        </div>
    );
}

export default LoginTempView;
