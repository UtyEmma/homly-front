import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { SearchForm } from '../components/search/search-form'

export default function HeroSection() {

    return (
        <section>
            <div style={{ backgroundImage: `url('images/bg-slider-9.jpg')`, }} className="py-lg-17 py-11 bg-cover hero-cover">
            <ScrollAnimation animateIn="zoomIn" className="container mt-lg-9" >
                <p className="mb-5 text-white text-center fs-md-22 fs-18 font-weight-light">Global range of properties</p>
                <h2 className="text-white text-center display-2 font-weight-bold mb-10 text-capitalize">Complete property deals in days</h2>
                <div className="mxw-670 position-relative z-index-2">
                    <SearchForm />
                </div>
            </ScrollAnimation>
            </div>
        </section>
    )
}
