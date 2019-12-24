import { useReducer, useEffect } from "react";

const initialState = {token: ''};

export function tokenReducer(state, action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                token: action.token
            }
        case 'GET_TOKEN': 
            return state;
        default: 
            throw new Error();
    }
} 

export default function useAuth() {
    const [state, dispatch] = useReducer(tokenReducer,initialState)
    useEffect(() => {
        console.log(state)
        console.log(dispatch)
        console.log(window.location)
        if (!state.token && window.location.pathname !== '/login') {
            window.location.replace('/login')
        }
    })
}