import { call, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { userSagas } from './user/user.sagas';

function* rootSagas(): SagaIterator {
	yield all([call(userSagas)]);
}

export default rootSagas;
