import React from 'react'
import Slider from 'react-slick';

export const DestinationsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
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

    return (
        <section className="bg-gray-02 pt-9 pb-lg-13 pb-11">
            <div className="container container-xxl">
                <h2 className="text-heading c-title fs-26 fs-md-48">Destinations We Love The Most</h2>
                <span className="heading-divider" />
                <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>

                <Slider {...settings} >
                    <div className="box px-0" >
                        <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                        <img src="images/properties-city-06.jpg" className="card-img" alt="New York" />
                        <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                            <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">New York</a></h2>
                            <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$540.000 - $900.000</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="box px-0" >
                        <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                        <img src="images/properties-city-07.jpg" className="card-img" alt="Los Angeles" />
                        <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                            <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Los Angeles</a></h2>
                            <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$520.000 - $700.000</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="box px-0" >
                        <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                        <img src="images/properties-city-08.jpg" className="card-img" alt="San Jose" />
                        <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                            <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">San Jose</a></h2>
                            <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$340.000 - $600.000</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="box px-0">
                        <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                        <img src="images/properties-city-09.jpg" className="card-img" alt="Fort Worth" />
                        <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                            <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Fort Worth</a></h2>
                            <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$240.000 - $660.000</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="box px-0">
                        <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                        <img src="images/properties-city-10.jpg" className="card-img" alt="Kansas City" />
                        <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                            <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Kansas City</a></h2>
                            <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$380.000 - $680.000</span>
                            </p>
                        </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>  
    )
}
