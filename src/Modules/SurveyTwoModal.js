import { loadSurveyThree } from "./SurveyThreeModal";

const loadSurveyTwo = () => {
	const modalSurveyForm = document.querySelector("#modal-survey-two-form");
	const surveyTwoModal = document.querySelector("#survey-two-modal");

	surveyTwoModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {

	const surveyTwoModal = document.querySelector("#survey-two-modal");
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionThreeChecked = document.querySelectorAll(
		"[data-question-three]:checked"
	);
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionFourChecked = document.querySelectorAll(
		"[data-question-four]:checked"
	);
	const showErrorOne = document.querySelector("#question-three small");
	const showErrorTwo = document.querySelector("#question-four small");

	if (questionThreeChecked.length === 0) {
		showErrorOne.textContent = "*Please choose one of the answers or specify your favorite genre";
        showErrorOne.setAttribute('aria-hidden', 'false');
	} else {
		showErrorOne.textContent = "";
        showErrorOne.setAttribute('aria-hidden', 'true');
	}

	if (questionFourChecked.length === 0) {
		showErrorTwo.textContent = "*Please choose one of the answers";
        showErrorTwo.setAttribute('aria-hidden', 'false');
	} else {
		showErrorTwo.textContent = "";
        showErrorTwo.setAttribute('aria-hidden', 'true');
	}

	if (questionThreeChecked.length >= 1 && questionFourChecked.length >= 1) {
		console.log("Complete!");
		surveyTwoModal.classList.add("disable");
		loadSurveyThree()
	}
};

export { loadSurveyTwo };
