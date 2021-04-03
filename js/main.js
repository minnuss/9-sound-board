const audioEffects = document.querySelectorAll('.sounds__content--sound__audio');
const boxes = document.querySelectorAll('.sounds__content--sound');

boxes.forEach((box, idx) => {

    box.addEventListener('click', () => {
        // sop audio before play next one
        stop();
        // play audio
        audioEffects[idx].play();
    })

})

// stopping audio
function stop() {
    audioEffects.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    })
}