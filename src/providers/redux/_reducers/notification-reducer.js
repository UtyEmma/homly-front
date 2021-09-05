import { _NOTIFICATION } from 'providers/redux/_contants/notification-constants';

const {
    FETCH_NOTIFICATION_REQUEST, FETCH_NOTIFICATION_SUCCESS, FETCH_NOTIFICATION_ERROR
} = _NOTIFICATION

export function FetchNotificationsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_NOTIFICATION_REQUEST:
            return {...state, loading: true}
        case FETCH_NOTIFICATION_SUCCESS:
            return {...state, loading: false, notifications: action.payload.notifications, count: action.payload.no_of_notifications  }
        case FETCH_NOTIFICATION_ERROR:
            return {...state, loading: false, error: action.payload }
        default:
            return state;
    }
}