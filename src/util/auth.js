import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setRedirectUrl } from '../store/user/action'

export default function useAuth() {
    const dispatch = useDispatch()
    const token = useSelector(state => {
        console.log(state)
        return state.user.token
    }, shallowEqual)
    useEffect(() => {
        console.log(token)
        if (!token && window.location.pathname !== '/login') {
            // const url = window.location.protocol + '//' + window.location.host + window.location.pathname
            dispatch(setRedirectUrl(window.location.pathname))
            // window.location.replace(`/login`)
        }
    }, [token])
}