import * as actionType from './action-type'

export function user(state = {token: ''}, action = {}) {
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
    switch(action.type) {
        case actionType.SET_REDIRECT_URL:
            console.log(action)
            return action.redirectUrl
        default: 
            return state;
    }
}