import React from 'react'
import Slider from 'react-slick';
import { PropertiesSliderItem } from './rent-properties-slider/properties-slider-item';

export const SliderProperties = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false
      };


    return (
        <Slider {...settings} className="mx-n2 custom-arrow-spacing-30">
            <PropertiesSliderItem />
            <PropertiesSliderItem />
            <PropertiesSliderItem />
            <PropertiesSliderItem />
            <PropertiesSliderItem />
            <PropertiesSliderItem />
        </Slider>
    )
}
