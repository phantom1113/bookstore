import * as Types from '../actions/types';

var data = JSON.parse(localStorage.getItem('CART'));


const initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case Types.ADD_TO_CARD:
            {
                index = findProductInCart(state, product);
                if (index !== -1) {
                    state[index].quantity += quantity;
                } else {
                    state.push({
                        product,
                        quantity
                    });
                }
                console.log(state);
                localStorage.setItem('CART', JSON.stringify(state));
                return [...state];
            }
        default: return [ ...state ];
    }
}

let findProductInCart = (cart, product) =>{
    let index = -1;
    if(cart.length > 0){
        for(let i = 0; i < cart.length; i++){
            if(cart[i].product._id === product._id){
                index = i;
                break;
            }
        }
    }
    return  index;
}

export default cartReducer;