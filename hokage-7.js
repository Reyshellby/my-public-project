const btn = document.getElementById('button');
const info = document.getElementById('increment-info');
const img = document.getElementById('image');
const sound = document.getElementById('click');

function incrementals() {
    let text = info.textContent;
    let increment = parseInt(text);
    increment++
    info.textContent = increment;
    sound.pause();
    sound.currentTime = 0;
    sound.play();  
}