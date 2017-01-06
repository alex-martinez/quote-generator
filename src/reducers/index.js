import { combineReducers } from 'redux';

import quoteInfoReducer from './reducer-quote-info';

const allReducers = combineReducers({
  quoteInfo: quoteInfoReducer
});

export default allReducers;
