const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = ((hours / 12) * 360) + 90;
  if(hoursDegrees == 90) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = '';
  }

  const minDegrees = ((minutes / 60) *360) + 90;
    if (minDegrees == 90) {
      minHand.style.transition = 'none';
    } else {
      minHand.style.transition = '';
    }
  const secondsDegrees = ((seconds / 60 ) * 360) + 90;
    if (secondsDegrees == 90) {
      secondHand.style.transition = 'none';
    } else {
      secondHand.style.transition = '';
    }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  

}

setInterval(setDate, 1000);