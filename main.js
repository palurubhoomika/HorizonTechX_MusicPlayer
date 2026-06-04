// Select the poster image
let poster = document.getElementById("poster");

// Select the audio
let song = document.getElementById("audio");

// When song starts playing
song.addEventListener("play", function() {
    poster.classList.add("rotate");
});

// When song is paused
song.addEventListener("pause", function() {
    poster.classList.remove("rotate");
});