import React from 'react';
import './ContactForm.css';
import { useFirebaseDb } from '../../Context/FirebaseContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const contactUs = (db, data) => {
	console.log(data);
	addDoc(collection(db, 'mail'), {
		to: ['travelshayath@gmail.com'],
		message: {
			subject: data.subject,
			from: data.email,
			text: data.message,
			html: `from : ${data.email}<br>message : ${data.message}`,
		},
		createdAt: serverTimestamp(),
	})
		.then((res) => {
			console.log(res);
			alert('Your message have been sent !!');
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});
};

function ContactForm() {
	const db = useFirebaseDb();
	const formSubmit = (e) => {
		e.preventDefault();
		const formData = e.target;
		const name = formData.name.value;
		const email = formData.email.value;
		const subject = formData.subject
			? formData.subject.value
			: 'Contact us message';
		const message = formData.message.value;
		// console.log(name, email, subject, message);
		const data = {
			name,
			email,
			subject,
			message,
		};
		contactUs(db, data);
		e.target.reset();
	};
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
						onSubmit={formSubmit}>
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
