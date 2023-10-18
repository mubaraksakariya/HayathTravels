import React from 'react';
import './Footer.css';
function Footer() {
	return (
		<div className='continer footer-main-div text-white'>
			<div className='address'>
				1st Floor, MPH Tower, Opposite Bharat petroleum, Edavanna 676541{' '}
				<br /> 0483-2081202 | info@hayathtravels.com
			</div>
			<div className='footer-socials'>
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
			<div className='copyright'>Copyright © 2023 hayath travels</div>
		</div>
	);
}

export default Footer;
