import React from 'react';
import './ContactForm.css';

export const contactUs = (e) => {
	e.preventDefault();
	const formData = e.target;
	const name = formData.name.value;
	const email = formData.email.value;
	const subject = formData.subject?.value;
	const message = formData.message.value;
	console.log(name, email, subject, message);
	e.target.reset();
};

function ContactForm() {
	return (
		<>
			<div className='contact-top-div2'>
				<div className='contact-div2'>
					<img
						src='./assets/office.jpg'
						alt=''
						className='contact-us-img2'
					/>

					<form
						action=''
						className='contact-form2'
						onSubmit={contactUs}>
						<div className='mb-3'>
							<h3>Quick Enquiry</h3>
						</div>
						<div className='row'>
							<div className='col-md mb-3 input-div'>
								<input
									type='text'
									className='form-control'
									placeholder='Name'
									aria-label='Name'
									name='name'
								/>
							</div>
							<div className='col-md mb-3 input-div'>
								<input
									type='text'
									className='form-control'
									placeholder='Email/Phone'
									aria-label='Email/Phone'
									name='email'
								/>
							</div>
							<div className='col-md-12 mb-3 input-div'>
								<textarea
									className='mb-3 message-area'
									placeholder='Message'
									id='floatingTextarea'
									name='message'
								/>
							</div>
						</div>
						<div className='d-flex justify-content-center'>
							<button
								type='submit'
								className='contact-submit-button btn btn-lg btn-outline-warning'>
								send
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactForm;
