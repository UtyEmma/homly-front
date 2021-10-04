import React from 'react'

export const MessageAgentModal = () => {
    return (
        <>
            <div className="modal fade" id="modal-messenger" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header border-0 pb-0">
                        <h4 className="modal-title text-heading" id="exampleModalLabel">Contact Form</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body pb-6">
                        <div className="form-group mb-2">
                        <input type="text" className="form-control form-control-lg border-0" placeholder="First Name, Last Name" />
                        </div>
                        <div className="form-group mb-2">
                        <input type="email" className="form-control form-control-lg border-0" placeholder="Your Email" />
                        </div>
                        <div className="form-group mb-2">
                        <input type="tel" className="form-control form-control-lg border-0" placeholder="Your phone" />
                        </div>
                        <div className="form-group mb-2">
                        <textarea className="form-control border-0" rows={4} defaultValue={"Hello, I'm interested in Villa Called Archangel"} />
                        </div>
                        <div className="form-group form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                        <label className="form-check-label fs-13" htmlFor="exampleCheck3">Egestas fringilla phasellus faucibus scelerisque eleifend donec.</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
                    </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
