# Spotify Dashboard

Welcome to Spotify Dashboard. This project aims to provide a useful companion to Spotify by displaying interesting and useful information about the artist that you are currently listening to.

## Prerequistes

This application is built using Node.js and React.

## Installing Dependencies

- Use `npm run dev` or `npm run dev -- --watch` to build React
- Use `node server.js` to run the Node server
- View the site at [http://localhost:8080](http://localhost:8080)
- The node server file can be found at /server.js
- The index home page can be found in /views/index.hbs

## How To Use

First of all, the Spotify SDK used by this application requires an SDK token to be generated using a Spotify Premium Account [here](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#). These tokens last for an hour (yes, this is kind of annoying - check out the Unresolved Issues section for more on how annoying this is).

Once you have input a usable SDK token, you will be instructed by Spotify Dashboard to go to your Spotify Device, open "Connect to a device" and connect to Spotify Dashboard. Once this happens, the songs that you are listening to will be represented on the app with the album cover, artist, song name and album name.

When you change through the songs on your device, or load up a playlist and leave it to run, this is represented on screen. Information about the music/podcast you are listening to will change dynamically.

Alongside this, the app uses the information about the artist and executes a fetch to Ticketmaster's Discover API to find information about upcoming events, including links to buy tickets. This information can be scrolled through on the page without affecting the view of your artist information.

This device also works responsively at different views, allowing the user to read through upcoming events without spoiling the view of the song information.

## Notable Features

- This app has good responsivity for various devices, allowing for a minimalist sleek view while keeping the ability to navigate through a wide range of information.
- I feel that this project has demonstrated my ability to create and maintain clean and human-friendly React components and data structure.
- Information presented in the app changes based on whether the user has a device connected or not. This is implemented in `App.js` on lines 24-44.

## Unresolved Issues/Un-implemented Features

While I am very proud of the work I have done on this app, there are a number of issues that need resolving and should be kept in mind when using Spotify Dashboard. There were also a number of features that I was unable to implement which are listed below:

- The Spotify SDK token only works for an hour. This can make the act of re-opening the spotify.js file, replacing the SDK token and rebooting the app in the browser somewhat tiresome. I would hopefully like to implement a feature whereby a new SDK token can be entered somewhere on the app which will replace the outdated token in the spotify.js file, but this is as yet un-implemented.
- The Ticketmaster API provides amazing information about an artist's upcoming events. Unfortunately, it often returns 429 response status codes for too many requests. Sadly, there is no `Retry-After` header attached indicating how often this would happen. This can provide some annoying user experiences as the Spotify SDK re-triggers a fetch about 1 minute into a song. It also re-triggers a fetch when the song is paused and then played again. This can happen quite a few times during a play through, which can provide some undesirable results from the API. It can also provide issues if, for example, you skip through a couple of songs and the app will tell the user that there are no upcoming events regardless of if this is true or not!

## Acknowledgements

This application utilises [Spotify's Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/).

This application utilises [Ticketmaster's Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) to fetch upcoming event information.

Inspiration for the layout came from [Music UI](https://dribbble.com/shots/4242093-Music-UI) by Giga Tamarashvili for Adjara Design on Feb 19, 2018 @ dribbble.
