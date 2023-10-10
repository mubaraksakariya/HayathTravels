import React from 'react';
import './NotFound.css';

function NotFound() {
	return (
		<div className='error-top-div'>
			<div className='error-message-div'>
				<h1>404 - Not Found</h1>
				<p>The page you are looking for does not exist.</p>
				<div className='home-btn d-flex justify-content-center'>
					<a href='/' className='text-center'>
						Home
					</a>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
