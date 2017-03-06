
const SECS_IN_HOUR = 3600;
const SECS_IN_MINUTE = 60;

let timeNodes = document.querySelectorAll('[data-time]');


// Convert NodeList into Array

// 1st way: spread into array
// timeNodes = [...timeNodes];

// 2nd way: run Array.from(smth)
timeNodes = Array.from(timeNodes)


const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * SECS_IN_MINUTE + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);



let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / SECS_IN_HOUR);
secondsLeft = secondsLeft % SECS_IN_HOUR;

const minutes = Math.floor(secondsLeft / SECS_IN_MINUTE);
secondsLeft = secondsLeft % SECS_IN_MINUTE;