import React, { useState } from 'react';

export default function Login () {
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    function handleUsernameChange (e) {
        setUsername(e.target.value)
        let msg = ''
        if (!/^\w+$/.test(e.target.value)) {
            msg = '请输入字母、数字或者下划线'
            alert(msg)
        }
        return Boolean(msg)
    }
    function handlePasswordChange (e) {
        setPassword(e.target.value)
        let msg = ''
        if (!/^\w+$/.test(e.target.value)) {
            msg = '请输入字母、数字或者下划线'
            alert(msg)
        }
        return Boolean(msg)
    }
    function handleLogin() {
        if (handleUsernameChange || handlePasswordChange) {
            return;
        }
        console.log(username, password)
    }
    return (
        <div className="login-wrapper">
            <input type="text" value={username} onChange={handleUsernameChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>登录</button>
        </div>
    )
}