import React from 'react'

export function ReviewItem({reviews}) {
    return (
        <div className="card border-0 mb-4">
        <div className="card-body p-0 p-sm-8 p-4">
            <h3 className="fs-16 lh-2 text-heading mb-0 d-inline-block pr-4 border-bottom border-primary">{reviews.length} Reviews</h3>

                {
                    reviews.map((review) => {
                        return(
                            <div className="media border-top pt-7 pb-6 d-sm-flex d-block text-sm-left text-center">
                                <img src={review.avatar} alt="Danny Fox" className="mr-sm-8 mb-4 mb-sm-0" />
                                <div className="media-body">
                                    <div className="row mb-1 align-items-center">
                                    <div className="col-sm-6 mb-2 mb-sm-0">
                                        <h4 className="mb-0 text-heading fs-14">{review.name}</h4>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                                        <li className="list-inline-item mr-1">
                                            <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-1">
                                            <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-1">
                                            <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-1">
                                            <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        <li className="list-inline-item mr-1">
                                            <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <p className="mb-3 pr-xl-17">{review.review}</p>
                                    <div className="d-flex justify-content-sm-start justify-content-center">
                                    <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                                    <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Report User</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }            
                
        </div>
    </div>
    )
}
