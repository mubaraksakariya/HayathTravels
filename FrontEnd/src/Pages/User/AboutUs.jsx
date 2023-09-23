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
                <div className='about-text-div'>
                    <h3>About Us</h3>
                    <p>
                        Welcome to Hayath Travels Pvt Limited, a distinguished establishment with years of excellence. We are renowned specialists in meticulously curating tailored Umrah and Hajj pilgrimages, complemented by a comprehensive portfolio of exclusive tour packages and streamlined visa services. Our unwavering commitment is to transmute your travel aspirations into meticulously orchestrated experiences, delivering distinctive sojourns and ensuring a seamless visa acquisition process. Engage with us to immerse yourself in the grand tapestry of global wonders, meticulously craft indelible memories, and embark on transcendent journeys of a lifetime.

                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs