import React from "react";
import LoginView from "../views/loginView";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function createUser(email, password) {
    var auth = getAuth();
    const emailErrorMessage = document.getElementById("error-message-email");
    const passwordErrorMessage = document.getElementById("error-message-password");
    emailErrorMessage.style.opacity = 0;
    passwordErrorMessage.style.opacity = 0;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            switch (error.code) {
                default:
               case 'auth/email-already-in-use':
                 emailErrorMessage.style.opacity = 1;
                 break;
               case 'auth/weak-password':
                 passwordErrorMessage.style.opacity = 1;
                 break;
             }
         })
}


function LoginPresenter(props) {
    var email = "";
    var password = "";

    return (
        <div>
            <LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}
                createUser={() => {createUser(email, password)
                }}
            />
        </div>
    );
}

export default LoginPresenter;
