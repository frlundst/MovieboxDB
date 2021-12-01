import React from "react";

function promiseNoData(promise, data, error) {
    if (promise === null || promise === undefined) {
        
        return <span>no data</span>;

    } else if (data === null || data === undefined) {
        
        return(
            <img
                className="loadingSymbol"
                src="http://www.csc.kth.se/~cristi/loading.gif"
                alt="Loading Symbol"
            />
        );

    } else if (error != null) {
        
        return <span>{error}</span>;
    }

    return false;
}

export default promiseNoData;
