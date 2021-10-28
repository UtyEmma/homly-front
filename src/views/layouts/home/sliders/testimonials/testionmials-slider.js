import React from 'react'
import Slider from 'react-slick'

export const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        customPaging:  i => <button className="btn">{i + 1}/3</button>,
        prevArrow: <i className="fa fa-chevron-left"></i>,
        nextArrow: <i className="fa fa-chevron-right"></i>,
    }

    return (

        

        



        <div className="bg-accent px-3 pl-md-11 pr-md-10 pt-6 pb-7">
            <Slider className="custom-slider-1 mx-0" {...settings}  >
                <div className="box px-0">
                <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                    <div className="d-flex mb-6 align-items-end">
                        <h5 className="card-title fs-24 text-secondary mb-0">Great Job!</h5>
                        <div className="ml-auto opacity-2">
                        <img src="images/quote.png" alt="quote" />
                        </div>
                    </div>
                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                        I must say that, i'm impressed with the platform. <br/> Most especially, the feature where Housing Agents can update their social media handles; so clients can easily reach them.<br/> I just love it!
                    </p>
                    <div className="media align-items-center">
                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                        <img src="images/testimonial-1.png" alt="Oliver Beddows" />
                        </div>
                        <div className="media-body">
                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Oliver Beddows</p>
                        <p className="fs-15 lh-12 mb-0">/ Reporter, Insights</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="box px-0">
                <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                    <div className="d-flex mb-6 align-items-end">
                        <h5 className="card-title fs-24 text-secondary mb-0">This platform is lit... literally!</h5>
                        <div className="ml-auto opacity-2">
                        <img src="images/quote.png" alt="quote" />
                        </div>
                    </div>
                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                        Amongst other features, the speed at which the whole platform operates and responds is just WOW!<br/> Thumbs up guys.
                    </p>
                    <div className="media align-items-center">
                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                        <img src="images/testimonials/igbinoghene-miracle-project-manager.jpg" alt="Oliver Beddows" />
                        </div>
                        <div className="media-body">
                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Miracle, Igbinoghene</p>
                        <p className="fs-15 lh-12 mb-0">/ Project Manager</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="box px-0">
                <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                    <div className="d-flex mb-6 align-items-end">
                        <h5 className="card-title fs-24 text-secondary mb-0">Its very okay!</h5>
                        <div className="ml-auto opacity-2">
                        <img src="images/quote.png" alt="quote" />
                        </div>
                    </div>
                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                        Based on the features in the Agents dashboard, i'd say the user experience is clear and very intuitive... allowing Agents to operate as smoothly as possible.
                    </p>
                    <div className="media align-items-center">
                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                        <img src="images/testimonials/aneke-michael-software-developer.jpg" alt="Oliver Beddows" />
                        </div>
                        <div className="media-body">
                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Aneke, Michael</p>
                        <p className="fs-15 lh-12 mb-0">/ Software Developer</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Slider>
        </div>
    )
}
