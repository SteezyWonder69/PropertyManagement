import {
    AUTHENTICATE_USER
} from '../actions/types';


const INITIAL_STATE = {
    authenicated: false,
    user:[]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            const { user } = action.payload;
            return {
                ...state,
                authenicated: true,
                user
            }
    
        default: return state;
        
    }
}