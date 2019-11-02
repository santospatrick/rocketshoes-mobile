export default (state = [], action) => {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return [...state, action.product];
        default:
            return state;
    }
};
