var counter = 0;
var quotes = document.querySelectorAll('#container p');

function fadeInFadeOut(counter = 0) {
	console.log(counter)
	if (counter == 0) {
		$("#container p").eq(counter).fadeIn(1000, function () {
			setTimeout(function () {
				counter = counter + 1;
				fadeInFadeOut(counter);
			}, 7000);
		})
	} else if (counter == quotes.length) {
		$("#container p").eq(counter - 1).fadeOut(1000, function () {
			counter = 0;
			$("#container p").eq(counter).fadeIn(1000, function () {
				setTimeout(function () {
					fadeInFadeOut(counter);
				}, 7000)
			})
		})
		
	} else {
		$("#container p").eq(counter - 1).hide(1000, function () {
			$("#container p").eq(counter).show(1000, function () {
				setTimeout(function () {
					counter = counter + 1;
					fadeInFadeOut(counter);
				}, 7000)
			})
		})
}
}

fadeInFadeOut(0);
