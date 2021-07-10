let video;
let durationControl;
let soundControl;
let intervalId;
let soundLevel;


const playBtn = document.querySelector(".player__btn-img");
const soundBtn = document.querySelector('#mic');
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


    soundBtn.addEventListener('click', soundOff);


    soundControl = document.getElementById('volumeLevel');
    soundControl.addEventListener('input', changeSoundVolume);
    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = 2;



});

video.addEventListener('ended', function () {
    playBtn.classList.toggle("player__btn-img--active");
    video.currentTime = 0;
    playerPlayBtn.classList.remove('duration__img--active');
});

function bg(e) { 
    let position = e * 100;      
    soundControl.style.background =
        `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${position}%, #333333 ${position}% )`;
};



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

const soundOff = () => {

    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
        bg(video.volume);
        soundBtn.classList.remove('active');
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        bg(video.volume);
        soundControl.value = 0;
        soundBtn.classList.add('active');
    }
};

const changeSoundVolume = () => {
    video.volume = soundControl.value / 10;

    if (video.volume === 0) {
        soundBtn.classList.add('active');
        bg(video.volume);
    } else {
        soundBtn.classList.remove('active');
        bg(video.volume);
    }
};

/*$(function () {
    const range = $('#volumeLevel');
    let position;
    
    

    const soundBtnActive = $("#mic");
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === "class") {
               let soundBtnClass = $(mutation.target).prop(mutation.attributeName);
               if ($(soundBtnClass).hasClass('.active')) {
                    $(position) = 0;
                    bg(position);
               }
            }
        });
    });
    observer.observe(soundBtnActive[0], {
        attributes: true
    });

   

    range.on('mouseenter', function () {

        range.on('click', function () {
            position = range.val() * 10;
            bg(position);
        });
        range.on('mousemove', function () {
            position = range.val() * 10;
            bg(position);
        });

    });


    function bg() {       
        range.css({
            'background-image': `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${position}%, #333333 ${position}% )`
        });
    };
});*/