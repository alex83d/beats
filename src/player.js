let video;
let durationontrol;
let soundControl;
let intervalId;


const playBtn = document.querySelector(".player__btn-img");
const soundBtn = document.querySelector(".sound__btn");
const playerPlayBtn = document.querySelector(".duration__img");

video = document.getElementById("video");

video.addEventListener('click', playStop);

let playButtons = document.querySelectorAll(".play");
for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
    
}

function playStop() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};