import {createStore} from "redux";
import productReducer from '../reducers';
import {Mock} from "../services";

export const initialState = {
    productList: Mock.Products,
    shoppingCart: []
};

export default createStore(productReducer, initialState);