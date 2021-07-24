import React from 'react'

export default function ModalOne({header, children, id, title, action, action_desc, footer}) {
    return (
        <div class="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                {header && <ModalHeader title={title} />}
                <div class="modal-body py-0 px-3">
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
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

function ModalFooter({action, action_desc}){
    return (
        <div class="modal-footer">
            <button type="button" class="btn btn-text" data-dismiss="modal">Close</button>
            <button type="button" onClick={action} class="btn btn-primary">{action_desc}</button>
        </div>
    )
}
