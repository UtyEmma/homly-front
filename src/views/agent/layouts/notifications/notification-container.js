import { AgentSuspensionNotificationItem } from 'components/notification/notification-items/agent-suspension-notification-item'
import { ListingNotificationItem } from 'components/notification/notification-items/listing-notification'
import { ListingRentedNotificationItem } from 'components/notification/notification-items/listing-rented-notification-item'
import { ListingSuspensionNotificationItem } from 'components/notification/notification-items/listing-suspension-notification-item'
import { MessageNotificationItem } from 'components/notification/notification-items/message-notification'
import { ReviewNotificationItem } from 'components/notification/notification-items/review-notification'
import { SupportNotificationItem } from 'components/notification/notification-items/support-notification-item'
import { FetchNotifications, MarkAllAsRead } from 'providers/redux/_actions/notification.actions'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './notifications.css'

export const NotificationContainer = () => {

    const dispatch = useDispatch()
    
    const notification = useSelector((state) => state.notification)
    const {loading, notifications, count} = notification

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const {href} = window.location

    const getNotifications = useCallback(() => {
        dispatch(FetchNotifications(token, 'agent'))
    }, [dispatch, token])

    useEffect(() => {
        getNotifications()
    }, [href])

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
            default:
                return null;
        }
    }

    return (
        <div className="mb-6">
            <div className="card px-3 px-md-7 py-6 h-100" >
                <div className="card-body p-0">
                    <h2 className="mb-2 text-heading fs-22 lh-15">Recent Activity</h2>
                    <div className="px-0 px-mb-2 mb-2 d-flex justify-content-end">
                        {
                            notifications && notifications.length > 0

                            &&

                            <button onClick={markAllAsRead}  className="btn btn-link btn-sm">
                                <i className="fal fa-envelope-open-text fs-16 mr-1"></i>
                                Mark all as Read 
                            </button>
                        }
                    </div>
                    
                    {
                        notifications && notifications.length > 0 

                        ?

                        <>
                            <ul className="list-group list-group-no-border notification-container" style={{maxHeight: '80vh', overflowY: 'scroll'}} >
                                {
                                    notifications.map((notification, index) => {
                                        return notificationItem(notification, index)
                                    })
                                }
                            </ul>
                        </>

                        :
                        
                        <div>
                            <img src="" alt=""  className="" />
                            <p className="">You have none at the moment</p>
                        </div>

                    }
                    
                </div>
            </div>
        </div>
    )
}
