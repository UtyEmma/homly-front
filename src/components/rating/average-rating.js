import React from 'react'

export const AverageRating = ({rating, ratings}) => {
    return (
        <div className="card border-0 mb-4">
                <div className="card-body p-6">
                <div className="row">
                    <div className="col-sm-6 mb-6 mb-sm-0">
                    <h5 className="fs-16 lh-2 text-heading mb-6">
                        Avarage User Rating
                    </h5>
                    <p className="fs-40 text-heading font-weight-bold mb-6 lh-1">4.6 <span className="fs-18 text-gray-light font-weight-normal">/5</span></p>
                    <ul className="list-inline">
                        <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                        <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                        <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                        <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                        <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item bg-gray-04 text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                        <i className="fas fa-star" />
                        </li>
                    </ul>
                    </div>
                    <div className="col-sm-6">
                    <h5 className="fs-16 lh-2 text-heading mb-5">
                        Rating Breakdown
                    </h5>
                    <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                        <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <div className="text-muted px-1">60%</div>
                    </div>
                    <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                        <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <div className="text-muted px-1">40%</div>
                    </div>
                    <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                        <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                    </div>
                    <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                        <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                    </div>
                    <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                        <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                        </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                        <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
