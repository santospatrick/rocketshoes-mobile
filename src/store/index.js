import { createStore, compose } from 'redux';
import reducer from './modules/cart/reducer';
import Reactotron from '../config/reactotron';

const store = createStore(reducer, compose(Reactotron.createEnhancer()));

export default store;
