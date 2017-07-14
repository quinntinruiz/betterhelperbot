import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import groupScreenReducer from './groupScreenReducer';

function rootReducer(state = {name: 'Better Helperbot'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    rootReducer: rootReducer,
  //  groupScreenReducer: groupScreenReducer
});
export default rootReducer;
