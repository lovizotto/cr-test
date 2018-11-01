import {Constants} from "../actions";
import {combineReducers} from 'redux';

export const productList = (state = [], action) => {
    switch (action.type) {
        case Constants.FILTER_PRODUCT:
            if (action.payload === 'name') {
                return [...state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))];
            } else {
                return [...state.sort((a, b) => a[action.payload] - b[action.payload])];
            }
        default:
            return state
    }
};

export const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case Constants.ADD_PRODUCT:
            if (state.find(p => p.id === action.payload.id)) {
                return state;
            }
            return [
                ...state,
                action.payload
            ];
        case Constants.REMOVE_PRODUCT:
            return state.filter(
                (product) => product.id !== action.payload
            );
        default:
            return state;
    }
};

export default combineReducers({
    productList,
    shoppingCart
})