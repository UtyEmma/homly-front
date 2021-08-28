import { CreateNewTicket, SendMessage } from 'providers/redux/_actions/support-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './chat.css'

export const ChatBox = ({chat, setChat}) => {

    useEffect(() => {
    }, [chat])

    const dispatch = useDispatch()

    const new_ticket = useSelector(state => state.new_ticket)
    const {loading, tickets } = new_ticket

    // const new_chat = useSelector(state => state.send_message)
    // const {ticket} = new_chat

    const sendMessage = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('issue_id', chat.ticket.unique_id)
        dispatch(SendMessage(formData));
    }

    const newTicket = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        dispatch(CreateNewTicket(formData));
    }

    return (
        <div className="card py-4">
            {

                chat 

                ?

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

                                            <div className="col-12 py-2 chat-item chat-right" key={index}>
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

                                            <div className="col-12 py-2 chat-item chat-left d-flex flex-column justify-content-left" key={index}>
                                                <div className="col-10 bg-gray-01 p-3 rounded chat-text">
                                                    <p>
                                                        {chat.message}
                                                    </p>
                                                </div>
                                                <div>
                                                    <small classname="chat-meta fs-14">Sent from Admin | {chat.time} - {chat.date}</small>
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
                        <form onSubmit={sendMessage}>
                            <div className="row">
                                <div className="col-md-9">
                                    <textarea className="form-control border-0 shadow-none form-control-lg" name="message" id="invoice-detail-notes" placeholder="Notes - For example, &quot;Thank you for doing business with us&quot;" style={{height: '88px'}} defaultValue={""} />
                                </div>

                                <div className="col-md-3 d-flex align-items-end">
                                    <button type="submit" className="btn btn-primary btn-send btn-lg btn-block">Send</button>
                                    {/* <button type="button" className="btn btn-default btn-block"><i className="fa fa-file"></i></button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </>

                :

                <div className="col-12">
                    <div className="container">
                        <form onSubmit={newTicket}>
                            <div className="form-group">
                                <label>Ticket Title</label>
                                <input type="text" placeholder="What are you complaining about ?" className="form-control form-control-lg border-0" name="title" />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea type="text" placeholder="Your message goes here..." className="form-control form-control-lg border-0" name="message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Ticket</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}