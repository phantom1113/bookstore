import axios from 'axios';
import * as Types from './types';


export const getBook = (category) => dispatch => {
    dispatch(setBookLoading());
    axios
        .get('http://localhost:5000/api/books',{
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
            console.log(err)
        })
};

export const getBookDetail = (id) => dispatch => {
    dispatch(setBookLoading());
    axios
        .get(`http://localhost:5000/api/books/${id}`)
        .then(res => {
            dispatch({
                type: Types.GET_BOOK_DETAIL,
                books: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
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
