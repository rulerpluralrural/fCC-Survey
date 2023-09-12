export default function createInfoModal() {
    const modalInfo = document.createElement('div')
    modalInfo.className = 'modal-info'
    modalInfo.classList.add('disable')
	modalInfo.classList.add('overlay')
    modalInfo.setAttribute('id', 'modal-info')

    modalInfo.innerHTML += `
    <div class="modal-info-content container-style">
				<div class="modal-info-header">
					<h1>Tell us what TV shows and Movies</h1>
					<h1> you love to watch!</h1>
				</div>
				<div class="form-container">
					<form action="" id="modal-info-form">
						<div class="form-control">
							<label for="first-name">First name</label>
							<input type="text" name="first-name" id="first-name" placeholder="John" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="last-name">Last name</label>
							<input type="text" name="last-name" id="last-name" placeholder="Smith" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="email">Email Address</label>
							<input type="email" name="email" id="email" placeholder="johnsmith1@email.com" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="Age">Age <em>(optional)</em></label>
							<input type="number" name="age" id="age" min="15" max="120" placeholder='15'/>
						</div>
                        <button type="submit" class="survey-btn">Submit</button>
					</form>
				</div>
			</div>
    `
    return modalInfo
}

