import React from 'react'
import { NewTicketForm } from './tickets/new-ticket-form'


export const SupportCenterContent = ({setTitles, setIsLoading, user}) => {
    return (
        <div className="col-md-7 ">
            <div className="row">
                <div className="col-12 bg-white px-0" style={{height: "600px"}}>
                    {
                        <div className="h-100 bg-gray-04 d-flex align-items-center">
                            <div className="col-10 py-4 offset-1 bg-white rounded">
                                <div className="px-md-3">
                                    <h3 className="text-heading fs-24">What do you need help with?</h3>
                                </div>
                                <NewTicketForm close={false} setTitles={setTitles} setIsLoading={setIsLoading}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
