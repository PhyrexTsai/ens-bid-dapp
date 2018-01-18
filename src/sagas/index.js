import { fork, all } from 'redux-saga/effects';
import { 
  watchDomainSearch
} from './watcher';

export default function* startForman() {
  yield all([
    fork(watchDomainSearch),
  ])
};
