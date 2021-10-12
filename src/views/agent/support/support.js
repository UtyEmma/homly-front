import React, { useState } from 'react'
import Header from 'views/agent/layouts/shared/header'
import Sidebar from 'views/agent/layouts/shared/sidebar'
import { SupportCenterContent } from './components/support-content'
import { SupportCenterSidebar } from './components/support-sidebar'
import { NewTicketModal } from './components/tickets/new-ticket'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const Support = ({agent, isLoading, setIsLoading}) => {

    const [titles, setTitles] = useState()
    const [chat, setChat] = useState()
    const [show, setShow] = useState(false)
    const { user} = useSelector(state => state.user_data)

    
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>Support Center</title>
            </Helmet>

            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent} />

                <div className="page-content">
                    <Header agent={agent}/>
                    <main id="content" className="bg-gray-01">
                        <div className="px-4 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="mr-0 mr-md-auto">
                                <h2 className="mb-0 text-heading fs-22 lh-15 mb-2">Hi {capitalize(user.firstname)}, Welcome to our Support Center</h2>
                                {/* <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p> */}
                            </div>
                            
                            <div className="col-12 card" >
                                <div className="row" style={{height: '600px'}}>
                                    <SupportCenterSidebar setShow={setShow} titles={titles} setTitles={setTitles} setIsLoading={setIsLoading} chat={chat} setChat={setChat} />
                                    <SupportCenterContent titles={titles} setTitles={setTitles} setIsLoading={setIsLoading} chat={chat} setChat={setChat} user={user}/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <NewTicketModal show={show} setShow={setShow} setTitles={setTitles} setIsLoading={setIsLoading} />
            </div>
        </div>
    )
}  

export default Support;