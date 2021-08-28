import Stepper from 'bs-stepper'
import React, { useEffect, useState } from 'react'

export const Onboarding = () => {
    const [stepper, setStepper] = useState();

    const handleSubmit = () => {}

    useEffect(() => {
        setStepper(new Stepper(document.getElementById('onboarding-stepper'), {
            linear: true,
            animation: true
        }));
    }, [])

    return (
        <>
            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 h-120">

                            <div className="card border-0">
                                <div className="card-body">
                                <div className="bs-stepper" id='onboarding-stepper'>

                                <div className="bs-stepper-header vertical" role="tablist">
                                    <div className="step" data-target="#property-info">
                                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="property-info" id="property-info-trigger">
                                            <span className="bg-primary bs-stepper-item"></span>
                                            <span className="bs-stepper-label">Personal Info</span>
                                        </button>
                                    </div>
                                    <div className="line" />
                                    <div className="step" data-target="#location-info">
                                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="location-info" id="location-info-trigger">
                                            <span className="bg-primary bs-stepper-item"></span>
                                            <span className="bs-stepper-label">Contact Info</span>
                                        </button>
                                    </div>
                                    <div className="line" />
                                    <div className="step" data-target="#extra-details">
                                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="extra-details" id="extra-details-trigger">
                                            <span className="bg-primary bs-stepper-item"></span>
                                            <span className="bs-stepper-label">Extra Details</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bs-stepper-content">
                                    <form className="form" onSubmit={handleSubmit} id="create_wishlist_form">
                                        <div id="property-info" className="content p-0" role="tabpanel" aria-labelledby="property-info-trigger" >
                                            <div className="row p-0">
                                                    
                                            </div>


                                            <div className='row d-flex justify-content-end'>
                                                    <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                                            </div>
                                        </div>

                                        <div id="location-info" className="content" role="tabpanel" aria-labelledby="location-info-trigger">
                                            <div className="row">

                                            </div>

                                                <div className='row d-flex justify-content-end'>
                                                    <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                                    <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                                                </div>
                                        </div>

                                        <div id="extra-details" className="content" role="tabpanel" aria-labelledby="extra-details-trigger">
                                            <div className="row">
                                            </div>
                                            
                                            <div className='row d-flex justify-content-end'>
                                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}
