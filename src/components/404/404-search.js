import React from 'react'
import { Link } from 'react-router-dom'

export const SearchNotFound = () => {
    return (
        <div className="col-12 p-5 py-15">
            <div className="row">
                <div className="col-md-4 offset-md-2 d-flex justify-content-center">
                    <img src="/images/svg/homes.svg" alt="" />
                </div>
                <div className="col-md-4 rounded mt-6 mt-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                    <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">No Properties match your Search Query</h3>

                    <p className="fs-15 mt-3 mb-0">Not to worry. You can try searching with state or the city you have in mind.</p>

                    <div className="">
                        <Link to="/listings" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">
                            See all properties<i className="far fa-long-arrow-right ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
