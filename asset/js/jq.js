function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
  function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function stopSound(e){
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.pause();
  audio.currentTime=0;
}
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
  window.addEventListener('keydown',playSound);
 window.addEventListener('keyup',stopSound);