import React from "react";

function promiseNoRender(promise, data, error) {
    if (promise === null || promise === undefined) {
        return(<div></div>);
    } else if (data === null || data === undefined) {
        return(<div></div>);
    } else if (error != null) {
        return(<div></div>);
    }

    return false;
}
export default promiseNoRender;
