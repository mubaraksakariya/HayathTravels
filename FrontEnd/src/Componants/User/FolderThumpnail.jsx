import React, { useEffect } from 'react'
import './FolderThumpnail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FolderThumpnail({ folders, setFolderView }) {
    // useEffect(() => {
    //     console.log(folder.folderName);
    // }, [folder])
    // const divStyle = {
    //     backgroundImage: `url(${folder.thumpnail})`,
    // };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            }]
    };
    return (
        // <div className="folder-thumb-div" style={divStyle}>
        //     {/* <h4>{folder.folderName}</h4> */}
        //     <h4 className='folder-thumb-h4'>Inaguration</h4>
        // </div>

        <Slider {...settings}
        >
            {
                folders.map((file) => {
                    return (
                        <div className="folder-thumb-div" key={file.id}>
                            <h4 className='folder-thumb-h4'>Inaguration</h4>
                            <img className='folder-thumb-img' src={file.thumpnail} alt="" />
                        </div>
                    )
                })
            }
        </Slider>

    )
}

export default FolderThumpnail