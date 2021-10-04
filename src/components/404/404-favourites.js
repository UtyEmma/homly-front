import React from 'react'

export default function FavouritesNotFound() {
    return (
        <>
            <div className="col-xxl-3 col-lg-4 col-md-6 px-2 mb-2 " style={{minHeight: '100%'}}>
                <div className="card h-100">
                    <div className="card-body text-center border-0 py-5">
                        <img className="img-fluid" style={{maxWidth: '70%'}} alt="find home" src="images/svg/find-home.svg"  />
                        <h1 className="fs-22 text-center mt-2 text-bold" style={{lineHeight: '130%'}}>You have not added any property to favourites.</h1>
                        <a href="/listings" className="btn btn-primary mt-4 btn-block btn-lg fs-16">Go to Listings <i className="bi bi-chevron"></i></a>
                    </div>
                </div>
            </div>  
        </>
    )
}
