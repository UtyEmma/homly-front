import React from 'react'
import './preloader.css'

export default function Preloader({loading}) {
    return (
        <>
        {
            loading && 
                
            <div>
                <div className="spinner-wrapper" style={{transition: 'all 2s ease-in-out'}} >
                    <div className="spinner">
                        <div className="bounce bounce1"></div>
                        <div className="bounce bounce2"></div>
                        <div className="bounce bounce3"></div>
                    </div>
                </div>
            </div>

        }
        </>
    )
}
