import React from 'react'

export const badgeStatus = (status) => {
    switch (status) {
        case 'pending':
            return 'badge-warning'
        case 'rented' :
            return 'badge-secondary'
        case 'active' :
            return 'badge-success'
        default:
            return 'badge-primary';
    }
}
