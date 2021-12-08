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
        .catch(error => {
            switch (error.code) {
                default:
               case 'auth/email-already-in-use':
                 console.log(`Email address ${email} already in use.`);
                 validate();
                 break;
               case 'auth/invalid-email':
                 console.log(`Email address ${email} is invalid.`);
                 break;
               case 'auth/weak-password':
                 console.log('Password not strong enough.');
                 break;
             }
         })
}

function validate(){
    var email = document.getElementById("emailInput");
    var password = document.getElementById("passwordInput");
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
