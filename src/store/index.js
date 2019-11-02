import { createStore } from 'redux';
import reducer from './modules/cart/reducer';
import Reactotron from '../config/reactotron';

const store = createStore(reducer, Reactotron.createEnhancer());

export default store;
