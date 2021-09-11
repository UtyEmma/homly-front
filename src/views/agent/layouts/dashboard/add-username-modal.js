import { UpdateAgentProfile } from 'providers/redux/_actions/agent-actions'
import React from 'react'
import { useDispatch } from 'react-redux'

export const AddUsernameModal = ({agent}) => {

    const dispatch = useDispatch()

    const updateUsername = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        data.append('firstname', agent.firstname)
        data.append('lastname', agent.lastname)
        data.append('email', agent.email)
        dispatch(UpdateAgentProfile(data))
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                    <div className="modal-body py-2">
                        <div className="">
                            <form className="form" onSubmit={updateUsername}>
                                <div className="w-100 text-dark">
                                    <div>
                                        <p className="fs-20 lh-12 fs-md-24 font-weight-600 mb-2">You are one step away from getting ready</p>
                                        <p className="fs-16">Please provide a Username</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input name="username" type="text" className="form-control form-control-lg" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}