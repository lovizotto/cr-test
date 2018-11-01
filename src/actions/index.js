export const Constants = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    FILTER_PRODUCT: 'FILTER_PRODUCT',
};

export const addProduct = (product) => ({
    type: Constants.ADD_PRODUCT,
    payload: product
});

export const removeProduct = (productId) => ({
    type: Constants.REMOVE_PRODUCT,
    payload: productId
});

export const filterProduct = (filter) => ({
    type: Constants.FILTER_PRODUCT,
    payload: filter
});



