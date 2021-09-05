import { SetAdminMode } from 'providers/redux/_actions/admin-actions';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


export const Admin = () => {
    const admin = localStorage.getItem('auth')
    const type = localStorage.getItem('type'); 
    return admin && type ? true : false;
}

export const AdminModeBadge = ({adminMode}) => {
    const dispatch = useDispatch()

    const setAdminMode = (e) => {
        dispatch(SetAdminMode(e.target.checked))    
        localStorage.setItem('adminMode', e.target.checked)
    }

    return (
        <>
            {
                localStorage.getItem('type') === 'admin'

                &&

                <div className="card position-fixed p-2 d-flex justify-content-between shadow-lg-2 shadow-hover-2" style={{right: '20px', bottom: '20px', width: '170px', zIndex: '999999'}}>
                    <p className="mb-0 font-weight-bold"><i className="fa fa-user-alien mr-1 text-primary"></i> Admin Mode</p>
                    <Form.Check 
                        defaultChecked={adminMode}
                        type="switch"
                        id="custom-switch"
                        label={adminMode ? "On" : "Off"}
                        onClick={setAdminMode}
                    />
                </div>
            }
        </>
    )
}

