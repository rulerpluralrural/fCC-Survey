const buttonEventListener = () => {
	const buttonLeft = document.querySelector(".button-left");
	const buttonRight = document.querySelector(".button-right");
	/**@type {HTMLElement} */
	const slidesContainer = document.querySelector("[data-slides]");
	const firstIndicator = document.querySelector(".content-indicator-first");
	const secondIndicator = document.querySelector(".content-indicator-second");
	const thirdIndicator = document.querySelector(".content-indicator-third");
	const indicators = [firstIndicator, secondIndicator, thirdIndicator];

	buttonLeft.addEventListener("click", () => {
		const slide = parseInt(slidesContainer.dataset.slides) - 1;
		console.log(slide)

		if (slide < 0) return;

		slidesContainer.dataset.slides = `${slide}`;
		changeIndicator(slide)
	});

	buttonRight.addEventListener("click", () => {
		const slide = parseInt(slidesContainer.dataset.slides) + 1;

		if (slide > 2) return;

		slidesContainer.dataset.slides = `${slide}`;
		changeIndicator(slide)
	});

	indicators.forEach((indicator, index) => {

		indicator.addEventListener('click', () => {

			slidesContainer.dataset.slides = `${index}`
			changeIndicator(index)
		})
	})

	const changeIndicator = (slide) => {
		indicators.forEach((indicator, index) => {
			if (slide === index) {
				indicator.classList.add("current-slide");
			} else {
				indicator.classList.remove("current-slide");
			}
		});
	};

	// buttonLeft.addEventListener("click", () => {
	// 	if (slides.classList.contains("second-slide")) {
	// 		slides.classList.remove("second-slide");
	// 		slides.classList.add("first-slide");
	// 		thirdIndicator.classList.remove("current-slide");
	// 		firstIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.add("current-slide");
	// 	} else if (slides.classList.contains("first-slide")) {
	// 		slides.classList.remove("first-slide");
	// 		slides.classList.add("default-slide");
	// 		thirdIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.remove("current-slide");
	// 		firstIndicator.classList.add("current-slide");
	// 	}
	// });

	// buttonRight.addEventListener("click", (e) => {
	// 	if (slides.classList.contains("default-slide")) {
	// 		slides.classList.remove("default-slide");
	// 		slides.classList.add("first-slide");
	// 		firstIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.add("current-slide");
	// 	} else if (slides.classList.contains("first-slide")) {
	// 		slides.classList.remove("first-slide");
	// 		slides.classList.add("second-slide");
	// 		secondIndicator.classList.remove("current-slide");
	// 		thirdIndicator.classList.add("current-slide");
	// 	}
	// });

	// firstIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("first-slide");
	// 	slides.classList.remove("second-slide");
	// 	slides.classList.add("default-slide");
	// 	secondIndicator.classList.remove("current-slide");
	// 	thirdIndicator.classList.remove("current-slide");
	// 	firstIndicator.classList.add("current-slide");
	// });

	// secondIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("default-slide");
	// 	slides.classList.remove("second-slide");
	// 	slides.classList.add("first-slide");
	// 	thirdIndicator.classList.remove("current-slide");
	// 	firstIndicator.classList.remove("current-slide");
	// 	secondIndicator.classList.add("current-slide");
	// });

	// thirdIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("first-slide");
	// 	slides.classList.remove("default-slide");
	// 	slides.classList.add("second-slide");
	// 	firstIndicator.classList.remove("current-slide");
	// 	secondIndicator.classList.remove("current-slide");
	// 	thirdIndicator.classList.add("current-slide");
	// });
};

export { buttonEventListener };
