import React from 'react';
import LoginTempView from "../views/loginTempView"

function LoginTempPresenter(props){
    const [signIn, setSignIn] = React.useState(true);

    return(
        <div>
            <LoginTempView
                signIn={signIn}
                login={() => setSignIn(true)}
                signUp={() => setSignIn(false)}
            />
        </div>
    );
}

export default LoginTempPresenter;
