import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';

import { rootReducer } from './root.reducer';
import rootSagas from './root.sagas';

const sagaMiddleWare = createSagaMiddleWare();
const middleWares: Middleware[] = [sagaMiddleWare];

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleWares))
);
sagaMiddleWare.run(rootSagas);
