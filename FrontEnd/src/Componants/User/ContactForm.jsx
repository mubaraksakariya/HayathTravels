import React from 'react';
import './ContactForm.css';

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
				<div className='col-md-6 d-flex justify-content-center align-items-center '>
					<form action='' className='contact-form'>
						<div className='mb-3 '>
							<h3>Quick Enquiry</h3>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control contact-input-feild'
								name=''
								id=''
								aria-describedby='helpId'
								placeholder='Name'
							/>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control contact-input-feild'
								name=''
								id=''
								aria-describedby='emailHelpId'
								placeholder='Email/Phone'
							/>
						</div>
						<div className='mb-3'>
							<textarea
								className='form-control contact-input-feild'
								name=''
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
