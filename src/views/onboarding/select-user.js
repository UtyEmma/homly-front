import React from 'react'

export const SelectUser = () => {

    const loginAsAgent = () => {

    }

    const loginAsTenant = () => {

    }

    return (
        <div className="container" style={{height: '100vh'}}>
            <div className="row d-flex align-items-center justify-content-center" style={{height: '100%'}} >
                <div className="col-md-6">
                    <div className="col-12">
                        <h1 className="text-heading">How do you want to proceed?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="card col-md-6 p-5 py-9 mt-1 mb-5 border-0 text-center">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 my-2">
                            <div role="button" className="card p-5 bg-white h-100">
                                <div>
                                    <img src="/images/svg/property-agent.svg" />
                                </div>
                                <div className="my-3">
                                    <h4 className="fs-22 mb-3 font-weight-600">Agent</h4>
                                    <span className="alert alert-primary p-1 px-2 mt-3 rounded-pill">Proceed as an Agent <i className="fa fa-angle-double-right"></i></span>
                                </div>                            
                            </div>
                        </div>
                        <div className="col-md-6 my-2">
                            <div role="button" className="card p-5 bg-white h-100 d-flex flex-column align-items-center">
                                <div className="mt-8">
                                    <img src="/images/svg/tenant-user.svg" />
                                </div>
                                <div className="my-3 mt-5">
                                    <h4 className="fs-22 mb-3 font-weight-600">Tenant</h4>
                                    <span className="alert alert-primary p-1 px-2 mt-3 rounded-pill">Proceed as a Tenant <i className="fa fa-angle-double-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
