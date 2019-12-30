import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setToken } from '../../store/user/action'

export default function Login (props) {
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    const redirectUrl = useSelector(state => {
        return state.redirectUrl
    }, shallowEqual)
    const dispatch = useDispatch()
    

    function handleUsernameChange (e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function handleLogin() {
        if (!/^\w+$/.test(username)) {
            alert('用户名：请输入字母、数字或者下划线');
            return;
        }
        if (!/^\w+$/.test(password)) {
            alert('密码：请输入字母、数字或者下划线')
            return;
        }
        dispatch(setToken('usertoken'))
        props.history.push(redirectUrl || '/')
    }
    return (
        <div className="login-wrapper">
            <input type="text" value={username} onChange={handleUsernameChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>登录</button>
        </div>
    )
}