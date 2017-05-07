'use strict';
const triggers = document.querySelectorAll('a');

// link highlighter element
const highlight = document.createElement('span');

// Add a class .highlight
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink (e) {
	// Get coordinates of link nodes
	const linkCoords = this.getBoundingClientRect();
	console.log(linkCoords);

	// We need to recalculate the coords of highlighter considering the
	// scrollX and scrollY of the client
	const coords = {
		width: linkCoords.width,
		height: linkCoords.height,
		left: linkCoords.left + window.scrollX,
		top: linkCoords.top + window.scrollY
	};

	// Set the needed width, height and coordinates of highlighter
	highlight.style.width = `${coords.width}px`;
	highlight.style.height = `${coords.height}px`;
	highlight.style.transform = `translate(${coords.left}px,
																					${coords.top}px)`;
}



triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
