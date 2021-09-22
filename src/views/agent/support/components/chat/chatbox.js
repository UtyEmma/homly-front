import { SendMessage } from 'providers/redux/_actions/support-actions'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './chat.css'

export const ChatBox = ({chat, setChat, setIsLoading}) => {

    const send_message = useSelector(state => state.send_message)
    const {loading, ticket} = send_message

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const chat_form = useRef(null)
    const chat_body = useRef()

    useEffect(() => {
        setPosition()
    }, [ticket])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    const dispatch = useDispatch()

    const sendMessage = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('issue_id', chat.ticket.unique_id)
        dispatch(SendMessage(token, formData));
    } 

    const setPosition = () => {
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

                <div style={{height: "100%"}} className="mb-10 py-md-0">
                    <div className="col-12 d-flex flex-column border-top border-md-0  align-items-center pt-3 bg-white text-center" 
                        style={{height: "10%", boxShadow: '0px 6px 10px -6px gray', zIndex: '9999'}}>
                        <p className="lh-1 mb-1 fs-12">
                            Intiated on <span className="font-weight-600">{chat.ticket.date}</span>
                        </p>
                        <p className="fs-12">Status - <span className="text-capitalize font-weight-600">{chat.ticket.status}</span></p>
                    </div>

                    <div className="col-12 chat-body rounded-right bg-gray-04 py-3" ref={chat_body} style={{height: "75%"}}>
                        <div className="row">
                            
                            {
                                chat.chats.length > 0

                                &&

                                chat.chats.map((chat, index) => {
                                    return (
                                        chat.sender === 'agent'

                                        ? 

                                        <div className="col-12 py-2 chat-item chat-right" key={index}>
                                            <div className="col-9 bg-primary text-white p-3 float-right chat-item-box-right">
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
                                            <div className="col-9 bg-white p-3 chat-item-box-left">
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

                        {

                            chat && chat.ticket && chat.ticket.status

                            &&

                            <div className="col-12 bg-white px-3 pt-3" style={{height: "15%"}}>
                                <form onSubmit={sendMessage} id="chat-form" ref={chat_form} >
                                    <div className="col-12 rounded-pill bg-white border">
                                        <div className="row">
                                            <div className="col-11 px-0 mx-0">
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

                        }
                </div>
            }
        </>
    )
}
