import * as Types from '../actions/types';

var data = JSON.parse(localStorage.getItem('CART'));


const initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
    let { item, quantity } = action;
    let index = -1;
    switch (action.type) {
        case Types.ADD_TO_CARD:
            index = findProductInCart(state, item);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    item,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, item);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, item);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.LOGOUT_SUCCESS:
            state = [];
            return [...state];
        default:
            localStorage.setItem('CART', JSON.stringify(state));
            return [ ...state ];
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

export default cartReducer;