import React from "react";
import LoginView from "../views/loginView";
import '../../css/loginRegister.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import promiseNoLogin from "../promiseNoLogin";

function LoginPresenter(props) {
    const [signIn, setSignIn] = React.useState(true);

    var email = "";
    var password = "";
    

    return (
        
        <div>
            {promiseNoLogin() || (
            <LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}

                createUser={() => {
                    props.model.createUser(email, password)
                }}

                loginUser={() => {
                    props.model.loginUser(email, password)
                }}

                signIn={signIn}
                login={() => setSignIn(true)}
                signUp={() => setSignIn(false)}
            />)}
            
        </div>


    );
}

export default LoginPresenter;
