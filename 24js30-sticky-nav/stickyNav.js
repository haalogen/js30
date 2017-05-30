const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;


function fixNav (e) {
  // console.log(topOfNav, window.scrollY);

  if (window.scrollY >= topOfNav) { // we scrolled past nav bar
    // When we make element 'fixed' (position), it starts
    // to 'float' on top (doesn't take space)
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}


// runs fixNav() every single pagescroll
window.addEventListener('scroll', fixNav);