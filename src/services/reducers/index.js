import { combineReducers } from 'redux';
import ListItem from './reducer';
import setInput from './reducer';


export default combineReducers({
	ListItem, setInput
});