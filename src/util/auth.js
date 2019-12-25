import { useEffect } from "react";

export default function useAuth() {
    useEffect(() => {
        console.log(window.location)
        if (!state.token && window.location.pathname !== '/login') {
            const url = window.location.protocol + '//' + window.location.host + window.location.pathname
            window.location.replace(`/login?redirect_url=${url}`)
        }
    })
}