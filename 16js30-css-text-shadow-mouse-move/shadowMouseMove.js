const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
  /*
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  is the same as:
  */
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // Fix jump of (x, y) when we hover over children of this
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // Shadow walks from (- walk / 2) to (+walk / 2)
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(xWalk, yWalk);
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(255,255,0,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,100,0,0.7)
  `;
}

hero.addEventListener('mousemove', shadow)