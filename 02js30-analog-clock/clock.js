const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;

  if (seconds === 0) {
    // prevent secondHand from showing jump 59*6 -> 0 degrees
    secondHand.style.transition = 'none';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    secondHand.style.transition = 'all 0.05s';
  } else {
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  }

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;


}
setInterval(setDate, 1000); // run setDate() every second
