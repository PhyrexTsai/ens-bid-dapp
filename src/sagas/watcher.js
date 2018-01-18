import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getDomainSearchResultSaga } from './domainSearchSaga';

export function* watchDomainSearch() {
  yield takeLatest(types.DOMAIN_SEARCH, getDomainSearchResultSaga);
}