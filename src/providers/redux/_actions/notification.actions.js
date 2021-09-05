import Response from 'libraries/response/response';
import { _NOTIFICATION } from 'providers/redux/_contants/notification-constants'
import { NotificationService } from 'providers/services/notification-service';

const { 
    FETCH_NOTIFICATION_REQUEST, FETCH_NOTIFICATION_SUCCESS ,FETCH_NOTIFICATION_ERROR
} = _NOTIFICATION 

export const FetchNotifications = (type) => (dispatch) => {
    console.log("Fetching Notifications...")
    dispatch({ type: FETCH_NOTIFICATION_REQUEST });

    NotificationService.fetchNotification(type)
                            .then((response) => {
                                dispatch({
                                    type: FETCH_NOTIFICATION_SUCCESS,
                                    payload: response.data.data
                                })
                            })
                            .catch((error) => {
                                Response.error(error.response)
                                dispatch({
                                    type: FETCH_NOTIFICATION_ERROR,
                                    payload: error.response
                                })
                            })  
}