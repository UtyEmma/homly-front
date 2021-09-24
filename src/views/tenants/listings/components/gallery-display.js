import React, { createRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from 'simple-react-lightbox';
import Listing from '../listings';


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
        adaptiveHeight: true,
        // variableWidth: true
    }
    return(
        <>  
            <SRLWrapper>
                <Slider asNavFor={nav} ref={slider => (sliderCarousel = slider)} {...options} >
                    {
                        images.map((image, index) => {
                            return (
                                <div className="box" key={index}>
                                    <div className="item item-size-3-2">
                                        <div className="card p-0 hover-change-image">
                                            <img src={image} className="card-img img-fluid " style={{objectFit: 'cover'}}  alt={title}  />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </SRLWrapper>
            <Slider asNavFor={slider} className="slider variable-width" ref={slider => (sliderNav = slider)} adaptiveHeight slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
                {
                    images.map((image, index) => {
                        return (
                            <div className="box pb-6 px-0" key={index} >
                                <div  className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg" >
                                    <img src={image} alt={title} className="img-fluid  rounded-lg" />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* style={{maxHeight : '200px', overflow: 'hidden', objectFit: 'cover', objectPosition: 'center'}} */}
        </>
    )
}