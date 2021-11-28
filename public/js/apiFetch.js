const ApiFetch = {
    apiCall(params) {
        return fetch(BASE_URL + params + "?api_key=" + API_KEY).then(
            (response) =>
                response.ok ? response.json() : throwError(response.statusText)
        );
    },

    getTopMovies(page = 1) {
        return this.apiCall(`/movie/popular`);
    }
};

function throwError(message) {
    throw new Error(message);
}
