import React from 'react'

export default function ListingStats() {
    return (
        <>
           <section className="mt-2 pb-4 px-6 pt-6 bg-white rounded-lg">
                <div className="chart">
                <div className="card border-0">
                    <div className="card-body p-0 collapse-tabs">
                    <div className="d-flex align-items-center mb-5">
                        <h2 className="mb-0 text-heading fs-22 lh-15 mr-auto">Page statistics</h2>
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
                                <canvas className="chartjs" data-chart-options="[]" data-chart-labels="[&quot;05h&quot;,&quot;08h&quot;,&quot;11h&quot;,&quot;14h&quot;,&quot;17h&quot;,&quot;20h&quot;,&quot;23h&quot;]" data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[0,7,10,3,15,30,10],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,9,18,20,28,40,27],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
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
            </section>  
        </>
    )
}
