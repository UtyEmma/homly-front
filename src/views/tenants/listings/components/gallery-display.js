import React, { createRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function GalleryDisplay({images, title}) {    
    let sliderCarousel = []
    let sliderNav = []
    const [slider, setSlider] = useState()
    const [nav, setNav] = useState()

    useEffect(() => {
        setNav(sliderNav)
        setSlider(sliderCarousel)
    })

    const options = {
        slidesToShow: 1, 
        autoplay: true,
        dots: false,
        arrows: false,
    }
    return(
        <>
            <Slider asNavFor={nav} ref={slider => (sliderCarousel = slider)} {...options} >
                {
                    images.map((image, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="item item-size-3-2">
                                    <div className="card p-0 hover-change-image">
                                        <a href={image} className="card-img" data-gtf-mfp="true" data-gallery-id={index} style={{backgroundImage: `url(${image})`}}></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <Slider asNavFor={slider} ref={slider => (sliderNav = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
                {
                    images.map((image, index) => {
                        return (
                            <div style={{minHeight : '100%'}} className="box pb-6 px-0" key={index} >
                                <div style={{minHeight : '100%'}} className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                                    <img src={image} style={{minHeight : '100%'}} alt={title} className="img-fluid  rounded-lg" />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}