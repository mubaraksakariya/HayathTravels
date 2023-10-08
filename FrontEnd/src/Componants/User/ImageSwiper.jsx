import React, { useEffect, useState } from 'react'
import './ImageSwiper.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useFirebaseDb } from '../../Context/FirebaseContext'
import { query, where, collection, getDocs } from "firebase/firestore";

function ImageSwiper({ folder, setSlideShowBg }) {
    const db = useFirebaseDb()
    const [folderImages, setFolderImages] = useState([])

    const slideChange = (index) => {
        setSlideShowBg(folderImages[index]?.imageUrl)
    }
    useEffect(() => {
        const getFiles = async () => {
            const q = query(collection(db, "Gallery"), where("folderId", "==", folder.id));
            const querySnapshot = await getDocs(q);
            const images = []
            querySnapshot.forEach((doc) => {
                images.push({ id: doc.id, ...doc.data() })
            });
            setFolderImages(images)
        }
        folder && getFiles()
    }, [folder])
    useEffect(() => {
        if (folderImages.length > 0) { setSlideShowBg(folderImages[0]?.imageUrl) }
    }, [folderImages])

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
    };
    return (
        <>
            <Slider {...settings}
                autoplay
                autoplaySpeed={4000}
                centerMode
                className='slider-inner'
                centerPadding='0px'
                afterChange={slideChange}
            >
                {
                    folderImages.map((file) => {
                        return (
                            <div className="slider-img-div" key={file.id}>
                                <img className='slider-img' src={file.imageUrl} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='next arrow'
            onClick={onClick}
        >
            <i className="bi bi-arrow-right-circle-fill"></i>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='prev arrow'
            onClick={onClick}
        >
            <i className="bi bi-arrow-left-circle-fill"></i>
        </div>
    );
}
export default ImageSwiper