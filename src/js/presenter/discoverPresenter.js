import React from 'react';
import DiscoverResultsView from '../views/discoverResultsView.js';
import DiscoverFormView from '../views/discoverFormView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';
import { useInfiniteScroll } from '../model.js';

function DiscoverPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [minScore, setMinScore] = React.useState(1);
    const [maxScore, setMaxScore] = React.useState(10);
    const [sort, setSort] = React.useState("popularity"); //Sort
    const [order, setOrder] = React.useState("asc"); //order
    const [sort_by, setSort_by] = React.useState("popularity.asc"); //Final sort and order

    //const [nextPage, setNextPage] = React.useState(null);
    //const [isFetching, setIsFetching, stop] = useInfiniteScroll(getMoreFeed);
    //const [bottom, setBottom] = React.useState(false);


    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data.results))
            .catch(error => setError(error)));
    }, []);

    return (
        <div>
            <DiscoverFormView minScore={minScore}
                maxScore={maxScore}
                onMinScoreChange={score => setMinScore(score)}
                onMaxScoreChange={score => setMaxScore(score)}
                onSortBy={sort_by => setSort(sort_by)}
                onOrder={order => setOrder(order)}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setSort_by(sort + '.' + order);
                    console.log(sort_by);
                    setPromise(
                        ApiFetch.discoverMovie(sort_by, minScore, maxScore)
                            .then((data) => {
                                setData(data.results);
                                //setNextPage(2);
                            })
                            .catch((error) => setError(error))
                    );
                }}
            >
            </DiscoverFormView>

            {promiseNoData(promise, data, error) || <DiscoverResultsView
                discoverResults={data}
            ></DiscoverResultsView>}
        </div>
    );
}

export default DiscoverPresenter;