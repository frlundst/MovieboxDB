# MovieBoxDB

https://movieboxdb.web.app

## Description of Project

The API that has been used in this project is:
https://developers.themoviedb.org/4/getting-started/authorization

What we have decided to create is a website that showcases
movies. It is possible to search for a specific 
movie and observe information about that specific movie 
such as actors, release date, genre, score etc. The site allows
users to add shows to a watchlist and a favourites list where
they can store their favourite movies. The site also has score for each
show, and it is possible to sort through all movies depending on
multiple factors such as genre, language, release dates, region
and more. The way that users are able to store their movies
is by creating an account and logging in. This gives them
access to edit different aspects of their profile such as
bio, profile picture and name. Creating an account also
gives the user access to the MovieMatcher, which is a game
inspired by the dating app "Tinder", where the user swipes 
in one of the four directions for movies depending on
whether or not they want to skip, add to favourites, add to
watchlist or see more info about the movie. 

<img src="https://github.com/CasperKristiansson/MovieBoxDB/blob/master/readme-images/ezgif.com-gif-maker%20(4).gif" width="250">

Aside from this there is also a discover page that helps users find new 
movies to either save or watch. The movies that appear in
the discover page can be sorted by min score, max score, newest 
or oldest, most or least popular, highest or lowest rated, year,
and lastly most and least revenue. 

DISCOVER SCREENSHOT HÄR VVVVV

<img src="" width="250">

Aside from these features the
site also shows how many movies have been saved to either the
favourites list or the watchlist at the bottom of the home page.

![image](https://user-images.githubusercontent.com/86981714/146510404-be758eb8-a6fe-4d84-86d0-3a0c2f62f493.png)


## Project file structure
We are following the React structure for files, which means that
we utilize a public folder where we store all our imgs and our 
index files. Then we have a source file where our main files are, such as
index.js which is our rendering module where we use ReactDOM to render.
In app we render each presenter, where we use react component router.

Our project follows the MVP-structure:
In our source folder we have the folders css, which contains all the css
files for all styles for all pages as well as the earlier mentioned index.js.
and App.js files. The source folder also contains a js folder that houses 
all our presenters, the views folder that holds all the views for all pages.
Lastly the js folder also contains general files like apiFetch, model and 
firebaseConfig etc.




