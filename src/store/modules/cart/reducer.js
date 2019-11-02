import produce from 'immer';

export default (state = [], action) => {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draftState => {
                draftState.push(action.product);
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS':
            return produce(state, draftState => {
                const productIndex = draftState.findIndex(
                    p => p.id === action.id,
                );

                if (productIndex >= 0) {
                    draftState[productIndex].amount = Number(action.amount);
                }
            });

        default:
            return state;
    }
};
