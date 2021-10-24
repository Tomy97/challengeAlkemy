import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
