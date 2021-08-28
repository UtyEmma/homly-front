import React, { Component, useState } from 'react'
import Header from 'views/agent/layouts/shared/header'
import Sidebar from 'views/agent/layouts/shared/sidebar'
import { ChatBox } from './components/chat/chatbox'
import { NewTicketModal } from './components/tickets/new-ticket'
import { Tickets } from './components/tickets/tickets'

export const Support = ({agent}) => {

    const [titles, setTitles] = useState()
    const [chat, setChat] = useState()
    const [ticket, setTicket] = useState()

    const createTicket = () => {

    }

    return (
        <div className="wrapper dashboard-wrapper">
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar />

                <div className="page-content">
                    <Header agent={agent}/>
                    <main id="content" className="bg-gray-01">

                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 add-new-invoice">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <Tickets titles={titles} setTitles={setTitles} setChat={setChat}/>
                                        </div>

                                        <div className="col-xl-8 mb-6 mb-xl-0">
                                            <ChatBox chat={chat} setChat={setChat} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <NewTicketModal />
        </div>
    )
}  