import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const PropertiesSliderItem = () => {
    
    return (
        
        <ScrollAnimation className="box px-0" animateIn="fadeInUp">
            <div className="card border-0 hover-change-image">
                <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                    <img src="images/properties-grid-16.jpg" alt="Garden Gingerbread House" />
                    <div className="card-img-overlay d-flex flex-column justify-content-between">
                    <div>
                        <span className="badge mr-2 badge-primary">For Sale</span>
                    </div>
                    <ul className="list-inline mb-0 hover-image text-center">
                        <li className="list-inline-item">
                        <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                            <i className="fas fa-exchange-alt" />
                        </a>
                        </li>
                    </ul>
                    <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                        <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                        </li>
                        <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                        </li>
                        <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="card-body p-0">
                    <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Garden Gingerbread House</a>
                    </h2>
                    <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                </div>
            </div>
        </ScrollAnimation>
    )
}