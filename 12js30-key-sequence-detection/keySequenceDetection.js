
const pressed = [];
const secretCode = 'hacker';


document.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('Ding ding!');
    cornify_add();
  }
});