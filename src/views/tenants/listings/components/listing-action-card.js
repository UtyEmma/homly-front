import React from 'react'

export default function ListingAction() {
    return (
        <>
            <aside className="col-lg-4 pl-xl-4 primary-sidebar sidebar-sticky" id="sidebar">
                <div className="primary-sidebar-inner">
                    <div className="card border-0 widget-request-tour bg-transparent">
                    <ul className="nav nav-tabs d-flex" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active px-3" data-toggle="tab" href="#schedule" role="tab" aria-selected="true">Schedule
                            A Tour</a>
                        </li>
                        <li className="nav-item" role="presentation">
                        <a className="nav-link px-3" data-toggle="tab" href="#request-info" role="tab" aria-selected="false">Request
                            Info</a>
                        </li>
                    </ul>
                    <div className="card-body px-sm-6 shadow-xxs-2 pb-5 pt-0 bg-white">
                        <form>
                        <div className="tab-content pt-1 pb-0 px-0 shadow-none">
                            <div className="tab-pane fade show active" id="schedule" role="tabpanel">
                            <div className="slick-slider calendar arrow-hide-disable mx-n1" data-slick-options="{&quot;slidesToShow&quot;: 5, &quot;autoplay&quot;:false,&quot;dots&quot;:false}">
                                <div className="box px-1 py-4">
                                <div className="card pointer active border-0 shadow-xxs-1" data-date="March 17, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Tue</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">17</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 18, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Wed</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">18</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 19, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Thur</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">19</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 20, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Fri</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">20</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 21, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Sat</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">21</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 22, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Sun</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">22</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-1 py-4">
                                <div className="card pointer border-0 shadow-xxs-1" data-date="March 23, 2020">
                                    <div className="card-body p-1 text-center">
                                    <p className="day fs-12 text-muted lh-2 mb-0">Mon</p>
                                    <p className="date fs-18 text-heading lh-173 mb-0 font-weight-bold">23</p>
                                    <p className="month fs-13 letter-spacing-087 mb-0">Mar</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <input type="hidden" className="date" name="date" defaultValue="March 17, 2020" />
                            <div className="form-group mb-2">
                                <div className="input-group input-group-lg bootstrap-timepicker timepicker">
                                <input type="text" className="form-control border-0 text-body shadow-none" placeholder="Choose a time" />
                                <div className="input-group-append input-group-addon">
                                    <button className="btn bg-input shadow-none fs-18 lh-1" type="button"><i className="fal fa-angle-down" /></button>
                                </div>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" className="form-control form-control-lg border-0" placeholder="First Name, Last Name" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" className="form-control form-control-lg border-0" placeholder="Your Email" />
                            </div>
                            <div className="form-group mb-4">
                                <input type="tel" className="form-control form-control-lg border-0" placeholder="Your phone" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Schedule A Tour</button>
                            <div className="form-group form-check mt-2 mb-0">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label fs-13" htmlFor="exampleCheck1">Egestas fringilla phasellus
                                faucibus
                                scelerisque
                                eleifend donec.</label>
                            </div>
                            </div>
                            <div className="tab-pane fade pt-5" id="request-info" role="tabpanel">
                            <div className="form-check d-flex align-items-center border-bottom pb-3 mb-3">
                                <input className="form-check-input" type="radio" name="agent" defaultValue="option1" />
                                <div className="form-check-label ml-2">
                                <div className="d-flex align-items-center">
                                    <a href="agent-details-1.html" className="d-block w-60px h-60 mr-3">
                                    <img src="images/agent-2.jpg" className="rounded-circle" alt="Oliver Beddows" />
                                    </a>
                                    <div>
                                    <a href="agent-details-1.html" className="d-block text-dark font-weight-500 lh-15 hover-primary">Oliver
                                        Beddows</a>
                                    <p className="mb-0 fs-13 mb-0 lh-17">Sales Excutive</p>
                                    <p className="mb-0 fs-13 mb-0 lh-17"><span>(+123)</span><span className="text-heading d-inline-block ml-2">1900 68668</span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-check d-flex align-items-center mb-6">
                                <input className="form-check-input" type="radio" name="agent" id="inlineRadio2" defaultValue="option2" />
                                <div className="form-check-label ml-2">
                                <div className="d-flex align-items-center">
                                    <a href="agent-details-1.html" className="d-block w-60px h-60 mr-3">
                                    <img src="images/agent-1.jpg" className="rounded-circle" alt="Max Kordex" />
                                    </a>
                                    <div>
                                    <a href="agent-details-1.html" className="d-block text-dark font-weight-500 lh-15 hover-primary">Max Kordex</a>
                                    <p className="mb-0 fs-13 mb-0 lh-17">Real estate broker</p>
                                    <p className="mb-0 fs-13 mb-0 lh-17"><span>(+123)</span><span className="text-heading d-inline-block ml-2">1900 68668</span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" className="form-control form-control-lg border-0" placeholder="First Name, Last Name" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" className="form-control form-control-lg border-0" placeholder="Your Email" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="tel" className="form-control form-control-lg border-0" placeholder="Your phone" />
                            </div>
                            <div className="form-group mb-4">
                                <textarea className="form-control border-0" rows={4} defaultValue={"Hello, I'm interested in Villa Called Archangel"} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
                            <div className="form-group form-check mt-2 mb-0">
                                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                <label className="form-check-label fs-13" htmlFor="exampleCheck2">Egestas fringilla phasellus
                                faucibus
                                scelerisque
                                eleifend donec.</label>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </aside>   
        </>
    )
}
