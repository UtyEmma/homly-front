import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark pt-8 pb-6 footer text-muted position-relative">

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <a className="d-block mb-2" href="/">
                            <img src="images/logo-white-primary.png" alt="HomeID" />
                        </a>
                        <div className="lh-26 font-weight-500">
                            <p className="mb-0">58 Howard Street #2 San Francisco</p>
                            <a className="d-block text-muted hover-white" href="mailto:contact@homeid.com">contact@homeid.com</a>
                            <a className="d-block text-lighter font-weight-bold fs-15 hover-white" href="tel:(+68)122109876">(+68)122109876</a>
                            <a className="d-block text-muted hover-white" href=".">www.homeid.com</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">Popular Searches</h4>
                        
                        <ul className="list-group list-group-flush list-group-no-border">
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Apartment for Rent</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Apartment Low to
                                hide</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Offices for Buy</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Offices for Rent</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">Quick links</h4>
                        
                        <ul className="list-group list-group-flush list-group-no-border">
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">Terms of Use</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">Privacy Policy</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">Contact Support</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 hover-white font-weight-500">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">Sign Up for Our Newsletter</h4>
                        
                        <p className="font-weight-500 text-muted lh-184">Lorem ipsum dolor sit amet, consecte tur cing elit.
                        Suspe ndisse suscipit sagittis </p>

                        <form id="">
                            <div className="input-group input-group-lg mb-6">
                                <input type="text" name="email" required className="form-control bg-white shadow-none border-0 z-index-1" placeholder="Your email" />
                                
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </form>
                        
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-twitter" /></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-skype" /></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-linkedin-in" /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-0 mt-md-10 row">
                    <ul className="list-inline mb-0 col-md-6 mr-auto">
                        <li className="list-inline-item mr-6">
                            <a href="#" className="text-muted lh-26 font-weight-500 hover-white">Terms of Use</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-muted lh-26 font-weight-500 hover-white">Privacy Policy</a>
                        </li>
                    </ul>

                    <p className="col-md-auto mb-0 text-muted">
                        © 2020 homeID. All Rights Reserved
                    </p>
                </div>
            </div>

        </footer>
    )
}
