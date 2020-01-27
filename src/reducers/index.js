import { combineReducers} from 'redux';
import documentReducer from './documentReducer';

// Using combine reducers for scalability purposes
export default combineReducers({
    documents: documentReducer
})