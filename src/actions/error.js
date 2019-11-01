import * as Types from './types';

//Return Error

export const returnError = (msg, status, id = null) => {
    return {
        type: Types.GET_ERROR,
        payload: {msg, status, id}
    }
}

//Clear Error
export const clearError = () => {
    return {
        type: Types.CLEAR_ERROR
    }
}
