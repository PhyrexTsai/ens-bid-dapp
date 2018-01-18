import * as types from '../constants/actionTypes';

export const domainSearchAction = (payload) => ({
  type: types.DOMAIN_SEARCH,
  payload
});

export const domainSearchClearAction = () => ({
  type: types.DOMAIN_SEARCH_CLEAR
});