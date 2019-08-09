import axios from 'axios';
import * as Types from './types';
import { returnError } from './error';


//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: Types.USER_LOADING });

    axios.get('http://localhost:5000/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: Types.USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: Types.AUTH_ERROR,
            })
        })
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
    console.log(body);
    axios.post('http://localhost:5000/api/users', body, config)
        .then(res => dispatch({
            type: Types.REGISTER_SUCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status, Types.REGISTER_FAIL));
            dispatch({
                type: Types.REGISTER_FAIL
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

    axios.post('http://localhost:5000/api/auth', body, config)
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