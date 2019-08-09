import * as Types from './../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: localStorage.getItem('name')===null ? null : {name: localStorage.getItem('name')}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case Types.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('name', action.payload.user.name);
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case Types.AUTH_ERROR:
        case Types.LOGIN_FAIL:
        case Types.LOGOUT_SUCCESS:
        case Types.REGISTER_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default: return state;
    }
}

export default authReducer;