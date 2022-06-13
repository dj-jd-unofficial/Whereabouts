# Whereabouts
#### The Multiplayer Map Game
## Introduction
#### To the next group taking on this project,

I wanted to give you an introduction of what we received from the first year's group and then what we left for you guys. `TrickyMaps` was the first year of this project. This year accomplished a lot of the back-end functionality of the program implemented with a generic looking front-end. The `TrickyMaps` game utilizes the current location of the host. The host then enters a mile radius they want to guess away from their current location. There is then a Google Street View compiled video and a Google Maps interface. When the user thinks they know where they are, they enter their guess on the Google Maps interface. It then takes the user to a final page where a score is displayed. 

As great as this was there were issues when our group tried to implement changes. There are third party sources in this project made that caused issues with any changes we wanted to make to it. This is the issue of *tech debt* which is very common in the field. Another issue we had was practically zero documentation of the project. So it took us until the last week of January 2022 just to get `TrickyMaps` working. We did our best to leave you guys with a lot of documentation from the start so that hopefully you can run with this project from the start. (Rather than being like us who were heavily delayed because we couldn't understand what this project was doing.) We will also be creating some YouTube videos for you to better explain what we are trying to say with these documents. 

### Our Changes

The first change Dr.Thomas wanted done was the name. That's why the new project is called `Whereabouts`. We are the second year of this project. Dr.Thomas was impressed with what `TrickyMaps` did, but he felt it didn't capture his original vision. He didn't want the game to start with your current location, and for the user to try to guess a random location the computer was trying to go to. He instead wanted a way for the user to enter in a location they wanted to learn, and then enter in how far away from that location they would like to learn. He also wanted the game to be multiplayer, so that he can play it with his children (We couldn't do this part due to time constraints).

Here is the list of changes we tried to implement:
- A Google autocomplete so the user can enter the end location they want to go to (implements Google Places API)
- A scoring system to make it competitive
- A 'token' feature so the user can replay the google street video. The player gets this whenever they win a round
- A leaderboard
- A completely new front end

Here is what we left you:
- A working google autocomplete
- A working token function (this is implemented in the `TrickyMaps` project)
- A completely new front end
- A leaderboard 

Keep in mind the new front end and the leaderboard are strickly for prototyping purposes. There is no functionality with it, that is what your group
needs to do. Your job is to combine `TrickyMaps` and `Whereabouts` to make the game Dr.Thomas wanted. 
This documentation is created to try to help you so you can hopefully start immediately and avoid/reduce the struggle we had. Our recommendation is to completely rewrite the backend and use `TrickyMaps` as a reference. Below are gonna be some of the languages and tools used for 
`TrickyMaps` and we will explain why these are the choices. 

#### Back end
##### Python 
The previous group loved Python. That's the only reason why they chose it. You can probably choose any language you want for this, just make
sure to do some research if you want to make a change. 
##### Flask package
This runs the backend code on a server. There is so much data from the google street view that a server needs to run it. Although
if you have a small mile radius it probably can run on your local host.  

#### Front end
##### Angular
`TrickyMaps` chose Angular because it is created by Google, so it works well with the Google API. The only problem is they didn't use any
of the Angular functions to work with the Google API, so `TrickyMaps` was difficult to make any changes to. We stuck with Angular
with the front end we created. 

Also utilizes the Google API key. You can get this for free when signing up for Google Cloud Platform. There are videos on how to do this, it 
isn't too difficult.

Youtube Video talking about this- https://youtu.be/lj3FEoFhHkU

## **Make sure you don't upload your Google API key to GitHub because other people can use it, and you'll get charged for it.**
