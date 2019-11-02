import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './modules/cart/reducer';
import Reactotron from '../config/reactotron';
import rootSaga from './modules/rootSaga';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
    reducer,
    compose(
        Reactotron.createEnhancer(),
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
