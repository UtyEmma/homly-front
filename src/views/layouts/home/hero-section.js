import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { SearchForm } from '../components/search/search-form'

export default function HeroSection() {

    return (
        <section>
            <div style={{ backgroundImage: `url('images/bg-slider-05.jpg')`, }} className="py-lg-17 py-11 bg-cover hero-cover">
            <ScrollAnimation animateIn="zoomIn" className="container mt-lg-9" >
                <p className="mb-5 text-white text-center fs-md-22 fs-18 font-weight-600">Find Your Dream Home</p>
                <h2 className="text-white text-center display-2 font-weight-light mb-10">Searching for the Best Places</h2>
                <div className="mxw-670 position-relative z-index-2">
                    <SearchForm />
                </div>
            </ScrollAnimation>
            </div>
        </section>
    )
}
