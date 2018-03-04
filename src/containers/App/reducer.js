import { fromJS } from 'immutable';
import { DRAWER_TOGGLE } from './constant';

const initialState = fromJS({
    drawer: false
});

function AppReducer(state = initialState, action) {
    switch (action.type) {
        case DRAWER_TOGGLE: {
            return state.set('drawer', !state.get('drawer'));
        }
        default: {
            return state;
        }
    }
}

export default AppReducer;