import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentListingsNotFound() {
    return (
        <>
            <div className="col-12 p-5 py-15 px-md-10 bg-white">
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-center">
                        <img src="/images/svg/house-search.svg" alt="" />
                    </div>
                    <div className="col-md-6 rounded mt-3 mt-md-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                        <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">Seems you've not added any property... yet</h3>

                        <p className="fs-16 mt-3 mb-0">Dont panic, just click the button below let me get you started on making major deals</p>

                        <div className="">
                            <Link to="/new-listing" className="btn btn-lg btn-primary rounded-lg mt-6">
                                Add New Property <i className="far fa-long-arrow-right ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
