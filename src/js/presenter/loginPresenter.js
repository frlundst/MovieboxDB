import React from "react";
import LoginView from "../views/loginView";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function LoginPresenter(props) {
    /*const signupForm = document.querySelector('#login-section');
    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = signupForm['email-input'];
    })*/
    var auth = getAuth();
    createUserWithEmailAndPassword(auth, 'michell.dib@gmail.com', 'abc123')
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    return (
        <div>
            <LoginView></LoginView>
        </div>
    );
}

export default LoginPresenter;