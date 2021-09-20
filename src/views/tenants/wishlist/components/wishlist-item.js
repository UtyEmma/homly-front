import React from 'react'

const  WishlistItem = ({item, setShow, setDetails}) => {

    const details = {
        desc: item.desc,
        area: item.area,
        city: item.city,
        state: item.state,
        category: item.category,
        budget: item.budget,
        additional: item.additional,
        id: item.unique_id
    }

    const viewWishlist = () => {
        setDetails(details)
        setShow(true)
    }

    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 px-2 mb-2" style={{minHeight: '100%'}}>
            <div className="card h-100">
                <div className="card-header bg-transparent border-bottom-0 px-4 pt-4 pb-0">
                    <div className="badge badge-blue mb-2"><i className="fa fa-home-heart"></i></div>
                    <div className="d-flex justify-content-between">
                        <h2 className="fs-20 text-bold mb-2 text-truncate">
                            {item.desc}
                        </h2>
                    </div>
                    <p className="font-weight-600 text-gray-light mb-3">
                        <i className="fa fa-map-marker-alt mr-1"></i>
                        {item.area}, {item.city}, {item.state}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center ">
                        <span className="text-uppercase fs-14 font-weight-600">
                            <i className="fa fa-house mr-1"></i>
                            {item.category}
                        </span>
                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-1">&#8358; {item.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                    </div>

                    <div className="pt-4">
                        <p className="text-nowrap text-truncate" >{item.additional.split(" ").splice(0,12).join(" ")+"..."}</p>
                    </div>
                </div>
                <div className="card-footer border-0 bg-transparent pt-3 pb-4 pb-3 d-flex justify-content-between">
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                        </li>
                    </ul>

                     <div className="col-6 d-flex justify-content-end px-0 pb-0 mb-0"> 
                        <button onClick={viewWishlist} className="btn btn-sm btn-outline-primary px-3">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;

