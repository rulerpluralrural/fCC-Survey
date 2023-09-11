
const loadSurveyThree = () => {
	const surveyThreeModal = document.querySelector("#survey-three-modal");
	const  modalSurveyForm = document.querySelector("#modal-survey-three-form");

	surveyThreeModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
        console.log('Complete!')
        surveyThreeModal.classList.add("disable");
	});
};

export { loadSurveyThree }