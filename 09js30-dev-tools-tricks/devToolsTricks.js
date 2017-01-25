const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
console.log('hello');

// Interpolated
const poop = ':poop:';
console.log('Hello I am a %s string!', ':poop:');
console.log(`Hello I am a ${poop} string!`);


// Styled
console.log('%c I am some great text', 'font-size:30px; background: red; text-shadow: 1px 2px 0 hsl(180,20%,50%);');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'You did not select the right Element!!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); // show the class methods, fields


// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting 
// Writes the the number of times that count() has been 
// invoked at the same line and with the same label.

console.count('Wes'); // 1
console.count('Wes'); // 2
console.count('Steve'); // 1
console.count('Wes'); // 3
console.count('Wes'); // 4

// timing
console.time('fetching data');
fetch('https://api.github.com/users/haalogen')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data'); // pass the same string
    console.log(data);
  });


// table
console.table(dogs);