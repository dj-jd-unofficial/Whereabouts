# Components
## Header 
There is no particular reason as to why the header component is within a seperate 'components' directory. The header was the first component that I created, and I thought that I would place every component in this directory. I then realized that for the purposes of this project that I wouldn't be using modules, which made placing all of the components in another directory redunant. If you implenent modules, then it makes sense to use that directory. If you don't, remove it. 

The header contains a home link and sign in button. We had plans to host Whereabouts on Google Cloud Platform, and have individuals sign in with their Google accounts to play in real time. This button is a place holder for now. 

## home-screen
The starting page of Whereabouts. The home screen contains the Whereabouts logo and an instance of the search-bar component. Once the user is done interacting with the search-bar component, they are taken to players-and-rounds.

## search-bar
A custom search bar that uses the Google Places API. The user uses the search bar to enter in a desired location they would like to learn how to get to. As the user types in their location, a dynamically rendered autocomplete list is rendered of the 5 closest places related to the search term. The user can then select the place from that dropdown list. 

## players-and-rounds
The user enters the number of players that will be present in the game, how many rounds the game should be, and the distance away from the end location the game should start at. The user is brought to this page after selecting an end location in home-screen. 

##
