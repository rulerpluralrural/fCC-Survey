import { loadSurveyOne } from "./SurveyOneModal.js";

const loadModalInfo = () => {
	const modalInfoForm = document.querySelector("#modal-info-form");
	const modalInfo = document.querySelector("#modal-info");

	modalInfo.classList.remove("disable");

	modalInfoForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {
	const modalInfo = document.querySelector("#modal-info");
	/**@type {HTMLInputElement} */
	const firstName = document.querySelector("#first-name");
	/**@type {HTMLInputElement} */
	const lastName = document.querySelector("#last-name");
	/**@type {HTMLInputElement} */
	const email = document.querySelector("#email");

	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();

	if (firstNameValue === "") {
		showError(firstName.parentElement, "*Please provide your first name");
	} else if (checkForSpecialChars(firstNameValue)) {
		showError(
			firstName.parentElement,
			"*First name should'nt contain special characters"
		);
	} else if (checkForDigits(firstNameValue)) {
		showError(
			firstName.parentElement,
			"*First name should'nt contain numbers"
		);
	} else if (firstName.value.length < 3) {
		showError(
			firstName.parentElement,
			"*First name should be more than 3 letters"
		);
	} else {
		showSuccess(firstName.parentElement);
	}

	if (lastNameValue === "") {
		showError(lastName.parentElement, "*Please provide your last name");
	} else if (checkForSpecialChars(lastNameValue)) {
		showError(
			lastName.parentElement,
			"*Last name should'nt contain numbers"
		);
	} else if (checkForDigits(lastNameValue)) {
		showError(
			lastName.parentElement,
			"*Please provide a valid last name"
		);
	} else if (lastName.value.length < 3) {
		showError(
			lastName.parentElement,
			"*Last name should be more than 3 letters"
		);
	} else {
		showSuccess(lastName.parentElement);
	}

	if (emailValue === "") {
		showError(email.parentElement, "*Please provide your email address");
	} else if (!isValidEmail(emailValue)) {
		showError(
			email.parentElement,
			"*Please provide a valid email address ex. (digbick69@email.com)"
		);
	} else {
		showSuccess(email.parentElement);
	}

	if (
		email.parentElement.classList.contains("success") &&
		firstName.parentElement.classList.contains("success") &&
		lastName.parentElement.classList.contains("success")
	) {
		modalInfo.classList.add("disable");
		loadSurveyOne();
	}
};

const showError = (input, message) => {
	const errorText = input.querySelector(".show-error-text");
	const successIcon = input.querySelector(".fa-circle-check");
	const errorIcon = input.querySelector(".fa-circle-xmark");

	input.className = "form-control error";
	successIcon.classList.add("disable");
	errorIcon.classList.remove("disable");
	errorText.textContent = message;
	errorText.setAttribute("aria-hidden", "false");
};

const showSuccess = (input) => {
	const successText = input.querySelector(".show-error-text");
	const successIcon = input.querySelector(".fa-circle-check");
	const errorIcon = input.querySelector(".fa-circle-xmark");

	successText.textContent = "";
	successText.setAttribute("aria-hidden", "true");
	errorIcon.classList.add("disable");
	successIcon.classList.remove("disable");
	input.className = "form-control success";
};

const isValidEmail = (email) => {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const checkForSpecialChars = (name) => {
	return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name);
};

const checkForDigits = (name) => {
	return /\d/.test(name);
};

export { loadModalInfo };
