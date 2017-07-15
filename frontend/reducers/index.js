import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import groupScreenReducer from './groupScreenReducer';
import groupBoxReducer from './groupBoxReducer';

function rootReducer(state = {name: 'Better Helperbot'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer: rootReducer,
    groupScreenReducer: groupScreenReducer,
    groupBoxReducer: groupBoxReducer
});
