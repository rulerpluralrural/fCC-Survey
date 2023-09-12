export default function createSurveyTwoModal() {
	const surveyTwoModal = document.createElement("div");
	surveyTwoModal.id = "survey-two-modal";
	surveyTwoModal.className = "survey-two-modal disable";
    surveyTwoModal.classList.add('overlay')

	surveyTwoModal.innerHTML += `
        <div class="survey-two-container container-style">
            <form  action="" id="modal-survey-two-form">
                <div class="survey-header"></div>

            <div class="question-three" id="question-three">
                <h1> What kind of movies and TV shows do you usually watch?</h1>
                <div class="survey-form-control">
                    <p>Action</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Horror</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Comedy</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Romance</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Drama</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Animation</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Suspense</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Others</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three-others" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                        <input type="text" name="survey-three" placeholder="If others please specify">                 
                </div>
                <small role="alert" class="show-error-text" aria-hidden="true"></small>
            </div>

            <div class="question-four" id="question-four">
                <h1>Would you like recieve movie updates from us?</h1>
                <div class="survey-form-control">
                    <p>Yes</p>
                    <label class="switch">
                        <input type="radio" name="survey-four" data-question-four>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                <p>No</p>
                    <label class="switch">
                        <input type="radio" name="survey-four" data-question-four>
                        <span class="slider round"></span>
                    </label>
                </div> 
                <small role="alert" class="show-error-text" aria-hidden="true"></small>
            </div>

                <button type="submit" class="survey-btn" id="survey-two-btn">Submit</button>
            </form>
        </div>
    `;

	return surveyTwoModal;
}
