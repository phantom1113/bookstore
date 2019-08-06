import * as Types from './types';

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CARD,
        product,
        quantity
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product,quantity) => {
    return {
        type:Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}