import { DRAWER_TOGGLE } from './constant';

export function toggleDrawer () {
    return (dispatch) => {
        dispatch({
            type: DRAWER_TOGGLE
        })
    }
}