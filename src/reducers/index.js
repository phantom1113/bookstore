import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    books : booksReducer,
    cart :  cartReducer,
    auth : authReducer,
    error : errorReducer
});