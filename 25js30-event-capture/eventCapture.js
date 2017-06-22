const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function logText (e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // Stop bubbling
}


// Capturing of event: html -> body -> .one -> .two -> .three
// Event bubbling: in reversed order

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  // Run callback on capturing [down] (not on bubbling [up])
  // capture: true,
  capture: false,

  // Unbinds itself: div.removeEventListener('click', logText)
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!');
}, {
  once: true // unbinds itself after first event
})