import { ApiFetch } from "./apiFetch";

class Model {
    constructor(currentMovie = null) {
        this.observers = [];
        this.currentMovie = currentMovie;
    }

    setCurrentMovie(currentMovie) {
        if (this.currentMovie === currentMovie) {
            return;
        }

        this.currentMovie = currentMovie;
        this.movieDetails = null;
        this.movieDetailsError = null;
        this.movieVideos = null;
        this.movieVideosError = null;
        this.movieCredits = null;
        this.movieCreditsError = null;
        this.similarMovies = null;
        this.similarMoviesError = null;
        this.notifyObservers();

        if (this.currentMovie) {
            ApiFetch.getMovieDetails(this.currentMovie).then((response) => {
                this.movieDetails = response;
                this.notifyObservers();
            }).catch((error) => {
                this.movieDetailsError = error;
                this.notifyObservers();
            });

            ApiFetch.getMovieVideos(this.currentMovie).then((response) => {
                this.movieVideos = response;
                this.notifyObservers();
            }).catch((error) => {
                this.movieVideosError = error;
                this.notifyObservers();
            });

            ApiFetch.getMovieCredits(this.currentMovie).then((response) => {
                this.movieCredits = response;
                this.notifyObservers();
            }).catch((error) => {
                this.movieCreditsError = error;
                this.notifyObservers();
            });

            ApiFetch.getSimilarMovies(this.currentMovie).then((response) => {
                this.similarMovies = response;
                this.notifyObservers();
            }).catch((error) => {
                this.similarMoviesError = error;
                this.notifyObservers();
            });
        }
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(
            (observer) => observer !== callback
        );
    }

    notifyObservers() {
        this.observers.forEach((observer) => {
            try {
                observer();
            } catch (e) {
                console.error(e);
            }
        });
    }
}

export default Model;
