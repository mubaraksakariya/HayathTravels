import React from 'react'
import './Gallery.css'
import NavBar from '../../Componants/User/NavBar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import 'swiper/css/thumbs';
function Gallery() {
    return (
        <>
            <div className='nav-bar'>
                <NavBar />
            </div>
            <div className="contact-main-div">
                <h3>GALLERY</h3>
            </div>
            <div className="contact-content-div">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, Thumbs]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    Parallax
                    Thumbs={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    <SwiperSlide>Slide 10</SwiperSlide>
                    <SwiperSlide>Slide 11</SwiperSlide>
                    ...
                </Swiper>
            </div>
        </>
    )
}

export default Gallery