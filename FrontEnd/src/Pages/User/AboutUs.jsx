import React from 'react'
import './AboutUs.css'
import NavBar from '../../Componants/User/NavBar'
import Footer from '../../Componants/User/Footer'
function AboutUs() {
    return (
        <>
            <div className='nav-bar'>
                <NavBar />
            </div>
            <div className="about-main-div">
                <h3>ABOUT US</h3>
            </div>
            <div className='about-content-div'>
                <div className="row about-us-row">
                    <div className="col-md-6 about-content-1">
                        <div className="about-content-text">
                            <h3>Who We Are?</h3>
                            <p>
                                Welcome to Hayath Travels Pvt Limited, a distinguished establishment with a long-standing tradition of excellence. We are renowned specialists in curating bespoke Umrah and Hajj pilgrimages, offering an extensive range of exclusive tour packages and efficient visa services. Our unwavering commitment is to transform your travel dreams into carefully planned experiences, providing unique journeys and a seamless visa application process. Join us to explore the rich tapestry of global wonders, create unforgettable memories, and embark on journeys of a lifetime
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 about-content-2">
                        <div className="about-content-img">
                            <img src="./assets/aboutus1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs