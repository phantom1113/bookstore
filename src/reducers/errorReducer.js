import * as Types from './../actions/types';

const initialState = {
    msg: {},
    status: null,
    id: null
}

const errorReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_ERROR:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case Types.CLEAR_ERROR:
            return {
                msg: {},
                status: null,
                id: null
            }
        default:
            return state;
    }   
}

export default errorReducer ;