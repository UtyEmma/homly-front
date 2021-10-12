import React from 'react'

export default function ReviewsNotFound() {
    return (
        <div className="col-12 p-5 py-15 px-md-3 bg-white">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="/images/svg/homes.svg" alt="" />
                </div>
                <div className="col-md-6 rounded mt-3 mt-md-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                    <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">None of your clients have reviewed you... yet!</h3>

                    <p className="fs-16 mt-3 mb-0">Encourage your clients to leave reviews on your profile, this boosts your visibility and credibility</p>
                </div>
            </div>
        </div>
    )
}
