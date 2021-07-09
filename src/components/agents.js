import React, {Component} from 'react'
import NavBar from './layouts/shared/layouts/nav-bar'
import Footer from './layouts/shared/footer'

export default class Agents extends Component {

    render(){
        return (
            <div>
                <NavBar />
    
                <main id="content">
                    <section className="position-relative pb-15 pt-2 page-title bg-patten bg-secondary">
                        <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-light mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Agents</li>
                            </ol>
                        </nav>
                        <h1 className="fs-32 mb-0 text-white font-weight-600 text-center pt-11 mb-5 lh-17 mxw-478" data-animate="fadeInDown">Meet The Agents
                            Transforming Real Estate </h1>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                        <div className="mt-n8 bg-white px-6 py-3 shadow-sm-2 rounded-lg form-search-02 position-relative z-index-3">
                            <form className="d-none row d-md-flex flex-wrap align-items-center">
                            <div className="col-md-5 mb-3 mb-md-0">
                                <div className="row">
                                <div className="form-group mb-3 mb-md-0 col-md-6">
                                    <label htmlFor="language" className="mb-0 lh-1 text-uppercase fs-14 letter-spacing-093">Language</label>
                                    <select className="form-control form-control-sm font-weight-600  shadow-0 bg-white selectpicker" name="language" id="language" data-style="bg-white pl-0 text-dark rounded-0">
                                    <option>Select</option>
                                    <option>English</option>
                                    <option>France</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3 mb-md-0 col-md-6">
                                    <label htmlFor="region" className="mb-0 lh-1 text-uppercase fs-14 letter-spacing-093">Region</label>
                                    <select className="form-control font-weight-600 pl-0 bg-white selectpicker form-control-sm" name="region" id="region" data-style="bg-white pl-0 text-dark rounded-0">
                                    <option>Austin</option>
                                    <option>Boston</option>
                                    <option>Chicago</option>
                                    <option>Denver</option>
                                    <option>Los Angeles</option>
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="form-group mb-3 mb-lg-0 col-md-5">
                                <label htmlFor="search" className="mb-0 lh-1 text-uppercase fs-14 letter-spacing-093">Search</label>
                                <div className="input-group input-group-sm">
                                <input type="text" id="search" className="form-control pl-0 rounded-0 bg-white" placeholder="Search by agent’s name…" name="search" />
                                <div className="input-group-append ml-0">
                                    <span className="fs-18 input-group-text bg-white rounded-0"><i className="fal fa-search" /></span>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-2 pl-0">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Search
                                </button>
                            </div>
                            </form>
                            <form className="d-block d-md-none">
                            <div className="d-flex align-items-center">
                                <a className="text-body hover-primary d-inline-block fs-24 lh-1 mr-5" data-toggle="collapse" href="#collapseMobileSearch" role="button" aria-expanded="false" aria-controls="collapseMobileSearch">
                                <i className="fal fa-cog" />
                                </a>
                                <div className="input-group">
                                <input type="text" className="form-control pl-0 rounded-0 bg-white" placeholder="Search by agent’s name…" name="search" />
                                <div className="input-group-append ml-0">
                                    <span className="fs-18 input-group-text bg-white rounded-0"><i className="fal fa-search" /></span>
                                </div>
                                </div>
                            </div>
                            <div className="collapse" id="collapseMobileSearch">
                                <div className="card card-body border-0 px-0">
                                <div className="form-group mb-3">
                                    <label htmlFor="language-01" className="mb-0 lh-1 text-uppercase fs-14 letter-spacing-093">Language</label>
                                    <select className="form-control form-control-sm font-weight-600  shadow-0 bg-white selectpicker" name="language" id="language-01" data-style="bg-white pl-0 text-dark rounded-0">
                                    <option>Select</option>
                                    <option>English</option>
                                    <option>France</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="region-01" className="mb-0 lh-1 text-uppercase fs-14 letter-spacing-093">Region</label>
                                    <select className="form-control font-weight-600 pl-0 bg-white selectpicker form-control-sm" name="region" id="region-01" data-style="bg-white pl-0 text-dark rounded-0">
                                    <option>Austin</option>
                                    <option>Boston</option>
                                    <option>Chicago</option>
                                    <option>Denver</option>
                                    <option>Los Angeles</option>
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Search
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </section>
                    <section className="pt-12 pb-13">
                        <div className="container">
                        <div className="row align-items-sm-center mb-6">
                            <div className="col-sm-6 mb-6 mb-sm-0">
                            <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">45</span> agents available for
                                you
                            </h2>
                            </div>
                            <div className="col-sm-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="input-group border rounded input-group-lg w-auto mr-3">
                                <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sort
                                    by:</label>
                                <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0" id="inputGroupSelect01" name="sortby">
                                    <option selected>Alphabet</option>
                                    <option value={1}>Random</option>
                                    <option value={1}>Rating</option>
                                    <option value={1}>Number of property</option>
                                </select>
                                </div>
                                <div className="d-none d-md-block list-layout">
                                <a className="fs-sm-18 text-muted" href="agents-list.html">
                                    <i className="fas fa-list" />
                                </a>
                                <span className="fs-sm-18 text-muted ml-5 active">
                                    <i className="fa fa-th-large" />
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-1.jpg" alt="Max Kordek" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Max Kordek</a>
                                <p className="mb-2">Real Estate Broker</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-13.jpg" alt="Jennie Alexander" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Jennie Alexander</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-10.jpg" alt="Harriett Wallace" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Harriett Wallace</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-14.jpg" alt="Trevor Reid" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Trevor Reid</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-15.jpg" alt="Ernest Davis" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Ernest Davis</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-16.jpg" alt="Essie Singleton" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Essie Singleton</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-17.jpg" alt="Garrett Chambers" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Garrett Chambers</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-18.jpg" alt="Ivan Owen" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Ivan Owen</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-19.jpg" alt="Cornelia Cannon" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Cornelia Cannon</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-20.jpg" alt="Esther Santiago" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Esther Santiago</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-21.jpg" alt="Joey Tribbiani" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Joey Tribbiani</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
                            <div className="card shadow-hover-xs-4 agent-3">
                                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                                    <img src="images/agent-22.jpg" alt="Cornelia Jackson" />
                                </a>
                                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Cornelia Jackson</a>
                                <p className="mb-2">Sales Excutive</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-6">
                                    <a href="/" className="text-muted hover-primary">
                                        <i className="fab fa-skype" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body text-center pt-2  px-0">
                                <a href="mailto:oliverbeddows@homeid.com" className="text-body">oliverbeddows@homeid.com</a>
                                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">123 900 68668</a>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                                </ul>
                                </div>
                                <div className="card-footer px-0 text-center hover-image border-0">
                                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">5</span>
                                    <span className="font-weight-500 mr-2">Listed Properties</span>
                                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <nav className="mt-4">
                            <ul className="pagination rounded-active justify-content-center">
                            <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-left" /></a></li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item active"><a className="page-link" href="/">2</a></li>
                            <li className="page-item d-none d-sm-block"><a className="page-link" href="/">3</a></li>
                            <li className="page-item">...</li>
                            <li className="page-item"><a className="page-link" href="/">6</a></li>
                            <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-right" /></a></li>
                            </ul>
                        </nav>
                        <div className="text-center mt-2">8-14 of 45 Results</div>
                        </div>
                    </section>
                    </main>
    
    
                <Footer />
            </div>
        )

    }
}