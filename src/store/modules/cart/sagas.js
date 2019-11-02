import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
    const product = yield select(state => state.cart.find(p => p.id === id));
    console.tron.log(product);
    const stock = yield call(api, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = product ? product.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        alert('Quantidade solicitada fora de estoque');
        return;
    }

    if (product) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            formattedPrice: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', addToCart),
]);
