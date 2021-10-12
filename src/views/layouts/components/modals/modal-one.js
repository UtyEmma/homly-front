import React from 'react'

export default function ModalOne({header, children, id, title, action, action_desc, footer, height}) {
    return (
        <div className="modal fade" style={{height: height}} id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                {header && <ModalHeader title={title} />}
                <div className="modal-body py-0 px-3">
                    {children}
                </div>
                {footer && <ModalFooter action={action} action_desc={action_desc} />}
                </div>
            </div>
        </div>
    )
}

function ModalHeader ({title}){
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

function ModalFooter({action, action_desc}){
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-text" data-dismiss="modal">Close</button>
            <button type="button" onClick={action} className="btn btn-primary">{action_desc}</button>
        </div>
    )
}
