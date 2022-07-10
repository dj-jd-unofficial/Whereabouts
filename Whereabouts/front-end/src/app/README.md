# Components

## Header 
There is no particular reason as to why the header component is within a seperate 'components' directory. The header was the first component that I created, and I thought that I would place every component in this directory. I then realized that for the purposes of this project that I wouldn't be using modules, which made placing all of the components in another directory redunant. If you implenent modules, then it makes sense to use that directory. If you don't, remove it. 

The header contains a home link and sign in button. We had plans to host Whereabouts on Google Cloud Platform, and have individuals sign in with their Google accounts to play in real time. This button turned into a placeholder. 

## home-screen
The starting page of Whereabouts. The home screen contains the Whereabouts logo and an instance of the search-bar component. Once the user is done interacting with the search-bar component, they are taken to players-and-rounds.

## search-bar
A custom search bar that uses the Google Places API. The user uses the search bar to enter in a desired location they would like to learn how to get to. As the user types in their location, a dynamically rendered autocomplete list is rendered of the 5 closest places related to the search term. The user can then select the place from that dropdown list. 

## players-and-rounds
The user enters the number of players that will be present in the game, how many rounds the game should be, and the distance away from the end location the game should start at. The user is brought to this page after selecting an end location in home-screen. 

## gameview
The page where the main game is played. The Google Street View video should be rendered on the left, and the Google Maps interface depicting each users guess should be on the right. Once each guess is entered, the Guess button takes the user to the leaderboard. 

## player-card
An Angular Material card containing player name, profile pic, points, guess button and token button. This was created to be a placeholder for development purposes. In a grander vision of this project, the game would be similar to a kahoot where each player would enter their guess on their own devices. However, when developing the game, it is easier for the player to click on the guess button for their card, and then interact with the Google Maps interface in gameview. Once all of the players have entered in their guess with the Google Maps interface, someone can click on the final black Guess button. This will take the user to the leaderboard. 

## leaderboard
A page displaying a hierarchy of players in order of the number of points they have. Not functional, for display purposes only.

## page-not-found
This Angular app uses Angular routing. When the user navigates this game, notice that the url changes. The user can easily try to change this url to try to break the game. This page was created to increase the robustness of the app. 

## tutorial-page
A client requested page on how to play Whereabouts.

## footer
Houses "copyleft" information and a link to tutorial-page

