import React from "react";
import '../css/loadingSymbol.css';
import Spinner from 'react-bootstrap/Spinner';

function promiseNoData(promise, data, error) {
    if (promise === null || promise === undefined) {
        return <span>no data</span>;

    } else if (data === null || data === undefined) {
        return (
            <div className="loading-symbol">
                <Spinner animation="border" role="status" size="lg" variant='light'>
                    <span className="visually-hidden"></span>
                </Spinner>
            </div>
        );

    } else if (error != null) {
        return <span>{error}</span>;
    }

    return false;
}

export default promiseNoData;
