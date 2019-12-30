import React from 'react';
import useAuth from '../../util/auth';
import { useSelector, shallowEqual } from 'react-redux'

export default function Home () {
    useAuth()
    return (
        <div className="home-wrapper">ddd</div>
    )
}