import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropertiesSliderItem } from './rent-properties-slider/properties-slider-item';

export const SliderProperties = ({listings}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: listings && listings.length < 4 ? listings.length : 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };

      useEffect(() => {

      }, [listings])


    return (
        listings &&

        <Slider {...settings} touchMove swipeToSlide={true} focusOnSelect={true} className="mx-n2">
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
