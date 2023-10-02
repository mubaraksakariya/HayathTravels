import React, { useEffect, useRef } from 'react'
import './Services.css'
function Services() {
    const articRef = useRef()
    useEffect(() => {
        // Function to handle the intersection observer callback
        function handleIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // When the article is in the viewport, add the visible className
                    entry.target.classList.add('article-visible');
                }
            });
        }

        // Create an Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '1px', // You can adjust this margin as needed
            threshold: 0.3, // Adjust the threshold as needed
        });

        // Select all articles
        const articles = document.querySelectorAll('article');

        // Observe each article
        articles.forEach((article) => {
            observer.observe(article);
        });
    }, []);

    return (
        <div className='service-main-div'>
            <div className="services-header mb-5">
                <h3 className='text-center text-black'>OUR SERVICES</h3>
            </div>
            <section className="articles">
                <article className="article-hidden">
                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/Visa.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Visa Services</h2>
                            <p>
                                Streamline your international travel plans with the expertise of our Visa specialists.
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="article-hidden" ref={articRef}>

                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/international-flight.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>International Flights</h2>
                            <p>
                                Let us be your travel companion in securing the finest international flights to your desired destinations
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="article-hidden">

                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/business-class.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Corporate Travel Desk</h2>
                            <p>
                                Our team of specialists works closely with you to understand your travel requirements and preferences
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
            <section className="articles">
                <article className="article-hidden">

                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/ship.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Luxury Cruises</h2>
                            <p>
                                We specialize in curating unforgettable journeys aboard the finest luxury Cruises, ensuring your group travel experience is nothing short of extraordinary
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="article-hidden">
                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/attest.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Attestation Services</h2>
                            <p>
                                We specialize in handling a wide range of document types and work diligently to ensure that every attestation is executed meticulously, following all legal standards.
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="article-hidden">

                    <div className="article-wrapper">
                        <figure>
                            <img src="./assets/Cab.jpg" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Cab Service</h2>
                            <p>
                                Whether you're heading to meetings, airports, or exploring the city, count on us for punctuality, comfort, and a seamless travel experience
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

            </section>

        </div>
    )
}

export default Services