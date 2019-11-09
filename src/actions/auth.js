import axios from 'axios';
import * as Types from './types';
import { returnError } from './error';
import * as Constants from './../constants/constants'

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: Types.USER_LOADING });

    axios.get(Constants.URL_AUTH + '/user', tokenConfig(getState))
        .then(res => dispatch({
            type: Types.USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            console.log(err);
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: Types.AUTH_ERROR,
            })
        })
}

//Checkout cart
export const Checkout = (id, cart, address, method_payment,sumprice) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ item: cart, address: address, method_payment, sumprice});
    axios.post(Constants.URL_USER+`/${id}/checkout`, body, config)
        .then(res => 
            {
            dispatch({
                type:Types.CHECKOUT_SUCCESS
            })
        })
        .catch(err => dispatch(returnError(err.response.data, err.response.status)))
}

//Register User
export const Register = (name, email, password) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ name, email, password });
    axios.post(Constants.URL_USER, body, config)   //Bug
        .then(res => {
            dispatch({
            type: Types.REGISTER_SUCESS,
            payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, Types.REGISTER_FAIL));
            dispatch({
                type: Types.REGISTER_FAIL
            });
        });
}

//Change Password
export const ChangePassword = ({id, oldpassword, newpassword}) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({id, oldpassword, newpassword});

    axios.post(Constants.URL_USER + `/${id}/user`, body, config)
        .then(res => {
            dispatch(returnError(res.data, res.status, Types.CHANGE_PASSWORD_SUCCESS));
            dispatch({
            type: Types.CHANGE_PASSWORD_SUCCESS,
            payload: res.data
        })})
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, Types.CHANGE_PASSWORD_FAIL));
            dispatch({
                type: Types.CHANGE_PASSWORD_FAIL
            });
        });
}

//Login User
export const Login = ({ email, password }) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ email, password });

    axios.post(Constants.URL_AUTH, body, config)
        .then(res => dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, Types.LOGIN_FAIL));
            dispatch({
                type: Types.LOGIN_FAIL
            });
        });
}

//Logout User
export const logout = () => {
    return {
        type: Types.LOGOUT_SUCCESS
    }
}


//Setup config/header and token
export const tokenConfig = getState => {
    //Get token from localStorage
    const token = getState().auth.token;
    //Header
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}