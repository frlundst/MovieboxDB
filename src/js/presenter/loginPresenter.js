import React from "react";
import LoginView from "../views/loginView";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function createUser(email, password) {
    var auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

function LoginPresenter(props) {
    var email = "";
    var password = "";
    /*const signupForm = document.querySelector('#login-section');
    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = signupForm['email-input'];
    })*/
    
    return (
        <div>
            <LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}
                createUser={() => createUser(email, password)}
            />
        </div>
    );
}

export default LoginPresenter;
