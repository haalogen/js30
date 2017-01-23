const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// resize canvas to fill the whole window of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
// ctx.globalCompositeOperation = 'xor'; // blend mode

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // red
let direction = true;

function draw(e) {
  // stop the fn from running when mouse is not pressed down
  if (!isDrawing) return; 
  // console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  // e.offsetX, e.offsetY -- give offset from the edges of parent element
  // (canvas -- in our case)
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // flip direction
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);