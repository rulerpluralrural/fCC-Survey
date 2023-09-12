export default function createSurveyOneModal() {
	const surveyModal = document.createElement("div");
	surveyModal.id = "survey-one-modal";
	surveyModal.className = "survey-one-modal disable";
    surveyModal.classList.add('overlay')

	surveyModal.innerHTML += `
        <div class="survey-one-container container-style">
            <form  action="" id="modal-survey-form">
                <div class="survey-header"></div>

                <div class="question-one" id="question-one">
                    <h1>How did you learn about us?</h1>
                    <div class="survey-form-control">
                        <p>Social Media (Facebook,Twitter,Instagram, etc.)</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Youtube, Twitch, other sites</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Friends, Colleagues, Family</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>TV ads</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Others</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <small role="alert" class="show-error-text" aria-hidden="true"></small>
                </div>

                <div class="question-two" id="question-two">
                    <h1>How often do you watch movies?</h1>
                <div class="survey-form-control">
                    <p>Less than once a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="1">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Once or twice a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="2">
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <div class="survey-form-control">
                    <p>Three to four times a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="3">
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <div class="survey-form-control">
                    <p>More than four times a month</p>
                        <label class="switch">
                            <input type="radio" name="question-two" data-question-two"4">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <small role="alert" class="show-error-text" aria-hidden="true"></small>
                </div>

                <button type="submit" class="survey-btn" id="survey-one-btn">Submit</button>
            </form>
        </div>
    `;

	return surveyModal;
}


