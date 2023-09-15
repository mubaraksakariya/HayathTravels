import React from 'react'
import './Offers.css'

function Offers() {
    const offers = [1, 2]
    return (
        <div className="offer-main-div">
            <div className='offer-header pb-1'>
                <h1>SPECIAL PACKAGES</h1>
            </div>
            <hr className="colored-line" />
            <div className="row justify-content-center align-items-center g-2 pt-4">
                {
                    offers.map(offer => {
                        return (
                            <div className="col-md-6 pt-0 offer-box-div" key={offer}>
                                <div className="card pt-1 p-3">
                                    <img src="./offer (1).jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Offers