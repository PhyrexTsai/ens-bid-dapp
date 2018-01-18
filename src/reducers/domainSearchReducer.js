import initialState from './initialState';
import { entries } from '../lib/ensService'; 
import * as types from '../constants/actionTypes';

const getDomainSearch = (state, action) => {
  let domains = [];
  action.result.recommend.forEach(element => {
    const entry = entries(element);
    let domain = {
      searchName: element,
      state: entry.state,
      value: entry.value
    };
    domains.push(domain);
  });
  return domains;
}

export default function (domainSearch = initialState.domainSearch, action) {
  switch (action.type) {
    case types.DOMAIN_SEARCH_SUCCESS:
      return getDomainSearch(domainSearch, action);
    case types.DOMAIN_SEARCH_CLEAR:
      return [];
    default:
      return domainSearch;
  }
}