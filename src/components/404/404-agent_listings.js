import React from 'react'

export default function AgentListingsNotFound() {
    return (
        <>
            <div className="col-12 p-5 py-15 px-md-10 bg-white">
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-center">
                        <img src="/images/svg/house-search.svg" alt="" />
                    </div>
                    <div className="col-md-6 rounded mt-3 mt-md-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                        <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">It seems that you have not uploaded any property yet!</h3>

                        <p className="fs-16 mt-3 mb-0">Please click the button below to add a new Property to your account</p>

                        <div className="">
                            <a href="/new-listing" className="btn btn-lg btn-primary rounded-lg mt-6">
                                Add New Listing <i className="far fa-long-arrow-right ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
