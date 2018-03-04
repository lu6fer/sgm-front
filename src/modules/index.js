import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import App from '../containers/App/reducer';

export default combineReducers({
    router: routerReducer,
    app: App
});
