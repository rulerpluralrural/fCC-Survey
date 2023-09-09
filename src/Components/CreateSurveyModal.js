export default function createSurveyModal() {
	const surveyModal = document.createElement("div");
	surveyModal.id = "survey-one-modal";
	surveyModal.className = "survey-one-modal";

	surveyModal.innerHTML += `
        <div class="survey-one-container">
            
            <div class="survey-header"></div>
            <h1>Would you like recieve movie updates from us?</h1>
            <div class="survey-form-control">
                <p>Social Media (Facebook,Twitter,Instagram, etc.)</p>
                <label class="switch">
                    <input type="radio" name="survey-one">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
                <p>Youtube, Twitch, other sites</p>
                <label class="switch">
                    <input type="radio" name="survey-one">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
                <p>Friends, Colleagues, Family</p>
                <label class="switch">
                    <input type="radio" name="survey-one">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
                <p>TV ads</p>
                <label class="switch">
                    <input type="radio" name="survey-one">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
                <p>Others</p>
                <label class="switch">
                    <input type="radio" name="survey-one">
                    <span class="slider round"></span>
                </label>
            </div>

                <h1>How often do you watch movies?</h1>
            <div class="survey-form-control">
                <p>Less than once a month</p>
                <label class="switch">
                    <input type="radio" name="survey-three">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
            <p>Once or twice a month</p>
            <label class="switch">
                <input type="radio" name="survey-three">
                <span class="slider round"></span>
            </label>
            </div>
            <div class="survey-form-control">
            <p>Three to four times a month</p>
            <label class="switch">
                <input type="radio" name="survey-three">
                <span class="slider round"></span>
            </label>
            </div>
            <div class="survey-form-control">
            <p>More than four times a month</p>
                <label class="switch">
                    <input type="radio" name="survey-three">
                    <span class="slider round"></span>
                </label>
            </div>

                <h1>Would you like recieve movie updates from us?</h1>
            <div class="survey-form-control">
                <p>Yes</p>
                <label class="switch">
                    <input type="radio" name="survey-two">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="survey-form-control">
            <p>No</p>
                <label class="switch">
                    <input type="radio" name="survey-two">
                    <span class="slider round"></span>
                </label>
            </div>

            <button type="submit" class="survey-btn" id="survey-one-btn">Submit</button>
        </div>
    `;

	return surveyModal;
}
