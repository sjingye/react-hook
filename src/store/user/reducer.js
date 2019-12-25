export function token(state = {token: ''}, action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'GET_TOKEN': 
            return state;
        default: 
            return state;
    }
}