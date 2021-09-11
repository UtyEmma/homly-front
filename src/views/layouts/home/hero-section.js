import React from 'react'
import { useHistory } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

export default function HeroSection() {

    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        history.push(`/search?keyword=${formData.get('keyword')}`)
    }

    return (
        <section>
            <div style={{ backgroundImage: `url('images/bg-slider-05.jpg')`, }} className="py-lg-17 py-11 bg-cover hero-cover">
            <ScrollAnimation animateIn="zoomIn" className="container mt-lg-9" >
                <p className="mb-5 text-white text-center fs-md-22 fs-18 font-weight-600">Find Your Dream Home</p>
                <h2 className="text-white text-center display-2 font-weight-light mb-10">Searching for the Best Places</h2>
                <div className="mxw-670 position-relative z-index-2">
                <form className="d-flex" onSubmit={handleSearch}>
                    <div className="position-relative w-100">
                    <i className="far fa-search text-dark fs-18 position-absolute pl-4 pos-fixed-left-center" />
                    <input type="text" name="keyword" className="rounded-bottom-right-lg w-100 pl-8 py-4 bg-white border-0 fs-13 font-weight-500 text-gray-light rounded-0 lh-17" placeholder="Enter an address, neighborhood" />
                    </div>
                    <button type="submit" className="btn btn-primary fs-16 font-weight-600 rounded-left-0 rounded-lg">
                    Search
                    </button>
                </form>
                </div>
            </ScrollAnimation>
            </div>
        </section>
    )
}
