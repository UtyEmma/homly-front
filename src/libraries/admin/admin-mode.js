import React, { useState } from 'react'

export const defaultAdminMode = () => {
    const admin = localStorage.getItem('auth')
    const type = localStorage.getItem('type'); 
    const mode = localStorage.getItem('adminMode') 
    return admin && type && mode && mode === 'admin' ? true : false;
}

export const AdminMode = ({adminMode}) => {
    return adminMode
}
