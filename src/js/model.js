import { ApiFetch } from "./apiFetch";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./firebaseLoad.js";
import { getDocs, collection, addDoc, setDoc, doc } from "firebase/firestore"
class Model {
    constructor(currentMovie = null) {
        this.observers = [];
        this.currentMovie = currentMovie;
        this.user = null;
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

    createUser(email, password) {
        var auth = getAuth();
        const passwordErrorMessage = document.getElementById("error-message-password");
        const emailErrorMessage = document.getElementById("error-message-email");
        emailErrorMessage.style.opacity = 0;
        passwordErrorMessage.style.opacity = 0;
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(userCredential.user);
                (async () => {
                    try {
                        await setDoc(doc(db, "users", this.user.uid), {
                            watchedMovies: {},
                            favouriteMovies: {},
                            watchlistMovies: {},
                        });
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                })();
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/missing-email':
                        console.log("Email is missing.");
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML='Email is required.'
                        break;
                    case 'auth/invalid-email':
                        console.log("Email is invalid.");
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML='Email is invalid.'
                        break;                   
                    case 'auth/email-already-in-use':
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML = 'Email already in use!'
                        break;
                    case 'auth/weak-password':
                        passwordErrorMessage.style.opacity = 1;
                        passwordErrorMessage.innerHTML = 'Password not strong enough.'
                        break;
                    case 'auth/internal-error':
                        passwordErrorMessage.style.opacity = 1;
                        passwordErrorMessage.innerHTML = 'Password is required.'
                        break;
                }
            })
    }

    isLoggedIn() {
        const auth = getAuth();
        this.user = auth.currentUser;
        if(this.user){
            return true;
        }
        else {
            return false;
        }
    }

    loginUser(email, password) {

        const auth = getAuth();
        const emailErrorMessage = document.getElementById("error-message-email");
        const passwordErrorMessage = document.getElementById("error-message-password");
    
        emailErrorMessage.style.opacity = 0;
        passwordErrorMessage.style.opacity = 0;
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (error.code) {
                    case 'auth/wrong-password':
                        passwordErrorMessage.style.opacity = 1;
                        passwordErrorMessage.innerHTML='Incorrect Password.'
                        break;
                    case 'auth/missing-email':
                        console.log("Email is missing.");
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML='Email is required.'
                        break;
                    case 'auth/invalid-email':
                        console.log("Email is invalid.");
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML='Email is invalid.'
                        break;                   
                }
            });
    }

    signOutUser() {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Signed out");
        }).catch((error) => {
            console.log("Signout error occured.");
        });
    }

    addMovieToWatchlist(movieId) {
        console.log("Adding movie to watchlist");
        const movieRef = doc(db, "users", this.user.uid);
        console.log(movieRef);

        (async () => {
            try {
                await setDoc(movieRef, {
                    watchedMovies: { movieId: true },
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
        console.log("Added");
    }
}

function filterTextLength(text) {
    if(text.length > 350) {
        text = text.substring(0, 350);
        text = text.substring(0, text.lastIndexOf(" ")) + "...";
    }
    return text;
}

export { Model, filterTextLength };
