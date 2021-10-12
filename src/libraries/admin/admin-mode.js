import { ClearAdminMode, SetAdminMode } from 'providers/redux/_actions/admin-actions';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


export const AdminModeBadge = ({type, adminMode}) => {
    const dispatch = useDispatch()

    const setAdminMode = (e) => {
        dispatch(SetAdminMode(e.target.checked))    
    }

    const clearAdminMode = () => {
        dispatch(ClearAdminMode())
    }

    return (
        <>
            {
                type === 'admin'

                &&

                <div className="card position-fixed p-2 d-flex justify-content-between shadow-lg-2 shadow-hover-2" style={{right: '20px', bottom: '20px', width: '200px', zIndex: '999999'}}>
                    <p className="mb-0 font-weight-bold"><i className="fa fa-user-alien mr-1 text-primary"></i> Admin Mode</p>
                    <Form.Check 
                        defaultChecked={adminMode}
                        type="switch"
                        id="custom-switch"
                        label={adminMode ? "On" : "Off"}
                        onClick={setAdminMode}
                    />
                    <button className="btn btn-outline-primary mt-3" onClick={clearAdminMode}>Exit Admin Mode</button>
                </div>
            }
        </>
    )
}

