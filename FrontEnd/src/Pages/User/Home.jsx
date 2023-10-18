import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Componants/User/NavBar';
import Offers from '../../Componants/User/Offers';
import ContactForm from '../../Componants/User/ContactForm';
import Services from '../../Componants/User/Services';
import Footer from '../../Componants/User/Footer';
import './Home.css';

const Home = () => {
	const [hasReachedHalfway, setHasReachedHalfway] = useState(false);
	const backGroundimgRef = useRef();
	const navigate = useNavigate();
	const [bgUrl, setBgUrl] = useState(null);
	const manageBgChange = ({ previousPosition, currentPosition, event }) => {
		setHasReachedHalfway(currentPosition !== 'below');
	};

	useEffect(() => {
		hasReachedHalfway
			? setBgUrl('./assets/FrontPageimage8.jpg')
			: setBgUrl('./assets/FrontPageimage7.jpg');
	}, [hasReachedHalfway]);
	return (
		<div className='home-main-div'>
			<img src={bgUrl} alt='' className='header-bg' />
			<NavBar />
			<div className='home-overlay-div'>
				<div className='home-content-div-1'>
					<div className='front-page-text-div'>
						<h3 className='text-center '>Creating Memories</h3>
						<hr className='colored-line' />
						<h1 className='text-center'>
							Start Your Adventure Today
						</h1>
					</div>
				</div>
				<div className='testimonial-single-div'>
					<img
						src='./assets/Quatation-mark.png'
						alt=''
						className='quatation-mark'
					/>
					<p>
						"What truly sets Hayath Travel Group apart <br /> is
						their passion for travel and their commitment to
						creating unique and authentic experiences"
					</p>
					<p>-Xavior John</p>
				</div>
				<div className='home-content-div-2 pt-5'>
					<Services />
				</div>
				<Waypoint onEnter={manageBgChange} onLeave={manageBgChange}>
					<div style={{ visibility: 'hidden', height: '0' }}>.</div>
				</Waypoint>

				<ContactForm />

				<div className='home-content-div-3'>
					<div>
						<h1 className='mb-4'>EXPLORE THE WORLD</h1>
						<p className='mb-4'>
							Each journey is a masterpiece of experiences, woven
							together with threads of discovery, creating a
							tapestry of memories that linger in the soul's
							gallery forever.
						</p>
						<a
							className='btn btn-lg btn-warning'
							onClick={() => navigate('/services')}>
							Know more
						</a>
					</div>
				</div>
				<Offers />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
