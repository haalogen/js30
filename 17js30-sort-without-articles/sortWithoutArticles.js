const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['a', 'an', 'the'];

// RegExps for removing articles
const articlesRegexps = articles.map(str => new RegExp(str+' ', flags='gi'));

// Sort array of bands' names without articles
// ABC ... XYZ abc ... xyz
function strip(bandName) {
  return bandName.replace(/^a |^an |^the /i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) < strip(b) ? -1 : 1);



// Pass sortedBands to ul list
bandsListElement = document.querySelector('#bands');

bandsListElement.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
