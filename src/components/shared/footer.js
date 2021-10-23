import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-dark pt-8 pb-6 footer text-muted position-relative">

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <a className="d-block mb-2" href="/">
                            <img src="/images/logo/white.png" alt="Bayof" width="156px" height="40px" />
                        </a>
                        <div className="lh-26 font-weight-500">
                            <p className="mb-0 lh-184 mb-5">We believe property deals shouldn't take <br/> months to be processed.</p>
                            <a className="d-block text-lighter hover-white" href="mailto:info@bayof.co">info@bayof.co</a>
                            <a className="d-block text-lighter  hover-white" href="tel:+2348183175686">+234 818 3175 686</a>
                            <a className="d-block text-lighter hover-white" href="https://www.bayof.co">www.bayof.co</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">Popular Searches</h4>
                        
                        <ul className="list-group list-group-flush list-group-no-border">
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Property for Rent</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/listings" className="text-muted lh-26 font-weight-500 hover-white">Property for Sale</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/agents" className="text-muted lh-26 font-weight-500 hover-white">Available Agents</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/signup" className="text-muted lh-26 font-weight-500 hover-white">Join our community</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="/login" className="text-muted lh-26 font-weight-500 hover-white">Sign In</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
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
                    </div> */}

                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">Sign Up for Our Newsletter</h4>
                        
                        <p className="font-weight-500 text-muted lh-184">Lorem ipsum dolor sit amet, consecte tur cing elit.
                        Suspe ndisse suscipit sagittis </p>

                        <form id="">
                            <div className="input-group input-group-lg mb-6">
                                {/* <input type="text" name="email" required className="form-control bg-white shadow-none border-0 z-index-1" placeholder="Your email" /> */}
                                
                                <div className="input-group-append">
                                    <Link to="https://bayof.substack.com/p/coming-soon">
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Subscribe now</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-0">
                                <a href="https://twitter.com/BayofC" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-twitter" /></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="https://instagram.com/bayofhq" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-instagram" /></a>
                            </li>
                            {/* <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-skype" /></a>
                            </li> */}
                            {/* <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i className="fab fa-linkedin-in" /></a>
                            </li> */}
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
                        © 2021 BAYOF. All Rights Reserved
                    </p>
                </div>
            </div>

        </footer>
    )
}
