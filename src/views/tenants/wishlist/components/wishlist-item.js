import React from 'react'

const  WishlistItem = ({item}) => {
    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 px-2 mb-2" style={{minHeight: '100%'}}>
            <div className="card h-100">
                <div className="card-header bg-transparent px-4 pt-4 pb-3">
                    <h2 className="fs-16 lh-2 mb-0" style={{textOverflow: 'ellipsis'}}>{item.desc}</h2>
                    <p className="font-weight-500 text-gray-light mb-3">{item.area} {item.city}, {item.state}</p>
                    
                    <div className="d-flex justify-content-between align-items-center pt-3">
                        <span className="badge badge-indigo text-capitalize">{item.category}</span>
                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-1">&#8358; {item.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                    </div>
                </div>
                <div className="card-footer bg-transparent pt-3 pb-4 pb-3 d-flex justify-content-between">
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                        </li>
                    </ul>

                     <div className="col-6 d-flex justify-content-end"> 
                        <button className="btn btn-sm hover hover-flash bg-gray-03 "><i className="fa fa-eye"></i></button> 
                        <button className="btn btn-sm hover hover-flash bg-gray-03 px-2 ml-2 "><i className="fa fa-trash-alt"></i></button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;

