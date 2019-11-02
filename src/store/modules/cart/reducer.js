import produce from 'immer';

export default (state = [], action) => {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draftState => {
                draftState.push(action.product);
            });
        default:
            return state;
    }
};
