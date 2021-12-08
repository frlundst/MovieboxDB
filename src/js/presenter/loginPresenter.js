import React from "react";
import LoginView from "../views/loginView";

function LoginPresenter(props){
    /*const signupForm = document.querySelector('#login-section');
    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = signupForm['email-input'];
    })*/
    return(
        <div>
            <LoginView></LoginView>
        </div>
    );
}

export default LoginPresenter;