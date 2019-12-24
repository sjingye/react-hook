import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
const Login = lazy(() => import('../views/Login/index.jsx'))
const Home = lazy(() => import('../views/Home/index.jsx'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Suspense>
        
    )
}
    
export  default AppRouter;