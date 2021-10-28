import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentNotFound() {
    return (
        <>
            <div className="col-12 p-5 pt-9">
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-center">
                        <img src="/images/svg/homes.svg" alt="" />
                    </div>
                    <div className="col-md-6 rounded mt-3 mt-md-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                    <h3 className="font-weight-bold mb-0 fs-22 fs-md-26 text-capitalize">Heyy there, dont panic. This might be an error.</h3>

                    <p className="fs-16 mt-3 mb-0">Please contact our support and report this or check back later.</p>

                        <div className="">
                            <Link to="/signup" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">
                                Sign up here <i className="far fa-long-arrow-right ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
