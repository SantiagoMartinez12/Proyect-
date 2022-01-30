import {FETCH_CERVEZAS} from '../action/index'
const initialState = {
    cervezas: [],

}

export default function reducer( state = initialState, action) {

    switch (action.type) {
        case FETCH_CERVEZAS:
            return {
                ...state,
                cervezas: action.payload.data
            }
        default:
            return state

        
    }

}