import React from 'react';
import './Contact.css';
import NavBar from '../../Componants/User/NavBar';
import Footer from '../../Componants/User/Footer';

function Contact() {
	return (
		<>
			<div className='nav-bar'>
				<NavBar />
			</div>
			<div className='contact-main-div'>
				<h3>CONTACT US</h3>
			</div>
			<div className='contact-content-div'>
				<div className='row justify-content-center align-items-start contact-top-div'>
					<div className='col-md contact-form-div'>
						<form>
							<div className='form-header'>
								<h3 className='mb-3'>
									WE'RE READY, LET'S TALK.
								</h3>
							</div>
							<div className='mb-3'>
								<input
									type='text'
									className='custom-input'
									placeholder='Name'
								/>
							</div>
							<div className='mb-3'>
								<input
									type='text'
									className='custom-input'
									placeholder='Email/Phone'
								/>
							</div>
							<div className='mb-3'>
								<input
									type='text'
									className='custom-input'
									placeholder='Subject'
								/>
							</div>
							<div className='mb-3'>
								<textarea
									name=''
									id=''
									rows='5'
									className='custom-input'
									placeholder='Message'></textarea>
							</div>
							<div className='mb-3'>
								<button
									type='submit'
									className='contact-submit-btn btn btn-lg btn-warning px-4'>
									Send Message
								</button>
							</div>
						</form>
					</div>
					<div className='col-md address-div-container'>
						<div className='address-div'>
							<h3>CONTACT INFO</h3>
							{/* <p>We're open for any suggestion or just to have a chat</p> */}
							<div className='address-items'>
								<h4 className=''>Address</h4>
								<p>
									1st Floor MPH Tower <br /> Opposite Bharat
									petroleum Edavanna 676541
								</p>
							</div>
							<div className='address-items'>
								<h4 className=''>Call Us</h4>
								<p>
									{' '}
									+91 9995745200 <br /> 0483-2081202
								</p>
							</div>
							<div className='address-items'>
								<h4 className=''>Email Us</h4>
								<p>info@hayathtravels.com</p>
							</div>
							<div className='address-items'>
								<h4 className=''>Follow Us</h4>
								<div className='socials'>
									<div className='icon-round-div'>
										<i className='bi bi-facebook'></i>
									</div>
									<div className='icon-round-div'>
										<i className='bi bi-instagram'></i>
									</div>
									<div className='icon-round-div'>
										<i className='bi bi-twitter'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-container'>
				<Footer />
			</div>
		</>
	);
}

export default Contact;
