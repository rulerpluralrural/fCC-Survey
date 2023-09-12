export default function createSurveyThree() {
	const surveyThreeModal = document.createElement("div");
	surveyThreeModal.id = "survey-three-modal";
	surveyThreeModal.className = "survey-three-modal disable";
    surveyThreeModal.classList.add('overlay')

	surveyThreeModal.innerHTML += `
        <div class="survey-three-container container-style">
            <div class="survey-header">
                <h1>Thank you for your patience!</h1>
            </div>
            
            <form action="" id="modal-survey-three-form">
                <h2 class="long-text">Feel free to leave suggestions and comments to help us improve thank you!</h2>
                <textarea  placeholder=" Comment Here"></textarea>
                <button type="submit" class="survey-btn" id="survey-three-btn">Submit</button>
            </form>
            
        </div>
    `;

	return surveyThreeModal;
}
