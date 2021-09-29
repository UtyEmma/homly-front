import React, { useState } from 'react'
import ListingGrid from './listing-grid'
import ListingList from './listing-list'

export default function ListingContainer({listings, setParams, params, status}) {
    const [grid, setGrid] = useState(true)

    const toggleGrid = () => {
        if(!grid){
            setGrid(true)
        }
    }

    const toggleList = () => {
        if(grid){
            setGrid(false)
        }
    }

    return (
        <>
            <div className="row align-items-sm-center mb-6">    
                <div className="col-md-6">
                    <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{listings.length > 0 ? listings.length : 0}</span> properties
                        available for
                        you
                    </h2>
                </div>
                <div className="col-md-6 mt-6 mt-md-0">
                    <div className="d-flex justify-content-md-end align-items-center">
                        <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                            <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sortby:</label>
                            <select onChange={(e) => {setParams({...params, [e.target.name]: e.target.value})}} className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                <option defaultValue="" value="">Latest</option>
                                {/* <option value='views'>Most Viewed</option> */}
                                <option value='minprice'>Price(low to high)</option>
                                <option value='maxprice'>Price(high to low)</option>
                            </select>
                        </div>
                        <div className="d-none d-md-block">
                            <button className={`btn fs-sm-18 px-2 py-0 text-dark ${grid ? 'opacity-2' : '' }`} onClick={toggleList}>
                                <i className="fas fa-list" />
                            </button>
                            <button className={`btn fs-sm-18 px-2 py-0 text-dark ml-5 ${!grid ? 'opacity-2' : '' }`} onClick={toggleGrid}>
                                <i className="fa fa-th-large" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                     listings.map((listing, index) => (    
                            grid ? <ListingGrid status={status} listing={listing} key={index}/> : 
                                        <ListingList status={status} listing={listing} key={index}/>
                    ))
                 }
            </div>
            <nav className="pt-6">
                <ul className="pagination rounded-active justify-content-center mb-0">
                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                <li className="page-item">...</li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                </ul>
            </nav>
        </>
    )
}
