import * as Types from '../actions/types';

const initialState = {
    bookPerPage: {},
    books: [],
    book:  {},
    booksearch : [],
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
        case Types.GET_BOOK_PER_PAGE:
            return {
                ...state,
                bookPerPage: action.bookPerPage,
                book: {},
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
                bookPerPage:{item: action.books},
                book:  {},
                loading: false
            };
        case Types.INCREASE_BOOKS:
            return {
                ...state,
                bookPerPage: {item:action.books},
                book:  {},
                loading: false
            };
        case Types.GET_BOOK_SEARCH:
            return {
                ...state,
                booksearch: action.books
            }
        default: return { ...state };
    }
}

export default booksReducer;