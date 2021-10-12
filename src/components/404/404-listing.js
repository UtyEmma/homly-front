import React from 'react'
import { Link } from 'react-router-dom'

export default function ListingNotFound({status}) {
    return (
        <>
        <div className="col-12 mt-md-9">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src="/images/svg/notfound.svg" alt="" />
                </div>
                <div className="rounded mt-6 p-5 text-center bg-light py-7">
                    <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">There are no available properties at the moment!</h3>

                    <p className="fs-16 mt-3 mb-0">Please check back later or register as an agent to list a property.</p>

                    <div className="">
                        {
                            !status || status === 'undefined'

                            &&

                            <Link to="/signup" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">
                                Register as an Agent<i className="far fa-long-arrow-right ml-1" />
                            </Link>

                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
