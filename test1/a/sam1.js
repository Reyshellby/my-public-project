const btn = document.getElementById('btn');
const info = document.getElementById('increment-info');
const img = document.getElementById('image');
const sound = document.getElementById('clickSound');

function incrementals() {
    let text = info.textContent;
    let increment = parseInt(text);
    increment++
    info.textContent = increment;
    sound.pause();
    sound.currentTime = 0;
    sound.play();  
}

// btn.addEventListener('keydown', function() {
//     incrementals();
//   });