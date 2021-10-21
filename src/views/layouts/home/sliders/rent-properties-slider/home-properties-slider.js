import React from 'react'
import { Link } from 'react-router-dom';
import { SliderProperties } from '../slider-properties';

export const HomePropertiesSlider = () => {

    return (
        <section className="py-lg-12 my-lg-1 py-11">
            <div className="container container-xxl">
                <div className="row">
                <div className="col-md-6">
                    <h2 className="text-heading c-title">Properties For Sale</h2>
                    <span className="heading-divider" />
                    <p className="mb-7">Take on full ownership of these properties</p>
                </div>
                <div className="col-md-6 text-md-right">
                    <Link to="/listings" className="btn btn-lg text-secondary btn-accent rounded-lg mb-8">
                    See all properties
                    <i className="far fa-long-arrow-right ml-1" />
                    </Link>
                </div>
            </div>


            <SliderProperties />

        </div>
    </section>
    )
}
