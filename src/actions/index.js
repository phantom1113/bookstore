import axios from 'axios';
import * as Constants from './../constants/constants'
import * as Types from './types';
import { returnError } from './error';

export const getBook = (category) => dispatch => {
    dispatch(setBookLoading());
    axios
        .get(Constants.URL_BOOK,{
            params: {
                category: category
            }
        })
        .then(res => {
            dispatch({
                type: Types.GET_BOOKS,
                books: res.data
            });
        })
        .catch(err => {
            //dispatch(returnError(err.response.data, err.response.status));
        })
};

export const getItemPerPage = (category, page) => dispatch => {
    dispatch(setBookLoading());
    axios
    .get(Constants.URL_BOOK +`/pagination?category=${category}&page=${page}`)
    .then(res => {
        dispatch({
            type: Types.GET_BOOK_PER_PAGE,
            bookPerPage: res.data
        });
    })
    .catch(err => {
        dispatch(returnError(err.response.data, err.response.status));
    })
}

export const getBookDetail = (id) => dispatch => {
    dispatch(setBookLoading());
    axios
        .get(Constants.URL_BOOK +`/${id}`)
        .then(res => {
            dispatch({
                type: Types.GET_BOOK_DETAIL,
                books: res.data
            });
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
        })
};

export const getBookSearch = (name) => dispatch => {
    dispatch(setBookLoading());
    if(name === '')
    {
        dispatch({
            type: Types.GET_BOOK_SEARCH,
            books: []
        });
    }else
    {    
    axios
        .get(Constants.URL_BOOK + `/search?name=${name}`)
        .then(res => {
            dispatch({
                type: Types.GET_BOOK_SEARCH,
                books: res.data
            });
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
        })
    }
};

export const decreasePrice = (books) => dispatch => {
    dispatch(setBookLoading());
    let value = books.sort((a,b) => {
        return parseInt(a.newprice, 10) - parseInt(b.newprice, 10);
    });
    dispatch({
        type: Types.DECREASE_BOOKS,
        books: value
    });
}

export const increasePrice = (books) => dispatch => {
    dispatch(setBookLoading());
    let value = books.sort((a,b) => {
        return parseInt(b.newprice, 10) - parseInt(a.newprice, 10);
    });
    dispatch({
        type: Types.INCREASE_BOOKS,
        books: value
    });
}

export const setBookLoading = () => {
    return {
        type: Types.LOADING_BOOK
    }
};
