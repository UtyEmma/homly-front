import React from 'react'
import Slider from 'react-slick';
import { PropertiesSliderItem } from './rent-properties-slider/properties-slider-item';

export const SliderProperties = ({listings}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: listings.length >= 3 ? 3 : listings.length,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: listings.length >= 3 ? 3 : listings.length,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: listings.length >= 3 ? 3 : listings.length,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: listings.length >= 2 ? 2 : listings.length,
                    arrows: false,
                    dors: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dors: true,
                    autoplay: true
                }
            }
        ]
    };


    return (
        <Slider {...settings} className="mx-n2 custom-arrow-spacing-30">
            {
                listings.map(listing => <PropertiesSliderItem key={listing.unique_id} listing={listing} />)
            }

        </Slider>
    )
}
