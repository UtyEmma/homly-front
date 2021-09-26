import React, { useState } from 'react'
import { useRef } from 'react'
import { Overlay, OverlayTrigger, Popover, PopoverContent } from 'react-bootstrap'
import { EmailShareButton, FacebookShareButton, InstapaperShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

export const ListingShareBtn = ({listing}) => {

    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null)
    const ref = useRef(null)

    const handleClick = (e) => {
        setShow(!show)
        setTarget(e.target)
    }

    return (
        <div ref={ref}>
            <button className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none" onClick={handleClick}>                                
                <i className="far fa-share-alt" />
            </button>
            <Overlay show={show} target={target} transition placement="bottom" container={ref.current} >
                <Popover id="popover-contained" style={{width: '200px', height: '60px'}}>
                    <Popover.Content as="div" >
                        <div className="d-flex justify-content-between">
                            <FacebookShareButton url={window.location} quote={`Check out ${listing.title} on Bayof Real Estate`} hashtag="#bayof" className="">
                                    <i className="fab fa-facebook fs-26" style={{color: '#3b5998'}} ></i>
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location} hashtags={['#bayof', '#bayofrealestate']} >
                                <i className="fab fa-twitter fs-26 " style={{color: '#1da1f2'}}></i>
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location}  >
                                <i className="fab fa-whatsapp fs-26 " style={{color: '#128c7e'}} ></i>
                            </WhatsappShareButton>
                            <TelegramShareButton url={window.location} title={listing.title} style={{color: '#0088cc'}} >
                                <i className="fab fa-telegram-plane fs-26 " ></i>
                            </TelegramShareButton>
                            <EmailShareButton url={window.location}  >
                                <i className="fal fa-envelope fs-26 " style={{color: '#BB001B'}} ></i>
                            </EmailShareButton>
                        </div>
                    </Popover.Content>
                </Popover>
            </Overlay>   
        </div>
    )
}
