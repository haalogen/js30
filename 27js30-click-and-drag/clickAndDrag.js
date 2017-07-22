const slider = document.querySelector('.items');
let isDown = false; // mouse pressed flag
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  console.log({x, startX});
  // for every px of mousemove, scroll slider for 3px
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
