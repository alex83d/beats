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

    playBtn.classList.toggle("player__btn-img--active");
    if (video.paused) {        
        video.play();
        playerPlayBtn.classList.add('duration__img--active');
    } else {
        video.pause();
        playerPlayBtn.classList.remove('duration__img--active');
    }
};