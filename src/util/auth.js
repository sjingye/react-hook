import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setRedirectUrl } from '../store/user/action'

export default function useAuth() {
    const dispatch = useDispatch()
    const token = useSelector(state => {
        return state.user.token
    }, shallowEqual)
    useEffect(() => {
        if (!token && window.location.pathname !== '/login') {
            // const url = window.location.protocol + '//' + window.location.host + window.location.pathname
            // dispatch(setRedirectUrl(window.location.pathname))
            dispatch(setRedirectUrl('/on'))
            window.location.replace(`/login`)
        }
    }, [dispatch, token])
}