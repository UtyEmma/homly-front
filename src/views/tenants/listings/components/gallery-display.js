import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from 'simple-react-lightbox';

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
        arrows: false
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
                                            <div className="card-img rounded">
                                                <img src={image} className="rounded img-fluid" style={{objectFit: 'cover'}}  alt={title}  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </SRLWrapper>
            <Slider asNavFor={slider} ref={slider => (sliderNav = slider)} slidesToShow={images.length < 3 ? images.length : 3} touchMove dots swipeToSlide={true} focusOnSelect={true}>
                {
                    images.map((image, index) => {
                        return (
                            <div className="mt-5 px-0" key={index} >
                                <div style={{height: '150px'}}>
                                <div style={{background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}  className="bg-white p-0 h-100 shadow-hover-xs-3 rounded-lg" ></div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

// style={{maxHeight : '200px', overflow: 'hidden', objectFit: 'cover', objectPosition: 'center'}}