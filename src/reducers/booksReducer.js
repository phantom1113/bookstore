import * as Types from '../actions/types';

const initialState = {
    books: [],
    book:  {},
    loading: false
};


const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_BOOKS:
            return {
                ...state,
                books: action.books,
                book:  {},
                loading: false
            };
        case Types.GET_BOOK_DETAIL:
            return {
                ...state,
                book: action.books,
                loading: false
            };
        case Types.DECREASE_BOOKS:
            return {
                ...state,
                books: action.books,
                book:  {},
                loading: false
            };
        case Types.INCREASE_BOOKS:
            return {
                ...state,
                books: action.books,
                book:  {},
                loading: false
            };
        default: return { ...state };
    }
}

export default booksReducer;