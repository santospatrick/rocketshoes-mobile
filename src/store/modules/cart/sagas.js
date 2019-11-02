import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess } from './actions';

function* addToCart(action) {
    const response = yield call(api, `/products/${action.id}`);
    const data = {
        ...response.data,
        formattedPrice: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
