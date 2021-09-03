import Preloader from 'components/preloader/preloader'
import React, { Component, useState } from 'react'
import Header from 'views/agent/layouts/shared/header'
import Sidebar from 'views/agent/layouts/shared/sidebar'
import { ChatBox } from './components/chat/chatbox'
import { SupportCenterContent } from './components/support-content'
import { SupportCenterSidebar } from './components/support-sidebar'
import { NewTicketModal } from './components/tickets/new-ticket'
import { Tickets } from './components/tickets/tickets'

export const Support = ({agent}) => {

    const [titles, setTitles] = useState()
    const [chat, setChat] = useState()
    const [isLoading, setIsLoading] = useState()

    return (
        <div className="wrapper dashboard-wrapper">
            <Preloader loading={isLoading} />
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar />

                <div className="page-content">
                    <Header agent={agent}/>
                    <main id="content" className="bg-gray-01">
                        <div className="px-4 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="mr-0 mr-md-auto">
                                <h2 className="mb-0 text-heading fs-22 lh-15">Support Center</h2>
                                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                            </div>
                            
                            <div className="col-12 card" >
                                <div className="row" style={{height: '600px'}}>
                                    <SupportCenterSidebar titles={titles} setTitles={setTitles} setIsLoading={setIsLoading} chat={chat} setChat={setChat} />
                                    <SupportCenterContent titles={titles} setTitles={setTitles} setIsLoading={setIsLoading} chat={chat} setChat={setChat} />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <NewTicketModal setTitles={setTitles} setIsLoading={setIsLoading} />
        </div>
    )
}  