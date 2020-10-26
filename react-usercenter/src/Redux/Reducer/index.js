import { combineReducers } from 'redux';
import userInfo from './userInfo';
import shopMenu from '../../Component/Shop/state/reducer';
import recordList from '../../Component/Record/state/reducer';
const rootReducer = combineReducers({
   userInfo,
   shopMenu,
   recordList,
});

export default rootReducer;