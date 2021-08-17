import React, { useEffect } from 'react'
import './chat.css'

export const ChatBox = ({chat, setChat}) => {

    useEffect(() => {
    }, [chat])

    return (
        <div className="card py-4">
            {

                chat 

                && 

                <>
                    <div className="card-body p-3">
                        <div className="chat-header p-3 bg-gray-01 rounded">
                            <h4>{chat.ticket.title}</h4>
                            <small>Initiated - {chat.ticket.date} | Status: {chat.ticket.status}</small>
                        </div>

                        <div className="col-12 chat-body py-3">
                            <div className="row">

                                {
                                    chat.chats.length > 0

                                    &&

                                    chat.chats.map((chat, index) => {
                                        return (
                                            chat.sender === 'agent'

                                            ? 

                                            <div className="col-12 py-2 chat-item chat-right ">
                                                <div className="col-10 bg-gray-01 p-3 float-right rounded">
                                                    <p>
                                                        {chat.message}
                                                    </p>
                                                </div>
                                                <div className="float-right">
                                                    <small classname="chat-meta">Sent by You | {chat.time} - {chat.date}</small>
                                                </div>
                                            </div>

                                            :

                                            <div className="col-12 py-2 chat-item chat-left d-flex flex-column justify-content-left">
                                                <div className="col-10 bg-gray-01 p-3 rounded chat-text">
                                                    <p>
                                                        {chat.message}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p classname="chat-meta fs-14">Sent from Admin | {chat.time} - {chat.date}</p>
                                                </div>
                                            </div>
                                            
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                    <div className="col-12 chat-box-footer px-5">
                        <div className="col-md-12">
                            <p className="text-heading">Send a Message</p>
                        </div>

                        <div className="col-md-12">
                            <textarea className="form-control border-0 shadow-none form-control-lg" name="note" id="invoice-detail-notes" placeholder="Notes - For example, &quot;Thank you for doing business with us&quot;" style={{height: '88px'}} defaultValue={""} />
                        </div>

                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-send btn-block">Send</button>
                            <button type="button" className="btn btn-default btn-block"><i className="fa fa-file"></i></button>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}