import React from "react";
import {isLoggedIn} from model.js
function promiseNoLogin() {
    var status = isLoggedIn();

    if(status === true){
        return 0;
    }
    else{
        return 1;
    }
}

export default promiseNoLogin;