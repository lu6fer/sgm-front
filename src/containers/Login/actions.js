import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import Api from '../../utils/api';

export function loggin (credentials) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        });
        Api.post('/login', credentials)
            .then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.data.user,
                    token: res.data.token
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_FAILED,
                    message: err.data.message
                });
            });
    }
}