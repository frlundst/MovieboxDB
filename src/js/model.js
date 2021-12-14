import { ApiFetch } from "./apiFetch";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./firebaseLoad.js";
import { getDoc, collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore"
class Model {
    constructor(currentMovie = null) {
        this.observers = [];
        this.currentMovie = currentMovie;
        this.user = null;
        this.watchlistMovies = [];
        this.favoriteMovies = [];
        this.inWatchlist = false;
        this.initializeDataBase(); //#TODO: TEMPORARY
        this.profile = null;
        this.setProfileInformation(); //#TODO: TEMPORARY
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

    initializeDataBase() {
        this.user = 'N5hhR3bb7WVQxQ37XKpAzIcKodf1';
        const docRef = doc(db, "users", this.user);
        (async () => {
            try {
                const doc = await getDoc(docRef);
                const data = doc.data();
                
                data.watchlistMovies.movies.forEach((movie) => {
                    this.watchlistMovies.push(movie);
                });

                data.favoriteMovies.movies.forEach((movie) => {
                    this.favoriteMovies.push(movie);
                });
                
                this.watchlistMovies = this.watchlistMovies.filter(movie =>
                    movie !== undefined
                );

                this.favoriteMovies = this.favoriteMovies.filter(movie =>
                    movie !== undefined
                );

                console.log(this.favoriteMovies);

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }

    addMovieToWatchlist(movieInformation) {
        var inWatchList = false;

        if (this.watchlistMovies.length > 0) {
            this.watchlistMovies.forEach(movie => {
                if (movie !== undefined && movie.id === movieInformation.id) {
                    inWatchList = true;
                }
            });
        }

        if (!inWatchList) {
            this.watchlistMovies.push(movieInformation);
            this.notifyObservers();
            (async () => {
                try {
                    const docRef = doc(db, "users", this.user);
                    const movies = this.watchlistMovies;
                    await updateDoc(docRef, {
                        watchlistMovies : {
                            movies
                        }
                    });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })();
        } else {
            this.setInWatchlist(true);
        }
        console.log(this.watchlistMovies);
    }

    addToFavorite(movieInformation) {
        var inWatchList = false;

        if (this.favoriteMovies.length > 0) {
            this.favoriteMovies.forEach(movie => {
                if (movie !== undefined && movie.id === movieInformation.id) {
                    inWatchList = true;
                }
            });
        }

        if (!inWatchList) {
            this.favoriteMovies.push(movieInformation);
            this.notifyObservers();
            (async () => {
                try {
                    const docRef = doc(db, "users", this.user);
                    const movies = this.favoriteMovies;
                    await updateDoc(docRef, {
                        favoriteMovies : {
                            movies
                        }
                    });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })();
        } else {
            this.setInWatchlist(true);
        }
        console.log(this.favoriteMovies);
    }

    setInWatchlist(boolean) {
        console.log(boolean);
        this.inWatchlist = boolean;
        this.notifyObservers();
    }

    setProfileInformation() {
        const docRef = doc(db, "users", this.user);
        (async () => {
            try {
                const doc = await getDoc(docRef);
                const data = doc.data();
                this.profile = data.profile;
                this.notifyObservers();
            } catch (e) {
                console.error("Error Getting Document: ", e);
            }
        })();
    }

    removeFromWatchlist(id) {
        this.watchlistMovies = this.watchlistMovies.filter(movie =>
            movie.id !== id
        );
        this.notifyObservers();
        (async () => {
            try {
                const docRef = doc(db, "users", this.user);
                const movies = this.watchlistMovies;
                await updateDoc(docRef, {
                    watchlistMovies : {
                        movies
                    }
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }
}

function filterTextLength(text, length) {
    if(text.length > length) {
        text = text.substring(0, length);
        text = text.substring(0, text.lastIndexOf(" ")) + "...";
    }
    return text;
}

export { Model, filterTextLength };
