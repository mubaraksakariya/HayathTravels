import React, { useEffect, useRef } from 'react';
import NavBar from '../../Componants/User/NavBar';
import Footer from '../../Componants/User/Footer';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
	const navigate = useNavigate();
	const tilesRef = useRef([]);
	const observer = useRef(null);

	useEffect(() => {
		// Initialize Intersection Observer
		observer.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(
							'tile-animation-smallscreen',
							'img-animation-smallscreen',
							'text-animation-smallscreen'
						);
					} else {
						entry.target.classList.remove(
							'tile-animation-smallscreen',
							'img-animation-smallscreen',
							'text-animation-smallscreen'
						);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1,
			}
		);

		// Observe each tile element
		tilesRef.current.forEach((tile) => {
			observer.current.observe(tile);
		});

		// Cleanup observer on component unmount
		return () => {
			observer.current.disconnect();
		};
	}, []);

	const serviceLinks = {
		'Visa-Services': '/contact',
		'International-Flights': '/contact',
		'Corporate-Travel-Desk': '/contact',
		'Luxury-Cruises': '/contact',
		'Attestation Services': '/contact',
		'Cab-Service': '/contact',
	};

	const navigateToPage = (service) => {
		const link = serviceLinks[service];
		if (link) {
			navigate(link);
		}
	};

	return (
		<>
			<div className='nav-bar'>
				<NavBar />
			</div>
			<div className='services-main-div'>
				<img
					src='./assets/services5.jpg'
					alt=''
					className='header-bg'
				/>
				<h3>SERVICES</h3>
			</div>
			<div className='service-description-div'>
				<h4>LET THE ADVENTURE BEGIN</h4>
				<hr className='colored-line' />
				<p>
					Our comprehensive range of offerings ensures that every
					aspect of your journey, from visa arrangements to
					international flights and corporate travel, is meticulously
					managed
				</p>
			</div>
			<div className='service-cards-div'>
				<div className='wrap'>
					{/* Service 1: Visa Services */}
					<div
						ref={(el) => (tilesRef.current[0] = el)}
						className='tile'>
						<img
							src='./assets/Visa.jpg'
							alt='Visa Services'
							loading='lazy'
						/>
						<div className='text'>
							<h1>Visa Services</h1>
							<h2 className='animate-text'>
								Streamline your international travel plans with
								the expertise of our Visa specialists.
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('Visa-Services');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>

					{/* Service 2: International Flights */}
					<div
						ref={(el) => (tilesRef.current[1] = el)}
						className='tile'>
						<img
							src='./assets/international-flight.jpg'
							alt='International Flights'
							loading='lazy'
						/>
						<div className='text'>
							<h1>International Flights</h1>
							<h2 className='animate-text'>
								Let us be your travel companion in securing the
								finest international flights to your desired
								destinations.
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('International-Flights');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>

					{/* Service 3: Corporate Travel Desk */}
					<div
						ref={(el) => (tilesRef.current[2] = el)}
						className='tile'>
						<img
							src='./assets/business-class.jpg'
							alt='Corporate Travel Desk'
							loading='lazy'
						/>
						<div className='text'>
							<h1>Corporate Travel Desk</h1>
							<h2 className='animate-text'>
								Our team of specialists works closely with you
								to understand your travel preferences.
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('Corporate-Travel-Desk');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>

					{/* Service 4:  */}
					<div
						ref={(el) => (tilesRef.current[3] = el)}
						className='tile'>
						<img
							src='./assets/ship.jpg'
							alt='Luxury Cruises'
							loading='lazy'
						/>
						<div className='text'>
							<h1>Luxury Cruises</h1>
							<h2 className='animate-text'>
								We specialize in curating unforgettable journeys
								aboard the finest luxury Cruises
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('Luxury-Cruises');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>

					{/* Service 5:  */}
					<div
						ref={(el) => (tilesRef.current[4] = el)}
						className='tile'>
						<img
							src='./assets/attest.jpg'
							alt='Attestation Services'
							loading='lazy'
						/>
						<div className='text'>
							<h1>Attestation Services</h1>
							<h2 className='animate-text'>
								We specialize in handling a wide range of
								document types and work diligently
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('Attestation Services');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>

					{/* Service 6:  */}
					<div
						ref={(el) => (tilesRef.current[5] = el)}
						className='tile'>
						<img
							src='./assets/Cab.jpg'
							alt='Cab Service'
							loading='lazy'
						/>
						<div className='text'>
							<h1>Cab Service</h1>
							<h2 className='animate-text'>
								Whether you're heading to meetings, airports, or
								exploring the city, count on us
							</h2>
							<p className='animate-text'>
								<a
									href=''
									onClick={(e) => {
										e.preventDefault();
										navigateToPage('Cab-Service');
									}}>
									Learn more
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ServicesPage;
