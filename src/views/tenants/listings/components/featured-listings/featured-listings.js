import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function FeaturedListings({listings}) {
    const options = {
        slidesToShow: 1, 
        autoplay: true,
        dots: true,
        arrows: true,
    }
    return (
        <div>
            <Slider {...options}>

                {
                    listings.map((listing, index) => {
                        return (
                            <div className="box px-0" >
                                <div className="card border-0">
                                    <img src={listing.images[0]} style={{minHeight: '100%'}} className="card-img" alt={listing.title} />
                                    
                                    <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                        <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                        </div>
                                        <div className="px-2 pb-2">
                                            <a href={`listings/${listing.slug}`} className="text-white">
                                                <h5 className="card-title fs-16 lh-2 mb-0">{listing.title}</h5>
                                            </a>
    
                                            <p className="card-text text-gray-light mb-0 font-weight-500">{listing.address}, {listing.city}, {listing.state}</p>
        
                                            <p className="text-white mb-0">
                                                <span className="fs-17 font-weight-bold">&#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>/{listing.tenure}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        )
                    })
                }

            </Slider>            
        </div>
    )
}
