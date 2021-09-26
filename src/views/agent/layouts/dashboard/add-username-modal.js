import { UpdateAgentProfile } from 'providers/redux/_actions/agent-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddUsernameModal = ({agent, setIsLoading}) => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user_data)
    const {loading} = useSelector(state => state.update_agent_profile)

    const updateUsername = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        data.append('firstname', agent.firstname)
        data.append('lastname', agent.lastname)
        data.append('email', agent.email)
        data.append('title', agent.title)
        dispatch(UpdateAgentProfile(token, data))
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

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