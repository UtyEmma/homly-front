import { FetchNotifications, MarkAllAsRead } from 'providers/redux/_actions/notification.actions'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListingNotificationItem } from './notification-items/listing-notification'
import { ReviewNotificationItem } from './notification-items/review-notification'
import { MessageNotificationItem } from './notification-items/message-notification'
import { SupportNotificationItem } from './notification-items/support-notification-item'
import { AgentSuspensionNotificationItem } from './notification-items/agent-suspension-notification-item'
import { ListingSuspensionNotificationItem } from './notification-items/listing-suspension-notification-item'
import { ListingRentedNotificationItem } from './notification-items/listing-rented-notification-item'
import { Link } from 'react-router-dom'
import { ListingApprovedNotificationItem } from './notification-items/listing-approved-notification-item'

export const NotificationBell = () => {

    const dispatch = useDispatch()
    
    const notification = useSelector((state) => state.notification)
    const {notifications, count} = notification

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const getNotifications = useCallback(() => {
        dispatch(FetchNotifications(token, 'agent'))
    }, [dispatch, token])

    useEffect(() => {
        !notifications && getNotifications()
    }, [getNotifications, notifications])

    const markAllAsRead = () => {
        dispatch(MarkAllAsRead(token, 'agent'))
    }

    const notificationItem = (notification, index) => {
        switch (notification.type) {
            case 'listing':
                return <ListingNotificationItem notification={notification} key={index} />
            case 'review':
                return <ReviewNotificationItem notification={notification} key={index} />
            case 'message':
                return <MessageNotificationItem notification={notification} key={index} />
            case 'support':
                return <SupportNotificationItem notification={notification} key={index} />
            case 'agent_suspended':
                return <AgentSuspensionNotificationItem notification={notification} key={index} />
            case 'listing_suspended':
                return <ListingSuspensionNotificationItem notification={notification} key={index} />
            case 'listing_rented':
                return <ListingRentedNotificationItem notification={notification} key={index} />
            case 'listing_approved':
                return <ListingApprovedNotificationItem notification={notification} key={index} />
            default:
                return null;
        }
    }

    return (
        <>
            <div className="dropdown no-caret py-3 px-sm-6 d-flex align-items-center justify-content-end notice" role="button" onClick={markAllAsRead}>
                <button className="bg-transparent border-0 dropdown-toggle text-heading fs-20 font-weight-500 lh-1"  data-toggle="dropdown">
                    <i className="far fa-bell" />
                    <span className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">
                        {
                            count > 0 && count
                        }
                    </span>
                </button>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-md" style={{zIndex: '9999'}}>
                    {
                        notifications 

                        ?

                        <>

                        {
                            notifications.map((notification, index) => {
                                return index <= 2 && notificationItem(notification, index)
                            })
                        }
                            <hr/>
                            <div className="text-center py-0">
                                <Link to="/activity" >
                                    View All Notifications 
                                </Link>
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
