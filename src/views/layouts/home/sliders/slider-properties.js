import React, { useEffect } from 'react'
import Slider from 'react-slick';
import { PropertiesSliderItem } from './rent-properties-slider/properties-slider-item';

export const SliderProperties = ({listings}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: listings && listings.length < 4 ? listings.length : 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        prevArrow: <i className="fa fa-chevron-left"></i>,
        nextArrow: <i className="fa fa-chevron-right"></i>
      };

      useEffect(() => {

      }, [listings])


    return (
        listings &&

        <Slider {...settings} touchMove swipeToSlide={true} focusOnSelect={true} className="mx-n2 custom-arrow-spacing-30">
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
