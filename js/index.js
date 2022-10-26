/** @type {HTMLVideoElement} */
const video = document.querySelector('#video');
const overlay = document.querySelector('#overlay');
const acceptButton = document.querySelector('#accept-button');
function buttonClick1(event) {
    event.preventDefault();
    overlay.hidden = true;
    overlay.classList.add('d-none');
    video.play();
    videoClick();
}
function videoClick(event) {
    if (event) event.preventDefault();
    const { documentElement } = document;
    if (documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}
acceptButton.addEventListener('click', buttonClick1);
video.addEventListener('click', videoClick);