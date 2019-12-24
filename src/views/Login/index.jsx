import React from 'react';
import useAuth from '../../util/auth';

export default function Login () {
    useAuth()
    return (
        <div className="login-wrapper">
            登录
        </div>
    )
}