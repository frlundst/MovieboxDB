import React from "react";
import LoginView from "../views/loginView";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




function createUser(email, password) {
    var auth = getAuth();
    const passwordErrorMessage = document.getElementById("error-message-password");
    const emailErrorMessage = document.getElementById("error-message-email");
    emailErrorMessage.style.opacity = 0;
    passwordErrorMessage.style.opacity = 0;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    emailErrorMessage.style.opacity = 1;
                    emailErrorMessage.innerHTML = 'Email already in use!'
                    break;
                case 'auth/weak-password':
                    passwordErrorMessage.style.opacity = 1;
                    passwordErrorMessage.innerHTML = 'Password not strong enough.'
                    break;
            }
        })
}

function isLoggedin(){
    const auth = getAuth();
    var user = auth.currentUser;
    if(user){
        return true;
    }
    else{
        return false;
    }
}

function loginUser(email, password) {

    const auth = getAuth();
    const emailErrorMessage = document.getElementById("error-message-email");
    const passwordErrorMessage = document.getElementById("error-message-password");

    emailErrorMessage.style.opacity = 0;
    passwordErrorMessage.style.opacity = 0;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Successful sign in!");
            console.log(userCredential.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (error.code) {
                case 'auth/wrong-password':
                    passwordErrorMessage.style.opacity = 1;
                    passwordErrorMessage.innerHTML='Incorrect Password.'
                    break;
            }
        });
}

function signOutUser() {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Signed out");
    }).catch((error) => {
        console.log("Signout error occured.");
    });
}

function LoginPresenter(props) {
    var email = "";
    var password = "";

    return (
        <div>
            <LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}
                createUser={() => {
                    createUser(email, password)
                }}
                loginUser={() => {
                    loginUser(email, password)
                }}
                signOut={() => {
                    signOutUser()
                }}
            />
        </div>
    );
}

export default LoginPresenter;
