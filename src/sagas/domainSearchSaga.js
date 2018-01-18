import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getDomainSearchResult } from '../apis/api';

export function* getDomainSearchResultSaga({payload}) {
  try {
    yield put({ type: types.FETCHING}); 
    const domainSearchResult = yield call(getDomainSearchResult, payload);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.DOMAIN_SEARCH_SUCCESS, result: domainSearchResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
