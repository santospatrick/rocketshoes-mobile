export const addToCartRequest = id => ({
    type: '@cart/ADD_REQUEST',
    id,
});

export const addToCartSuccess = product => ({
    type: '@cart/ADD_SUCCESS',
    product,
});
