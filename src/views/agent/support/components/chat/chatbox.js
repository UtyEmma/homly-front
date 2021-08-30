import { Timer } from 'components/timer/timer'
import { CreateNewTicket, SendMessage } from 'providers/redux/_actions/support-actions'
import React, { createRef, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './chat.css'

export const ChatBox = ({chat, setChat}) => {

    const new_ticket = useSelector(state => state.new_ticket)
    const {loading, tickets} = new_ticket

    const send_message = useSelector(state => state.send_message)
    const {ticket} = send_message

    const chat_form = useRef(null)
    const chat_body = useRef()

    useEffect(() => {
        if (!chat) {
            setChatData(ticket)   
        }else if(ticket){
            setChatData(ticket)
        }
        setPositions()
    }, [ticket, chat])

    const dispatch = useDispatch()

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

    const setChatData = (ticket) => {
        chat && setChat(ticket)
    }

    const setPositions = () => {
        chat_form.current && chat_form.current.reset()
        if(chat_body.current){ 
            chat_body.current.scrollTop = chat_body.current.scrollHeight;
        }
    }

    return (
        <>
            {

                chat 

                &&

                <div style={{height: "100%"}}>
                    <div className="p-3 py-4 bg-gray-01 rounded" style={{height: "15%", boxSizing: "border-box"}} >
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                                <div>
                                    <h5 className="fs-14">{chat.ticket.title}</h5>
                                    <span className="badge badge-blue fs-6 text-capitalize">{chat.ticket.status}</span>
                                </div>

                                <div>
                                    <p className="fs-12">{chat.ticket.date}</p>
                                    {/* <Timer />S */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 chat-body py-3" ref={chat_body} style={{height: "70%"}}>
                        <div className="row">
                            <div className="col-8 offset-2 text-center">
                                <p className="lh-1 mb-1 fs-12">
                                    Intiated on <span className="font-weight-600"> {chat.ticket.date}</span>
                                </p>
                                <p className="fs-12 mb-1">Status - <span className="text-capitalize font-weight-600">{chat.ticket.status}</span></p>
                            </div>
                            {
                                chat.chats.length > 0

                                &&

                                chat.chats.map((chat, index) => {
                                    return (
                                        chat.sender === 'agent'

                                        ? 

                                        <div className="col-12 py-2 chat-item  chat-right" key={index}>
                                            <div className="col-10 bg-primary text-white p-3 float-right rounded">
                                                <p className="fs-14">
                                                    {chat.message}
                                                </p>
                                            </div>
                                            <div className="float-right">
                                                <small className="chat-meta">Sent by You | <span className="font-weight-600">{chat.time}</span> - <span className="font-weight-600">{chat.date}</span></small>
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
                                                <small className="chat-meta">Sent from Admin | <span className="font-weight-600">{chat.time}</span> - <span className="font-weight-600">{chat.date}</span></small>
                                            </div>
                                        </div>
                                        
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className="col-12 bg-gray-01 px-3 pt-3" style={{height: "15%"}}>
                        <form onSubmit={sendMessage} id="chat-form" ref={chat_form} >
                            <div className="col-12 rounded-pill bg-white border">
                            <div className="row">
                                    <div className="col-1 bg-white rounded-pill rounded-left px-0">
                                        <button type="button" className="btn mt-1">
                                        <i className="fa fa-paperclip fs-16"></i>
                                        </button>
                                    </div>
                                    <div className="col-10 px-0 mx-0">
                                        <textarea className="form-control bg-transparent border-0 shadow-none form-control-lg" rows={1} name="message" id="chat-message" placeholder="Your message here..." style={{resize: 'none'}} defaultValue={""} />
                                    </div>
                                    <div className="col-1 px-0 pr-2 d-flex align-items-center justify-content-center">
                                        <button className="btn" type="submit">
                                            <i className="fa fa-paper-plane fs-18 mr-1" ></i>
                                        </button>
                                    </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

// <div className="col-12">
//     <div className="container">
//         <form onSubmit={newTicket}>
//             <div className="form-group">
//                 <label>Ticket Title</label>
//                 <input type="text" placeholder="What are you complaining about ?" className="form-control form-control-lg border-0" name="title" />
//             </div>
//             <div className="form-group">
//                 <label>Your Message</label>
//                 <textarea type="text" placeholder="Your message goes here..." className="form-control form-control-lg border-0" name="message"></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Create Ticket</button>
//         </form>
//     </div>
// </div>