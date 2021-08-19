import React from 'react'
import GalleryDisplay from '../gallery-display'

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

                    <GalleryDisplay images={images} title={title} />
 
                </div>
            </div>
        </section>
    )
}
