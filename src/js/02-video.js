import  throttle  from 'lodash.throttle';
const iframeRef = document.querySelector('iframe');
const player = new Vimeo.Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const throttledCurrentTime = throttle(saveCurrentTime, 1000);

function saveCurrentTime() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    }).catch(function (error) {
        console.log(error);
    });
}
    
player.on('timeupdate', throttledCurrentTime);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(currentTime).catch(function (error) {
        console.log(error);
    });
