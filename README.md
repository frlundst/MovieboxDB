# MovieBoxDB

https://movieboxdb.web.app

## Short description of your project
What we have decided to create is a website that showcases
movies and TV-shows. It is possible to search for a specific 
show and observe information about that specific movie/show 
such as actors, release date, genre, score etc. The site allows
users to add shows to a watchlist and a favourites list where
they can store their shows. The site also has scoring for each
show, and it is possible to sort through all movies depending on
multiple factors such as genre, language, release dates, region
and more. The website also allows users to check the cinema airing
times for specific movies that are currently airing.

## What you have done
We have finished creating the layout for the homepage and started working on the search page.
There are movies and shows visible with scores, genres and information visible.

## What you still plan to do
- Movie details page
- Search Page, Discovery Page, Profile Page
- Creating users using firebase
- Tracking movies, tvshows for each user

## Your project file structure (short description/purpose of each file)
We are following the React structure for files, which means that
we utilize a public folder where we store all our imgs and our 
index files. Then we have a source file where our main files are, such as
index.js which is our rendering module where we use ReactDOM to render.
In app we render each presenter, where we use location hash.

We have a views folder where we store all different views that are used
in the design.

apiFetch handles all ApiCalls to the API we are using, namely
https://developers.themoviedb.org/4/getting-started/authorization

HomePresenter is the presenter for the homepage.

NavigationbarPresenter is the presenter for the navBar, where
it is possible to go from home page to search page for example.

promiseNoData/Render handles when there is no data, it shows a 
loading gif or "no data" when there is no data.

searchPresenter is the presenter for the search bar.

showPresenter is the presenter is used to navigate between pages.



