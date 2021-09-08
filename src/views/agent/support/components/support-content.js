import { FetchMessages, FetchTickets } from 'providers/redux/_actions/support-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatBox } from './chat/chatbox'
import { NewTicketForm } from './tickets/new-ticket-form'

export const SupportCenterContent = ({chat, setChat, setTitles, setIsLoading}) => {
    return (
        <div className="col-md-8">
            <div className="row">
                <div className="col-12 bg-white px-0" style={{height: "600px"}}>
                    {
                        chat 

                        ?

                        <ChatBox chat={chat} setChat={setChat} setIsLoading={setIsLoading} />

                        :

                        <div className="h-100 bg-gray-04 d-flex align-items-center">
                            <div className="col-10 py-4 offset-1 bg-white rounded">
                                <div className="px-3">
                                    <h3 className="text-heading fs-24">How can we help you?</h3>
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
