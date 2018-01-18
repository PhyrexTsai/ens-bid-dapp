import { combineReducers } from 'redux';
import count from './counterReducer';
import domainSearch from './domainSearchReducer';
import isFetching from './fetchingReducer';

const rootReducer = combineReducers({
  count,
  domainSearch,
  isFetching
});
export default rootReducer;
