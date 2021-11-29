import {api_key, base_url} from './apiConfig';

export const ApiFetch = {
    apiCall(params) {
        return fetch(base_url() + params + "api_key=" + api_key()).then(
            (response) =>
                response.ok ? response.json() : throwError(response.statusText)
        );
    },

    getTopMovies(page = 1) {
        return this.apiCall(`/movie/popular?${page}&`);
    },

    getTopRatedMovies(page = 1) {
        return this.apiCall(`/movie/top_rated?page=${page}&`);
    },
    getMovieDetails(id = 566525) {
        return this.apiCall(`/movie/${id}?`);
    },
    getMovieKeywords(id = 566525) {
        return this.apiCall(`/movie/${id}/keywords?`);
    },
    getPopularMovies(page = 1) {
        return this.apiCall(`/movie/popular?`);
    },
    getMovieRecommendations(id = 566525){
        return this.apiCall(`/movie/${id}/recommendations?`);
    },
    getMovieCredits(id = 566525){
        return this.apiCall(`/movie/${id}/credits?`);
    },
    getMovieReviews(id = 566525){
        return this.apiCall(`/movie/${id}/reviews?`);
    },
    getMovieReleaseDates(id = 566525){
        return this.apiCall(`/movie/${id}/release_dates?`);
    },
    getLatestMovie(){
        return this.apiCall(`/movie/latest?`);
    },
    getNowPlayingMovies(page = 1){
        return this.apiCall(`/movie/now_playing?`);
    },
    getUpcomingMovies(page = 1){
        return this.apiCall(`/movie/upcoming?`);
    }
};

function throwError(message) {
    throw new Error(message);
}
