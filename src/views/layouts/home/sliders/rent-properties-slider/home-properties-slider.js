import React from 'react'
import { Link } from 'react-router-dom';
import { SliderProperties } from '../slider-properties';

export const HomePropertiesSlider = () => {

    return (
        <section className="py-lg-12 my-lg-1 py-11">
            <div className="container container-xxl">
                <div className="row">
                <div className="col-md-6">
                    <h2 className="text-heading">Properties For Sale</h2>
                    <span className="heading-divider" />
                    <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
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
