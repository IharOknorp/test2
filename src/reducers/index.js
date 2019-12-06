import characters from './characters'
import {combineReducers} from 'redux'
import details from './details'

const rootReducer = combineReducers({
    characters,
    details
});

export default rootReducer
