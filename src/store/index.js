import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import Reactotron from '../config/reactotron';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
    rootReducer,
    compose(
        Reactotron.createEnhancer(),
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
