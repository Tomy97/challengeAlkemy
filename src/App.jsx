import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormularioLogin from './Pages/FormLogin/FormularioLogin'
import Home from './Pages/Home/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <FormularioLogin></FormularioLogin>
                </Route>
                <Route exact path='/login'>
                    <FormularioLogin></FormularioLogin>
                </Route>
                <Route exact path='/home'>
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
