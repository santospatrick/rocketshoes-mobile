export default (state = [], action) => {
    switch (action.type) {
        case '@card/ADD':
            return [...state, action.product];
        default:
            return state;
    }
};
