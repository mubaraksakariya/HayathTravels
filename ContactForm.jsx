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
		<div className='contactForm-top-div'>
			<div className='row contact-div'>
				<div className='col-md-6 contact-img-div'>
					<img
						src='./assets/office.jpg'
						alt=''
						className='contact-img'
					/>
				</div>
				<div className='col-md-6 d-flex justify-content-center align-items-center'>
					<form
						action=''
						className='contact-form'
						onSubmit={contactUs}>
						<div className='mb-3 '>
							<h3>Quick Enquiry</h3>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control contact-input-feild'
								name='name'
								id=''
								aria-describedby='helpId'
								placeholder='Name'
							/>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control contact-input-feild'
								name='email'
								id=''
								aria-describedby='emailHelpId'
								placeholder='Email/Phone'
							/>
						</div>
						<div className='mb-3'>
							<textarea
								className='form-control contact-input-feild'
								name='message'
								id=''
								rows='3'
								placeholder='Message'
							/>
						</div>
						<div className=''>
							<button
								type='submit'
								className='contact-submit-button btn btn-lg btn-outline-warning px-4'>
								send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
