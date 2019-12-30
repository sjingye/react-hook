import * as actionType from './action-type'

export function user(state = {token: ''}, action = {}) {
    // console.log(action)
    switch(action.type) {
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default: 
            return state;
    }
}

export function redirectUrl(state = '', action = {}) {
    console.log(action)
    switch(action.type) {
        case actionType.SET_REDIRECT_URL:
            return {
                ...state,
                redirectUrl: action.redirectUrl
            }
        default: 
            return state;
    }
}