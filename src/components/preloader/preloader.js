import React from 'react'
import './preloader.css'

export default function Preloader({loading}) {
    return (
        <>
        {
            loading && <div className="spinner-wrapper">
                <div className="spinner">
                    <div className="bounce bounce1"></div>
                    <div className="bounce bounce2"></div>
                    <div className="bounce bounce3"></div>
                </div>
            </div>
        }
        </>
    )
}
