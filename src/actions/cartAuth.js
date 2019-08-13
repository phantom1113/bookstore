import * as Types from './types';

export const updateCartAuth = (item,quantity) => {
    return {
        type:Types.UPDATE_PRODUCT__CART_USER,
        item,
        quantity
    }
}

export const actAddToCartAuth = (item, quantity) => {
    return {
        type : Types.ADD_TO_CART_USER,
        item,
        quantity
    }
}

export const actRemoveProductInCartAuth = (item) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART_USER,
        item
    }
}

