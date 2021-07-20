import React from 'react'

export default function ListingGallery({images, title}) {
    return (
        <section className="bg-white shadow-5 pb-1">
            <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-3">
                <li className="breadcrumb-item fs-12 letter-spacing-087">
                    <a href=".">Home</a>
                </li>
                <li className="breadcrumb-item fs-12 letter-spacing-087">
                    <a href="listing-grid-with-left-filter.html">Listing</a>
                </li>
                <li className="breadcrumb-item fs-12 letter-spacing-087 active">{title}</li>
                </ol>
            </nav>
            <div className="galleries position-relative" >
                <div className="position-absolute pos-fixed-top-right z-index-3">
                <ul className="list-inline pt-4 pr-5">
                    <li className="list-inline-item mr-2">
                    <a href="#" data-toggle="tooltip" title="true" className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle" data-original-title="Favourite">
                        <i className="far fa-heart" /></a>
                    </li>
                    <li className="list-inline-item mr-2">
                    <button type="button" className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none" data-container="body" data-toggle="popover" data-placement="top" data-html="true" data-content=" <ul class=&quot;list-inline mb-0&quot;>
                    <li class=&quot;list-inline-item&quot;>
                        <a href=&quot;#&quot; class=&quot;text-muted fs-15 hover-dark lh-1 px-2&quot;><i
                                                class=&quot;fab fa-twitter&quot;></i></a>
                    </li>
                    <li class=&quot;list-inline-item &quot;>
                        <a href=&quot;#&quot; class=&quot;text-muted fs-15 hover-dark lh-1 px-2&quot;><i
                                                class=&quot;fab fa-facebook-f&quot;></i></a>
                    </li>
                    <li class=&quot;list-inline-item&quot;>
                        <a href=&quot;#&quot; class=&quot;text-muted fs-15 hover-dark lh-1 px-2&quot;><i
                                                class=&quot;fab fa-instagram&quot;></i></a>
                    </li>
                    <li class=&quot;list-inline-item&quot;>
                        <a href=&quot;#&quot; class=&quot;text-muted fs-15 hover-dark lh-1 px-2&quot;><i
                                                class=&quot;fab fa-youtube&quot;></i></a>
                    </li>
                    </ul>
                    ">
                        <i className="far fa-share-alt" />
                    </button>
                    </li>
                    <li className="list-inline-item">
                    <a href="#" data-toggle="tooltip" title="true" className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle" data-original-title="Print">
                        <i className="far fa-print" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="slick-slider slider-for" data-slick-options="{&quot;slidesToShow&quot;: 1, &quot;autoplay&quot;:false,&quot;dots&quot;:false,&quot;arrows&quot;:false,&quot;asNavFor&quot;: &quot;.slider-nav&quot;}">
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href={images.[0].url} className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: `url(${images.[0].url})`}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-lg-4.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: 'url("images/single-property-lg-4.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-17.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: 'url("images/single-property-17.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-lg-3.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id='02' style={{backgroundImage: 'url("images/single-property-lg-3.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-7.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: 'url("images/single-property-7.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-18.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: 'url("images/single-property-18.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="item item-size-3-2">
                    <div className="card p-0 hover-change-image">
                        <a href="images/single-property-8.jpg" className="card-img" data-gtf-mfp="true" data-gallery-id="02" style={{backgroundImage: 'url("images/single-property-8.jpg")'}}>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="slick-slider slider-nav mt-1 mx-n1 arrow-haft-inner" data-slick-options="{&quot;slidesToShow&quot;: 6, &quot;autoplay&quot;:false,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;asNavFor&quot;: &quot;.slider-for&quot;,&quot;focusOnSelect&quot;: true,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;: 4,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 4,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false}}]}">
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-7.jpg" alt="Gallery 01" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-2.jpg" alt="Gallery 02" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-3.jpg" alt="Gallery 03" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-4.jpg" alt="Gallery 04" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-5.jpg" alt="Gallery 05" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-6.jpg" alt="Gallery 06" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                <div className="box pb-6 px-0">
                    <div className="bg-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                    <img src="images/single-property-sm-8.jpg" alt="Gallery 07" className="h-100 w-100 rounded-lg" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
