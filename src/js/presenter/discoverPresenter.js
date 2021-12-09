import React from 'react';
import DiscoverView from '../views/discoverView.js'
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function DiscoverPresenter(props){
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data))
            .catch(error => setError(error)));
    }, []);

    return(
        <div>
            {promiseNoData(promise, data, error) || <DiscoverView 
                topMovies={data}
        ></DiscoverView>}
        </div>
    );
}

export default DiscoverPresenter;