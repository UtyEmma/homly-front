import React from 'react'

export default function HeroSection() {

    const handleSearch = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        window.location.href = `/search?keyword=${formData.get('keyword')}`
    }

    return (
        <section>
            <div style={{ backgroundImage: `url( 'images/bg-slider-05.jpg')`, }} className="py-lg-17 py-11  bg-cover hero-cover">
            <div className="container mt-lg-9" data-animate="zoomIn">
                <p className="mb-5 text-white text-center fs-md-22 fs-18 font-weight-600">Find Your Dream Home</p>
                <h2 className="text-white text-center display-2 font-weight-light mb-10">Searching for the Best Places</h2>
                <div className="mxw-670 position-relative z-index-2">
                <input className="search-field" type="hidden" name="status" defaultValue="for-sale" data-default-value />
                <ul className="nav nav-pills property-search-status-tab">
                    <li className="nav-item" role="presentation">
                    <a className="nav-link btn shadow-none rounded-bottom-0 fs-13 letter-spacing-087 bg-dark-opacity-05 text-white hover-white text-uppercase bg-active-primary active" data-toggle="pill" data-value="for-sale" href="#" role="tab" aria-selected="true">
                        sale
                    </a>
                    </li>
                    <li className="nav-item" role="presentation">
                    <a className="nav-link btn shadow-none rounded-bottom-0 fs-13 letter-spacing-087 bg-dark-opacity-05 text-white hover-white bg-active-primary text-uppercase" data-toggle="pill" data-value="for-rent" href="#" role="tab" aria-selected="false">
                        rent
                    </a>
                    </li>
                </ul>
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
            </div>
            </div>
        </section>
    )
}
