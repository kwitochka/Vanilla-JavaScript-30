//Play sound of correponding audio and transform corresponding key (div)
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // revinds audio to the start audio.play(); key.classList.add('playing');
  audio.play();
  key.classList.add('playing');
};

window.addEventListener('keydown', playSound);

const removeTransition = (e) => {
  //Function shoulf work out only on 'transform'
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(k =>
  k.addEventListener('transitionend', removeTransition));