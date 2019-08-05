import * as Types from './types';

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CARD,
        product,
        quantity
    }
}