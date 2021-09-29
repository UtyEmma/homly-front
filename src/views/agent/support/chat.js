import React, { useEffect, useState } from 'react'
import Header from 'views/agent/layouts/shared/header'
import Sidebar from 'views/agent/layouts/shared/sidebar'
import { Helmet } from 'react-helmet'
import { ChatBox } from './components/chat/chatbox'
import { ChatSideBar } from './components/chat/chat-sidebar'
import {    useParams } from 'react-router-dom'
import { FetchMessages } from 'providers/redux/_actions/support-actions'
import { useDispatch, useSelector } from 'react-redux'

export const Chat = ({agent, setIsLoading}) => {

    const dispatch = useDispatch()
    const [chat, setChat] = useState()

    const {id} = useParams()

    const messages = useSelector(state => state.messages)
    const {loading, ticket} = messages

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    useEffect(() => {
       dispatch(FetchMessages(token, id))
    }, [dispatch, id, token])

    useEffect(() => {
        ticket && setChat(ticket)
    }, [ticket])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])


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
                                <h2 className="mb-0 text-heading fs-22 lh-15">Support Center</h2>
                                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                            </div>

                            <div className="col-12 card" >
                                <div className="row" style={{height: '700px'}}>
                                    {
                                        chat 

                                        &&

                                        <ChatSideBar  chat={chat.chat} ticket={chat.ticket} />
                                    }

                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-12 bg-white px-0" style={{height: "700px"}}>
                                                {
                                                    chat 

                                                    &&

                                                    <ChatBox chat={chat} setChat={setChat} setIsLoading={setIsLoading} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}  