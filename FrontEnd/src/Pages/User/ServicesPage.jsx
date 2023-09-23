import React from 'react';
import NavBar from '../../Componants/User/NavBar';
import Footer from '../../Componants/User/Footer';
import './ServicesPage.css';

function ServicesPage() {
    return (
        <>
            <div className='services-main-div'>
                <NavBar />
                <h3>Services</h3>
                <div className="wrap">
                    {/* Service 1: Visa Services */}
                    <div className="tile">
                        <img src='./assets/Visa.jpg' alt='Visa Services' />
                        <div className="text">
                            <h1>Visa Services</h1>
                            <h2 className="animate-text">Streamline your international travel plans with the expertise of our Visa specialists.</h2>
                            <p className="animate-text">Our Visa Services team is dedicated to making your international travel hassle-free. Whether you're planning a leisure trip or a business journey, count on us to handle your visa needs efficiently and professionally. <a href="/visa-services">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>

                    {/* Service 2: International Flights */}
                    <div className="tile">
                        <img src='./assets/international-flight.jpg' alt='International Flights' />
                        <div className="text">
                            <h1>International Flights</h1>
                            <h2 className="animate-text">Let us be your travel companion in securing the finest international flights to your desired destinations.</h2>
                            <p className="animate-text">Embark on your international adventure with ease. Our experts will assist you in finding the best international flight options tailored to your preferences. <a href="/international-flights">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>

                    {/* Service 3: Corporate Travel Desk */}
                    <div className="tile">
                        <img src='./assets/business-class.jpg' alt='Corporate Travel Desk' />
                        <div className="text">
                            <h1>Corporate Travel Desk</h1>
                            <h2 className="animate-text">Our team of specialists works closely with you to understand your travel requirements and preferences.</h2>
                            <p className="animate-text">Experience seamless corporate travel with us. We collaborate with your organization to ensure a smooth and efficient business travel experience. <a href="/corporate-travel">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>

                    {/* Service 4: Luxury Cruises */}
                    <div className="tile">
                        <img src='./assets/ship.jpg' alt='Luxury Cruises' />
                        <div className="text">
                            <h1>Luxury Cruises</h1>
                            <h2 className="animate-text">We specialize in curating unforgettable journeys aboard the finest luxury Cruises, ensuring your group travel experience is nothing short of extraordinary.</h2>
                            <p className="animate-text">Indulge in luxury as you explore the world's oceans. Our carefully selected luxury cruises promise an extraordinary group travel experience. <a href="/luxury-cruises">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>

                    {/* Service 5: Attestation Services */}
                    <div className="tile">
                        <img src='./assets/attest.jpg' alt='Attestation Services' />
                        <div className="text">
                            <h1>Attestation Services</h1>
                            <h2 className="animate-text">We specialize in handling a wide range of document types and work diligently to ensure that every attestation is executed meticulously, following all legal standards.</h2>
                            <p className="animate-text">Ensure your documents are legally recognized worldwide. Our attestation services guarantee meticulous and compliant document processing. <a href="/attestation-services">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>

                    {/* Service 6: Cab Service */}
                    <div className="tile">
                        <img src='./assets/Cab.jpg' alt='Cab Service' />
                        <div className="text">
                            <h1>Cab Service</h1>
                            <h2 className="animate-text">Whether you're heading to meetings, airports, or exploring the city, count on us for punctuality, comfort, and a seamless travel experience.</h2>
                            <p className="animate-text">Travel around the city with ease. Our cab service ensures punctuality, comfort, and a hassle-free travel experience, whether you're on a business trip or exploring the sights. <a href="/cab-service">Learn more</a></p>
                            {/* <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        </>
    );
}

export default ServicesPage;
