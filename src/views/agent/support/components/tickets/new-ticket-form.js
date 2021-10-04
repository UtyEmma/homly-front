import { MapFormErrors } from 'libraries/validation'
import { __ticket } from 'libraries/validation/schema/support-schema'
import { CreateNewTicket } from 'providers/redux/_actions/support-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Validator from 'validatorjs'

export const NewTicketForm = ({close, setShow, setIsLoading}) => {

    const dispatch = useDispatch()
    const [formErrors, setFormErrors] = useState({})
    
    const new_ticket = useSelector(state => state.new_ticket)
    const { loading, formError } = new_ticket

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const {rules, attributes} = __ticket

    const createTicket = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)

        validation.setAttributeNames(attributes);
        
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            dispatch(CreateNewTicket(token, data));
            hideNewTicketForm()
        }
    }

    const hideNewTicketForm = () => {
        setShow && setShow(false)
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])

    return (
        <>
            <form onSubmit={createTicket} method="post" >
                <div className="modal-body">
                    <div className="form-group">
                        <label>Ticket Title</label>
                        <input type="text" placeholder="Title" className="form-control form-control-lg border-0" name="title" />
                        <p className="text-danger fs-12 mt-1">{formErrors.title?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea type="text" placeholder="Your complaint..." className="form-control form-control-lg border-0" name="message"></textarea>
                        <p className="text-danger fs-12 mt-1">{formErrors.message?.message}</p>
                    </div>
                </div>
                <div className="modal-footer">
                    {close && <button type="button" className="btn btn-default" onClick={hideNewTicketForm}>Close</button>}
                    <button type="submit" className="btn btn-primary">Create Ticket</button>
                </div>
            </form>   
        </>
    )
}
