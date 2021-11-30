function promiseNoData(promise, data, error) {
    if (promise === null || promise === undefined) {
        return ( <span>no data</span>)
    } else if (data == undefined) {
        return ( <img class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/> )
    } else if (error != null) {
        return ( <span>{error}</span>)
    }
    return false;
}
