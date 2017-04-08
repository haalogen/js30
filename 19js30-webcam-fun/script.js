const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo () {

	// Returns Promise
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then(localMediaStream => {
		video.src = window.URL.createObjectURL(localMediaStream);
		video.play();
	})
	// when someone doesn't allow to use camera 
	.catch(err => {
		console.log(`OH NO!!!`, err);
	})

}


function paintToCanvas () {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	// We can stop setInterval(...) by handling the 
	// returned ID: clearInterval(ID);
	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);

		// Take the pixels out
		let pixels = ctx.getImageData(0, 0, width, height);

		// Apply cool filter to image
		// pixels = redEffect(pixels);

		// pixels = rgbSplit(pixels);

		// Gives "Kung-Fu" effect
		// ctx.globalAlpha = 0.3;

		pixels = greenScreen(pixels);

		// Put pixels back
		ctx.putImageData(pixels, 0, 0);
	}, 16); // run every NUM msecs
}


function takePhoto () {
	// take the data out of the canvas
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	link.innerHTML = `
		<img src="${data}" alt="Handsome Man" />
	`;
	strip.insertBefore(link, strip.firstChild);

	// play the sound
	snap.currentTime = 0;
	snap.play();
}


function redEffect (pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		// Red
		pixels.data[i + 0] = pixels.data[i + 0] + 100;

		// Green
		pixels.data[i + 1] = pixels.data[i + 1] -50;

		// Blue
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
	}

	return pixels;
}


function rgbSplit (pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		// Red
		pixels.data[i - 150] = pixels.data[i + 0];

		// Green
		pixels.data[i + 100] = pixels.data[i + 1];

		// Blue
		pixels.data[i - 150] = pixels.data[i + 2];
	}

	return pixels;
}


function greenScreen (pixels) {
	// Holds min and max green levels
	const levels = {};

	// Get values (min, max) from all rgb inputs from html page
	document.querySelectorAll('.rgb input').forEach(input => {
		levels[input.name] = input.value;
	});


	for (let i = 0; i < pixels.data.length; i += 4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];

		if (red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
			&& green <= levels.gmax
			&& blue <= levels.bmax) {

			// take this pixel out
			pixels.data[i + 3] = 0;
		};

	}
	




	return pixels;
}

getVideo();

// 'canplay' -- event of video
video.addEventListener('canplay', paintToCanvas);