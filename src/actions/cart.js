import * as Types from './types';

export const actAddToCart = (item, quantity) => {
    return {
        type : Types.ADD_TO_CARD,
        item,
        quantity
    }
}

export const actRemoveProductInCart = (item) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        item
    }
}

export const actUpdateProductInCart = (item,quantity) => {
    return {
        type:Types.UPDATE_PRODUCT_IN_CART,
        item,
        quantity
    }
}