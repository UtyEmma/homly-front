import React from 'react'

export default function SimilarListings() {
    return (
        <>
            <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Similar Homes You May Like</h4>
                <div className="slick-slider" data-slick-options="{&quot;slidesToShow&quot;: 2, &quot;dots&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;:2,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:2}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}]}">
                <div className="box">
                    <div className="card shadow-hover-2">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-38.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                            <span className="badge mr-2 badge-primary">for Sale</span>
                        </div>
                        <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-images" /><span className="pl-1">9</span>
                            </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5-2" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square" /></svg>2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage" /></svg>1 Gr
                        </li>
                        </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent" data-toggle="tooltip" title="Wishlist"><i className="fas fa-heart" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card shadow-hover-2">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-01.jpg" alt="Garden Gingerbread House" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                            <span className="badge mr-2 badge-orange">featured</span>
                            <span className="badge mr-2 badge-indigo">for Sale</span>
                        </div>
                        <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-images" /><span className="pl-1">9</span>
                            </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Garden Gingerbread House</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5-2" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square" /></svg>2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage" /></svg>1 Gr
                        </li>
                        </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card shadow-hover-2">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-02.jpg" alt="Affordable Urban House" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                            <span className="badge mr-2 badge-primary">for Sale</span>
                        </div>
                        <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-images" /><span className="pl-1">9</span>
                            </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5-2" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square" /></svg>2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage" /></svg>1 Gr
                        </li>
                        </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>  
        </>
    )
}
