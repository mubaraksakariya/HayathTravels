import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../../Componants/User/NavBar'
import { Waypoint } from 'react-waypoint';
import Offers from '../../Componants/User/Offers';
import ContactForm from '../../Componants/User/ContactForm';
import Services from '../../Componants/User/Services';

function Home() {
    const [hasReachedHalfway, setHasReachedHalfway] = useState(false);
    const backGroundimgRef = useRef()
    const manageBgChange = ({ previousPosition, currentPosition, event }) => {
        if (currentPosition === 'below') setHasReachedHalfway(false)
        else setHasReachedHalfway(true)
    }
    useEffect(() => {
        if (hasReachedHalfway) {
            backGroundimgRef.current.style.backgroundImage = 'url(./assets/FrontPageimage6.jpg)'
        } else {
            // Set the background image URL when scrolling is before halfway
            backGroundimgRef.current.style.backgroundImage = 'url(./assets/FrontPageimage7.jpg)';
        }
    }, [hasReachedHalfway])
    return (
        <div className="home-main-div" ref={backGroundimgRef}>
            <NavBar />
            <div className="home-overlay-div">
                <div className="home-content-div-1">
                    <div className='front-page-text-div'>
                        <h3 className='text-center '>Creating Memories</h3>
                        <hr className="colored-line" />
                        <h1 className='text-center'>Start Your Adventure Today</h1>
                    </div>
                </div>
                <div className="testimonial-single-div">
                    <img src="./assets/Quatation-mark.png" alt="" className='quatation-mark' />
                    <p>"What truly sets Hayath Tours and Travels apart <br /> is their passion for travel and their commitment to creating unique and authentic experiences"</p>
                    <p>- Nishad</p>
                </div>
                <ContactForm />
                <div className="home-content-div-2">
                    <Offers />
                </div>
                <Waypoint onEnter={manageBgChange} onLeave={manageBgChange} >
                    <div style={{ visibility: 'hidden', height: '0' }}>.</div>
                </Waypoint>
                <div className='home-content-div-3'>
                    <div>
                        <h1>
                            EXPLORE THE WORLD
                        </h1>
                        <p className=''>
                            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.
                        </p>
                        <button className='btn btn btn-outline-info'>Know more</button>
                    </div>
                </div>
                <div className="home-content-div-2 pt-5">
                    <Services />
                </div>
            </div>
        </div>
    )
}

export default Home