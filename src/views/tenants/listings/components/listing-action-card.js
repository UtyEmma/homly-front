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
