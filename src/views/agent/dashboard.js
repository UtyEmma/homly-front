import React, { useEffect } from 'react'
import Sidebar from './layouts/shared/sidebar'
import Header from './layouts/shared/header'
import { Helmet } from 'react-helmet'
import { AddUsernameModal } from './layouts/dashboard/add-username-modal'
import { NotificationContainer } from './layouts/notifications/notification-container'

const AgentDashboard = ({agent, setIsLoading}) => {

    function capitalize(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
      }
    
    useEffect(() => {
        setIsLoading(false)
    })
    
    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>My Dashboard</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof Real Estate" />
                <meta name="twitter:description" content="Find the best accomodation around you" />
                <meta name="twitter:image" content="/images/homeid-social-logo.png" />
                <meta property="og:url" content="home-01.html" />
                <meta property="og:title" content="Home 01" />
                <meta property="og:description" content="Find the best accomodation around you" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/homeid-social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>
            <div className="d-flex flex-wrap flex-xl-nowrap">

                <Sidebar setIsLoading={setIsLoading} agent={agent} />

                <div className="page-content">
                    <Header setIsLoading={setIsLoading} agent={agent}/>
                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                                <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                                    <div className="mr-0 mr-md-auto">
                                        <h2 className="mb-0 text-heading fs-22 lh-15">How're you, { capitalize(agent.firstname)} </h2>
                                        {/* <p>What would you like to do, today?</p> */}
                                        {/* <p>How can i be of help, today?</p> */}
                                        {/* <p>Hope you're feeling pumped for todays business?</p> */}
                                        {/* <p>Are you ready to experience the future of real estate?</p> */}
                                        <p>What mega deals will we be closing, today?</p>
                                    </div>
                                    <div>
                                        <a href="/new-listing" className="btn btn-primary btn-lg">
                                        <span>Add New Property</span>
                                        <span className="d-inline-block ml-1 fs-20 lh-1"><svg className="icon icon-add-new"><use xlinkHref="#icon-add-new" /></svg></span>
                                        </a>
                                    </div>
                                </div>
                                {
                                    !agent.username

                                    &&
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="w-100 alert alert-primary">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-9">
                                                        <p className="fs-20 lh-12 fs-md-24 font-weight-600 mb-0">Your Account Set Up is Almost Complete</p>
                                                        <p className="fs-16">Please we need you to Provide a Username</p>
                                                    </div>

                                                    <div className="col-md-3">
                                                        <button className="btn btn-lg btn-primary" data-toggle="modal" data-target="#exampleModal">Create Username</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }
                                <div className="row">
                                <div className="col-sm-6 col-xxl-3 mb-6">
                                    <div className="card">
                                    <div className="card-body row align-items-center px-6 py-7">
                                        <div className="col-5">
                                        <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-blue badge-circle">
                                            <svg className="icon icon-1">
                                            <use xlinkHref="#icon-1" />
                                            </svg>
                                        </span>
                                        </div>
                                        <div className="col-7 text-center">
                                        <p className="fs-42 lh-12 mb-0">{agent.no_of_listings}</p>
                                        <p>Properties</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 col-xxl-3 mb-6">
                                    <div className="card">
                                    <div className="card-body row align-items-center px-6 py-7">
                                        <div className="col-5">
                                        <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-green badge-circle">
                                            <svg className="icon icon-2"><use xlinkHref="#icon-2" /></svg>
                                        </span>
                                        </div>
                                        <div className="col-7 text-center">
                                        <p className="fs-42 lh-12 mb-0 counterup" >{agent.views}</p>
                                        <p>Total views</p>
                                        </div>
                                    </div>
                                    </div>
                                </div> */}
                                <div className="col-sm-6 col-xxl-3 mb-6">
                                    <div className="card">
                                    <div className="card-body row align-items-center px-6 py-7">
                                        <div className="col-4">
                                        <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-yellow badge-circle">
                                            <svg className="icon icon-review"><use xlinkHref="#icon-review" /></svg>
                                        </span>
                                        </div>
                                        <div className="col-8 text-center">
                                        <p className="fs-42 lh-12 mb-0">{agent.no_reviews}</p>
                                        <p>Total Reviews</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xxl-3 mb-6">
                                    <div className="card">
                                    <div className="card-body row align-items-center px-6 py-7">
                                        <div className="col-5">
                                        <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-pink badge-circle">
                                            {/* <svg className="icon icon-heart"><use xlinkHref="#icon-heart" /></svg> */}
                                            <i className="fal fa-star"></i>
                                        </span>
                                        </div>
                                        <div className="col-7 text-center">
                                        <p className="fs-42 lh-12 mb-0">{agent.rating ? agent.rating : 1}/5</p>
                                        <p>Rating</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <NotificationContainer />

                                <div className="row">
                                <div className="col-xxl-8 mb-6">
                                    <div className="card px-7 py-6 h-100 chart">
                                    <div className="card-body p-0 collapse-tabs">
                                        <div className="d-flex align-items-center mb-5">
                                        <h2 className="mb-0 text-heading fs-22 lh-15 mr-auto">View statistics</h2>
                                        <ul className="nav nav-pills justify-content-end d-none d-sm-flex nav-pills-01" role="tablist">
                                            <li className="nav-item px-5 py-1">
                                            <a className="nav-link active bg-transparent shadow-none p-0 letter-spacing-1" id="hours-tab" data-toggle="tab" href="#hours" role="tab" aria-controls="hours" aria-selected="true">Hours</a>
                                            </li>
                                            <li className="nav-item px-5 py-1">
                                            <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1" id="weekly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Weekly</a>
                                            </li>
                                            <li className="nav-item px-5 py-1">
                                            <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1" id="monthly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="false">Monthly</a>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="tab-content shadow-none p-0">
                                        <div id="collapse-tabs-accordion">
                                            <div className="tab-pane tab-pane-parent fade show active px-0" id="hours" role="tabpanel" aria-labelledby="hours-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0" id="headingHours">
                                                <h5 className="mb-0">
                                                    <button className="btn collapse-parent font-size-h5 btn-block border shadow-none" data-toggle="collapse" data-target="#hours-collapse" aria-expanded="true" aria-controls="hours-collapse">
                                                    Hours
                                                    </button>
                                                </h5>
                                                </div>
                                                <div id="hours-collapse" className="collapse show collapsible" aria-labelledby="headingHours" data-parent="#collapse-tabs-accordion">
                                                <div className="card-body p-0 py-4">
                                                    <canvas className="chartjs" data-chart-options="[]" data-chart-labels="[&quot;05h&quot;,&quot;08h&quot;,&quot;11h&quot;,&quot;14h&quot;,&quot;17h&quot;,&quot;20h&quot;,&quot;23h&quot;]" data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[0,7,10,3,15,30,10],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,9,18,20,28,40,27],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                    </canvas>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane tab-pane-parent fade px-0" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0" id="headingWeekly">
                                                <h5 className="mb-0">
                                                    <button className="btn collapse-parent font-size-h5 btn-block collapsed border shadow-none" data-toggle="collapse" data-target="#weekly-collapse" aria-expanded="true" aria-controls="weekly-collapse">
                                                    Weekly
                                                    </button>
                                                </h5>
                                                </div>
                                                <div id="weekly-collapse" className="collapse collapsible" aria-labelledby="headingWeekly" data-parent="#collapse-tabs-accordion">
                                                <div className="card-body p-0 py-4">
                                                    <canvas className="chartjs" data-chart-options="[]" data-chart-labels="[&quot;Mar 12&quot;,&quot;Mar 13&quot;,&quot;Mar 14&quot;,&quot;Mar 15&quot;,&quot;Mar 16&quot;,&quot;Mar 17&quot;,&quot;Mar 18&quot;,&quot;Mar 19&quot;]" data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[0,13,9,3,15,15,10,0],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,20,18,15,28,33,27,10],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                    </canvas>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane tab-pane-parent fade px-0" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0" id="headingMonthly">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-block collapse-parent collapsed border shadow-none" data-toggle="collapse" data-target="#monthly-collapse" aria-expanded="true" aria-controls="monthly-collapse">
                                                    Monthly
                                                    </button>
                                                </h5>
                                                </div>
                                                <div id="monthly-collapse" className="collapse collapsible" aria-labelledby="headingMonthly" data-parent="#collapse-tabs-accordion">
                                                <div className="card-body p-0 py-4">
                                                    <canvas className="chartjs" data-chart-options="[]" data-chart-labels="[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;]" data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[2,15,20,10,15,20,10,0,20,30,10,0],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,20,18,15,28,33,27,10,20,30,10,0],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                    </canvas>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <AddUsernameModal setIsLoading={setIsLoading} agent={agent} />
        </div>
    )
 }

 export default AgentDashboard;
