let video;
let durationControl;
let soundControl;
let intervalId;


const playBtn = document.querySelector(".player__btn-img");
const soundBtn = document.querySelector(".sound__btn");
const playerPlayBtn = document.querySelector(".duration__img");



video = document.getElementById("video");

video.addEventListener('loadeddata', () => {
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playStop);

    }

    durationControl = document.getElementById('durationLevel');
    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener('input', setVideoTime);

});



function playStop() {

    playBtn.classList.toggle("player__btn-img--active");
    if (video.paused) {
        video.play();
        playerPlayBtn.classList.add('duration__img--active');
        intervalId = setInterval(updateTime, 1000 / 60);
    } else {
        video.pause();
        playerPlayBtn.classList.remove('duration__img--active');
        clearInterval(intervalId);
    }
};

const setVideoTime = () => {
    video.currentTime = durationControl.value;
    updateTime();
};

const updateTime = () => {
    durationControl.value = video.currentTime;
    const step = video.duration / 100;
    const percent = video.currentTime / step;

    durationControl
        .style
        .background = `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${percent}%, #333333 ${percent}% )`;
};