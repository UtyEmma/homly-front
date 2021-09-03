import { defaultAdminMode } from 'libraries/admin/admin-mode'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export const AdminModeBadge = ({adminMode, setAdminMode}) => {
    
    const getState = (e) => {
        setAdminMode(e.target.checked)
    }

    return (
        <>
            {
                adminMode

                &&

                <div className="card position-fixed p-2 d-flex justify-content-between shadow-lg-2 shadow-hover-2" style={{right: '20px', bottom: '20px', width: '170px', zIndex: '999999'}}>
                    <p className="mb-0 font-weight-bold"><i className="fa fa-user-alien mr-1 text-primary"></i> Admin Mode</p>
                    <Form.Check
                        checked={adminMode} 
                        type="switch"
                        id="custom-switch"
                        label={adminMode ? "On" : "Off"}
                        onClick={getState}
                    />
                </div>
            }
        </>
    )
}
