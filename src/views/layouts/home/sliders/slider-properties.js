import React, { useEffect } from 'react'
import Slider from 'react-slick';
import { PropertiesSliderItem } from './rent-properties-slider/properties-slider-item';

export const SliderProperties = ({listings}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        prevArrow: <i className="fa fa-chevron-left"></i>,
        nextArrow: <i className="fa fa-chevron-right"></i>,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

      useEffect(() => {

      }, [listings])


    return (
        listings &&

        <Slider {...settings} className="mx-n2 custom-arrow-spacing-30">
            {
                listings.map(function(listing){
                    return (
                        <PropertiesSliderItem  listing={listing} />
                    )
                })
            }
        </Slider>
    )
}
