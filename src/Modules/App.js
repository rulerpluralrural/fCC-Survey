
const buttonEventListener = () => {
	const buttonLeft = document.querySelector(".button-left");
	const buttonRight = document.querySelector(".button-right");
	/**@type {HTMLElement} */
	const slides = document.querySelector(".movies-container");
	const firstIndicator = document.querySelector(".content-indicator-first");
	const secondIndicator = document.querySelector(".content-indicator-second");
	const thirdIndicator = document.querySelector(".content-indicator-third");

	buttonLeft.addEventListener("click", () => {
		if (slides.classList.contains("second-slide")) {
			slides.classList.remove("second-slide");
			slides.classList.add("first-slide");
		} else if (slides.classList.contains("first-slide")) {
			slides.classList.remove("first-slide");
			slides.classList.add("default-slide");
		}
	});

	buttonRight.addEventListener("click", (e) => {
		if (slides.classList.contains("default-slide")) {
			slides.classList.remove("default-slide");
			slides.classList.add("first-slide");
		} else if (slides.classList.contains("first-slide")) {
			slides.classList.remove("first-slide");
			slides.classList.add("second-slide");
		}
	});

	firstIndicator.addEventListener("click", () => {
		slides.classList.remove("first-slide");
		slides.classList.remove("second-slide");
		slides.classList.add("default-slide");
	});

	secondIndicator.addEventListener("click", () => {
		slides.classList.remove("default-slide");
		slides.classList.remove("second-slide");
		slides.classList.add("first-slide");
	});

	thirdIndicator.addEventListener("click", () => {
		slides.classList.remove("first-slide");
		slides.classList.remove("default-slide");
		slides.classList.add("second-slide");
	});

};


export { buttonEventListener };
