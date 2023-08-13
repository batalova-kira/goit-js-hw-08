import Player from '@vimeo/player';
import throttle from 'lodash.throttle'; 

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
 function onPlay (data) {
     let seconds = data.seconds;
     localStorage.setItem("videoplayer-current-time", seconds);
};

let currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);
