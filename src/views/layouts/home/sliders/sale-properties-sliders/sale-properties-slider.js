import React from 'react'
import { SliderProperties } from '../slider-properties'

export const SalePropertiesSlider = ({listings}) => {
    return (
        <section className="pb-lg-13 pb-11">
            <div className="container container-xxl">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-heading c-title fs-26 fs-md-48">Properties For Sale</h2>
                        <span className="heading-divider" />
                        <p className="mb-7 text-capitalize">Lease these properties for a set time frame</p>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent rounded-lg mb-8">See all properties
                        <i className="far fa-long-arrow-right ml-1" />
                        </a>
                    </div>
                </div>
                    
                <SliderProperties listings={listings} />
            </div>
        </section>
    )
}
