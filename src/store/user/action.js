import * as actionType from './action-type'

export function setToken(token) {
    return {
        type: actionType.SET_TOKEN,
        token
    }
}

export function setRedirectUrl(url) {
    return {
        type: actionType.SET_REDIRECT_URL,
        redirectUrl: url
    }
}