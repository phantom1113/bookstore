import * as Types from './../actions/types';
import axios from 'axios';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: localStorage.getItem('name')===null ? null : {name: localStorage.getItem('name'),cart:JSON.parse(localStorage.getItem('cart_user'))}
}

const authReducer = (state = initialState, action) => {
    let { item, quantity } = action;
    let index = -1;
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
            localStorage.setItem('cart_user', JSON.stringify(action.payload.user.cart));
            console.log(typeof(action.payload.user.cart));
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
            localStorage.removeItem('cart_user');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        case Types.UPDATE_PRODUCT__CART_USER:
            index = findProductInCart(state.user.cart, item);
            if (index !== -1) {
                state.user.cart[index].quantity = quantity;
            }
            localStorage.setItem('cart_user', JSON.stringify(state.user.cart));
            postCart(state.user.cart,state.user.id)
            return {...state};            
        case Types.ADD_TO_CART_USER:
                index = findProductInCart(state.user.cart, item);
                if (index !== -1) {
                    state.user.cart[index].quantity += quantity;
                } else {
                    state.user.cart.push({
                        item,
                        quantity
                    });
                }
                localStorage.setItem('cart_user', JSON.stringify(state.user.cart));
                postCart(state.user.cart,state.user.id)
                return {...state};
        case Types.DELETE_PRODUCT_IN_CART_USER:
                index = findProductInCart(state.user.cart, item);
                if (index !== -1) {
                    state.user.cart.splice(index, 1);
                }
                localStorage.setItem('cart_user', JSON.stringify(state.user.cart));
                postCart(state.user.cart,state.user.id)
                return {...state};
        default: return state;
    }
}

let findProductInCart = (cart, product) =>{
    let index = -1;
    if(cart.length > 0){
        for(let i = 0; i < cart.length; i++){
            if(cart[i].item._id === product._id){
                index = i;
                break;
            }
        }
    }
    return  index;
}

let postCart = (item,id) =>{
    console.log('running')
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({cart: item});

    axios.post(`http://localhost:5000/api/users/${id}/cart`, body, config)
        .then(console.log('success'))
        .catch(err => {
            console.log(err)
        });
}



export default authReducer;