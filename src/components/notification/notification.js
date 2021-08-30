import { FetchNotifications } from 'providers/redux/_actions/notification.actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListingNotificationItem } from './notification-items/listing-notification'
import { ReviewNotification, ReviewNotificationItem } from './notification-items/review-notification'
import { SupportNotificationItem } from './notification-items/support-notification'

export const NotificationBell = () => {

    const dispatch = useDispatch()
    
    const notification = useSelector((state) => state.notification)
    const {loading, notifications, count} = notification

    useEffect(() => {
        !notifications && getNotifications()
    }, [notifications])

    const markAllAsRead = () => {
        
    }

    const notificationItem = (notification, index) => {
        switch (notification.type) {
            case 'listing':
                return <ListingNotificationItem notification={notification} key={index} />
            case 'review':
                return <ReviewNotificationItem notification={notification} key={index} />
            case 'support':
                return <SupportNotificationItem notification={notification} key={index} />
            default:
                return null;
        }
    }

    const getNotifications = () => {
        dispatch(FetchNotifications('agent'))
    } 
    return (
        <>
            <div className="dropdown no-caret py-3 px-3 px-sm-6 d-flex align-items-center justify-content-end notice">
                <a href="#" className="dropdown-toggle text-heading fs-20 font-weight-500 lh-1" data-toggle="dropdown">
                    <i className="far fa-bell" />
                    <span className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">
                        {
                            count && count
                        }
                    </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-md" style={{zIndex: '9999'}}>
                    {
                        notifications 

                        ?

                        <>
                            <div className="px-2 mb-2 d-flex justify-content-end">
                                <button onClick={markAllAsRead} className="btn btn-link btn-sm">
                                    <i className="fal fa-envelope-open-text fs-16 mr-1"></i>
                                    Mark all as Read 
                                </button>
                            </div>

                        {
                            notifications.map((notification, index) => {
                                return notificationItem(notification, index)
                            })
                        }
                            <hr/>
                            <div className="text-center py-0">
                                <a href="#" >
                                    View All Notifications 
                                    <span className="badge badge-primary badge-circle font-weight-bold fs-13 ml-1">
                                        {
                                            count && count
                                        }
                                    </span>
                                </a>
                            </div>
                        </>

                        :

                        <p className="dropdown-item">You have no notifications</p>
                    }
                </div>
            </div>   
        </>
    )
}
