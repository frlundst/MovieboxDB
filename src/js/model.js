import { ApiFetch } from "./apiFetch";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { db } from "./firebaseLoad.js";
import { getDoc, setDoc, doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { store } from 'react-notifications-component';

class Model {
    constructor() {
        this.observers = [];
        this.currentMovie = null;
        this.user = null;
        this.watchlistMovies = [];
        this.favoriteMovies = [];
        this.profile = null;
        this.numberOfWatchlistMovies = 0;
        this.numberOfFavoriteMovies = 0;
        this.setPersistence();
        this.getDataBaseInfo();
    }
    
    getDataBaseInfo() {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                try {
                    this.numberOfFavoriteMovies += parseInt(doc.data().favoriteMovies.movies.length);
                    this.numberOfWatchlistMovies += parseInt(doc.data().watchlistMovies.movies.length);
                } catch (e) {
                }
            });
            this.notifyObservers();
        })();
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
            ApiFetch.getMovieDetails(this.currentMovie)
                .then((response) => {
                    this.movieDetails = response;
                    this.notifyObservers();
                })
                .catch((error) => {
                    this.movieDetailsError = error;
                    this.notifyObservers();
                });

            ApiFetch.getMovieVideos(this.currentMovie)
                .then((response) => {
                    this.movieVideos = response;
                    this.notifyObservers();
                })
                .catch((error) => {
                    this.movieVideosError = error;
                    this.notifyObservers();
                });

            ApiFetch.getMovieCredits(this.currentMovie)
                .then((response) => {
                    this.movieCredits = response;
                    this.notifyObservers();
                })
                .catch((error) => {
                    this.movieCreditsError = error;
                    this.notifyObservers();
                });

            ApiFetch.getSimilarMovies(this.currentMovie)
                .then((response) => {
                    this.similarMovies = response;
                    this.notifyObservers();
                })
                .catch((error) => {
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

        const passwordErrorMessage = document.getElementById(
            "error-message-password"
        );
        const emailErrorMessage = document.getElementById(
            "error-message-email"
        );
        const termsAndConditionsErrorMessage = document.getElementById(
            "error-message-checkbox"
        );

        termsAndConditionsErrorMessage.style.opacity = 0;
        emailErrorMessage.style.opacity = 0;
        passwordErrorMessage.style.opacity = 0;

        if ((document.getElementById("checkbox").checked)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    (async () => {
                        try {
                            const movies = [];
                            const profile = ["", "", "", ""];
                            await setDoc(doc(db, "users", this.user.uid), {
                                favoriteMovies: {
                                    movies,
                                },
                                profile: {
                                    profile,
                                },
                                watchlistMovies: {
                                    movies,
                                },
                            });
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    })();
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/missing-email":
                            emailErrorMessage.style.opacity = 1;
                            emailErrorMessage.innerHTML = "Email is required.";
                            break;
                        case "auth/invalid-email":
                            emailErrorMessage.style.opacity = 1;
                            emailErrorMessage.innerHTML = "Email is invalid.";
                            break;
                        case "auth/email-already-in-use":
                            emailErrorMessage.style.opacity = 1;
                            emailErrorMessage.innerHTML = "Email already in use!";
                            break;
                        case "auth/weak-password":
                            passwordErrorMessage.style.opacity = 1;
                            passwordErrorMessage.innerHTML =
                                "Password not strong enough. A password containing a combination of 6 numbers and/or letters required.";
                            break;
                        case "auth/internal-error":
                            passwordErrorMessage.style.opacity = 1;
                            passwordErrorMessage.innerHTML =
                                "Password is required.";
                            break;
                        default:
                            passwordErrorMessage.style.opacity = 1;
                            passwordErrorMessage.innerHTML = "Unknown error.";
                            break;
                    }
                });
        }
        else{
            termsAndConditionsErrorMessage.style.opacity = 1;
            termsAndConditionsErrorMessage.innerHTML = 
                "Terms and Conditions need to be accepted to create an account."
        }
    }

    isLoggedIn() {
        if (this.user) {
            return true;
        } else {
            return false;
        }
    }

    sleep (milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    loginUser(email, password) {
        const auth = getAuth();
        const emailErrorMessage = document.getElementById(
            "error-message-email"
        );
        const passwordErrorMessage = document.getElementById(
            "error-message-password"
        );
        const termsAndConditionsErrorMessage = document.getElementById(
            "error-message-checkbox"
        );

        termsAndConditionsErrorMessage.style.opacity = 0;
        emailErrorMessage.style.opacity = 0;
        passwordErrorMessage.style.opacity = 0;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                this.initializeDataBase();
                this.setProfileInformation();
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/wrong-password":
                        passwordErrorMessage.style.opacity = 1;
                        passwordErrorMessage.innerHTML = "Incorrect Password.";
                        break;
                    case "auth/missing-email":
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML = "Email is required.";
                        break;
                    case "auth/invalid-email":
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML = "Email is invalid.";
                        break;
                    case "auth/user-not-found":
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML = "User not found.";
                        break;
                    default:
                        emailErrorMessage.style.opacity = 1;
                        emailErrorMessage.innerHTML = "Unknown error.";
                }
            });
    }

    signOutUser() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                this.user = null;
                this.notifyObservers();
            })
            .catch((error) => { });
    }

    initializeDataBase() {
        const docRef = doc(db, "users", this.user.uid);
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

                this.watchlistMovies = this.watchlistMovies.filter(
                    (movie) => movie !== undefined
                );

                this.favoriteMovies = this.favoriteMovies.filter(
                    (movie) => movie !== undefined
                );
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }

    setPersistence() {
        var auth = getAuth();
        setPersistence(auth, browserLocalPersistence).then(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user;
                    this.initializeDataBase();
                    this.setProfileInformation();
                    this.notifyObservers();
                }
            });
        });
    }

    addMovieToWatchlist(movieInformation,notification = true, navigate) {
        if (!this.isLoggedIn()) {
            navigate("/login");
            return;
        }

        var inWatchList = false;

        if (this.watchlistMovies.length > 0) {
            this.watchlistMovies.forEach((movie) => {
                if (movie !== undefined && movie.id === movieInformation.id) {
                    inWatchList = true;
                }
            });
        }

        if (!inWatchList) {
            this.watchlistMovies.push(movieInformation);
            this.watchlistMovies = this.watchlistMovies.filter(
                (movie) => movie !== undefined
            );
            this.notifyObservers();
            if (notification) {
                store.addNotification({
                    title: "Added to watchlist",
                    message: "You have added " + movieInformation.title + " to your watchlist.",
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                    },
                    showIcon: true,
                });
            }

            (async () => {
                try {
                    const docRef = doc(db, "users", this.user.uid);
                    const movies = this.watchlistMovies;
                    await updateDoc(docRef, {
                        watchlistMovies: {
                            movies,
                        },
                    });
                    this.notifyObservers();
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })();
        } else {
            if (notification) {
                store.addNotification({
                    title: "Already in watchlist",
                    message: "You have already added " + movieInformation.title + " to your watchlist.",
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                    },
                    showIcon: true,
                });
            }
        }
    }

    addToFavorite(movieInformation, notification = true, navigate) {
        if (!this.isLoggedIn()) {
            navigate("/login");
            return;
        }

        var inWatchList = false;

        if (this.favoriteMovies.length > 0) {
            this.favoriteMovies.forEach((movie) => {
                if (movie !== undefined && movie.id === movieInformation.id) {
                    inWatchList = true;
                }
            });
        }

        if (!inWatchList) {
            this.favoriteMovies.push(movieInformation);
            this.favoriteMovies = this.favoriteMovies.filter(
                (movie) => movie !== undefined
            );
            this.notifyObservers();

            if (notification) {
                store.addNotification({
                    title: "Added to favorites",
                    message: "You have added " + movieInformation.title + " to your favorites.",
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                    },
                    showIcon: true,
                });
            }

            (async () => {
                try {
                    const docRef = doc(db, "users", this.user.uid);
                    const movies = this.favoriteMovies;
                    await updateDoc(docRef, {
                        favoriteMovies: {
                            movies,
                        },
                    });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })();
        } else {
            if (notification) {
                store.addNotification({
                    title: "Already in favorites",
                    message: "You have already added " + movieInformation.title + " to your favorites.",
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                    },
                    showIcon: true,
                });
            }
        }
    }

    setProfileInformation() {
        const docRef = doc(db, "users", this.user.uid);
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
        this.watchlistMovies = this.watchlistMovies.filter(
            (movie) => movie.id !== id
        );
        this.notifyObservers();
        store.addNotification({
            title: "Removed from watchlist",
            message: "You have removed the movie from your watchlist.",
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 4000,
            },
            showIcon: true,
        });

        (async () => {
            try {
                const docRef = doc(db, "users", this.user.uid);
                const movies = this.watchlistMovies;
                await updateDoc(docRef, {
                    watchlistMovies: {
                        movies,
                    },
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }

    removeFromFavorite(id) {
        this.favoriteMovies = this.favoriteMovies.filter(
            (movie) => movie.id !== id
        );
        this.notifyObservers();
        store.addNotification({
            title: "Removed from favorites",
            message: "You have removed the movie from your favorites.",
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 4000,
            },
            showIcon: true,
        });

        (async () => {
            try {
                const docRef = doc(db, "users", this.user.uid);
                const movies = this.favoriteMovies;
                await updateDoc(docRef, {
                    favoriteMovies: {
                        movies,
                    },
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }

    updateProfile(name, biography, image) {
        if (name === undefined) {
            name = "";
        }
        if (biography === undefined) {
            biography = "";
        }
        if (image === undefined) {
            image = "";
        }

        this.profile = [name, biography, "", image];

        this.notifyObservers();
        store.addNotification({
            title: "Profile updated",
            message: "Your profile has been updated.",
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 4000,
            },
            showIcon: true,
        });

        (async () => {
            try {
                const docRef = doc(db, "users", this.user.uid);
                await updateDoc(docRef, {
                    profile: this.profile,
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })();
    }
}

function filterTextLength(text, length) {
    if (text.length > length) {
        text = text.substring(0, length);
        text = text.substring(0, text.lastIndexOf(" ")) + "...";
    }
    return text;
}

const useThrottledEffect = (callback, delay, deps = []) => {
    const lastRan = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(function () {
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));

        return () => {
            clearTimeout(handler);
        };
    }, [delay, deps, callback]);
};

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false);
    const stop = useRef(false);

    useThrottledEffect(() => {
        window.addEventListener("scroll", debounceScroll());
        return () => window.removeEventListener("scroll", debounceScroll());
    }, 500);

    useThrottledEffect(
        () => {
            if (!isFetching) {
                return;
            } else {
                callback();
            }
        },
        500,
        [isFetching]
    );

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop <=
            Math.floor(document.documentElement.offsetHeight * 0.75) ||
            isFetching
        )
            return;
        if (!stop.current) setIsFetching(true);
    }

    function debounceScroll() {
        return debounce(handleScroll, 100, false);
    }

    return [setIsFetching, stop];
};

export { Model, filterTextLength, useInfiniteScroll };
