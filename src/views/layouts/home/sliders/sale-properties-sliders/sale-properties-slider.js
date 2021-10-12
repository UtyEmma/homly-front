import React from 'react'
import { SliderProperties } from '../slider-properties'

export const SalePropertiesSlider = () => {
    return (
        <section className="pb-lg-13 pb-11">
            <div className="container container-xxl">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-heading">Properties For Rent</h2>
                        <span className="heading-divider" />
                        <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent rounded-lg mb-8">See all properties
                        <i className="far fa-long-arrow-right ml-1" />
                        </a>
                    </div>
                </div>
                    
                <SliderProperties />
            </div>
        </section>
    )
}
