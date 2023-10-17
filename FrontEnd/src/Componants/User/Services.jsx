import React, { useEffect, useRef } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

function Services() {
	const navigate = useNavigate();
	const servicesData = [
		{
			id: 1,
			title: 'Visa Services',
			description:
				'Streamline your international travel plans with the expertise of our Visa specialists.',
			imageUrl: './assets/Visa.jpg',
		},
		{
			id: 2,
			title: 'International Flights',
			description:
				'Let us be your travel companion in securing the finest international flights to your desired destinations.',
			imageUrl: './assets/international-flight.jpg',
		},
		{
			id: 3,
			title: 'Corporate Travel Desk',
			description:
				'Our team of specialists works closely with you to understand your travel requirements and preferences.',
			imageUrl: './assets/business-class.jpg',
		},
		{
			id: 4,
			title: 'Luxury Cruises',
			description:
				'We specialize in curating unforgettable journeys aboard the finest luxury Cruises, ensuring your group travel experience is nothing short of extraordinary.',
			imageUrl: './assets/ship.jpg',
		},
		{
			id: 5,
			title: 'Attestation Services',
			description:
				'We specialize in handling a wide range of document types and work diligently to ensure that every attestation is executed meticulously, following all legal standards.',
			imageUrl: './assets/attest.jpg',
		},
		{
			id: 6,
			title: 'Cab Service',
			description:
				"Whether you're heading to meetings, airports, or exploring the city, count on us for punctuality, comfort, and a seamless travel experience.",
			imageUrl: './assets/Cab.jpg',
		},
	];

	const observerRef = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('article-visible');
				}
			});
		};

		observerRef.current = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		});

		const articles = document.querySelectorAll('.article-hidden');

		articles.forEach((article) => {
			observerRef.current.observe(article);
		});

		return () => {
			observerRef.current.disconnect();
		};
	}, []);
	const manageLink = (item) => {
		console.log(item);
		navigate('/services');
	};
	return (
		<div className='service-main-div'>
			<div className='services-header mb-5'>
				<h3 className='text-center text-black'>OUR SERVICES</h3>
			</div>
			<section className='articles'>
				{servicesData.map((service, index) => (
					<article
						className='article-hidden'
						key={service.title}
						onClick={() => manageLink(service.title)}>
						<div className='article-wrapper'>
							<figure>
								<img
									src={service.imageUrl}
									alt={service.title}
								/>
							</figure>
							<div className='article-body'>
								<h2>{service.title}</h2>
								<p>{service.description}</p>
								<a className='read-more'>
									Read more{' '}
									<span className='sr-only'>
										about {service.title}
									</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

export default Services;
