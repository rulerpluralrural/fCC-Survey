import { loadSurveyTwo } from "./SurveyTwoModal";

loadSurveyTwo

const loadSurveyOne = () => {
	const modalSurveyForm = document.querySelector("#modal-survey-form");
	const surveyOneModal = document.querySelector("#survey-one-modal");

	surveyOneModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {
	const surveyOneModal = document.querySelector("#survey-one-modal");
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionOneChecked = document.querySelectorAll(
		"[data-question-one]:checked"
	);
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionTwoChecked = document.querySelectorAll(
		"[data-question-two]:checked"
	);
	const showErrorOne = document.querySelector("#question-one small");
	const showErrorTwo = document.querySelector("#question-two small");

	if (questionOneChecked.length === 0) {
		showErrorOne.textContent = "*Please choose one of the answers";
		showErrorOne.setAttribute('aria-hidden', 'false');
	} else {
		showErrorOne.textContent = "";
		showErrorOne.setAttribute('aria-hidden', 'true');
	}

	if (questionTwoChecked.length === 0) {
		showErrorTwo.textContent = "*Please choose one of the answers";
		showErrorTwo.setAttribute('aria-hidden', 'false');
	} else {
		showErrorTwo.textContent = "";
		showErrorTwo.setAttribute('aria-hidden', 'true');
	}

	if (questionOneChecked.length >= 1 && questionTwoChecked.length >= 1) {
		console.log("Complete!");
		surveyOneModal.classList.add("disable");
		loadSurveyTwo()
	}
};

export { loadSurveyOne };
