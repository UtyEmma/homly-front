import React from 'react'

export default function ReviewsNotFound() {
    return (
        <div className="col-10 offset-1">
            <div className="row">
                <div className="card border-0 text-center py-2">
                    <div className="card-body px-md-15 py-4">
                        <img src="images/svg/homes.svg" alt="Reviews Not Found" className="img-fluid" />
                        <h3 className="card-title mt-5 text-heading">You do not have any reviews yet</h3>
                    </div>
                </div>
            </div>
        </div> 
    )
}
