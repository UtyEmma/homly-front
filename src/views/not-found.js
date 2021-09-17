import React from 'react'
import { Link } from 'react-router-dom'
import { SearchForm } from './layouts/components/search/search-form'


export default function NotFound () {

    return (
        <div>
            <main id="content">
                <section className="pt-9 pt-md-5 pb-10 pb-md-5">
                    <div className="container">
                        <div className="text-center mb-15">
                        <img src="/images/page-404.jpg" alt="Page 404" className="mb-5" />
                        <h1 className="/fs-30 lh-16 text-dark font-weight-600 mb-5">Oops! That page can’t be found.</h1>
                        <p className="mb-8">It looks like nothing was found at this location. Maybe try one of the links below or a
                            search?</p>
                        <div className="col-md-8 offset-md-2">
                            <SearchForm classes="mxw-670 shadow-xxs-2" />
                        </div>
                        
                        <p className="mt-5">or go back to <span><Link to="/" >Home Page</Link></span></p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
