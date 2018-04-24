// Dependencies
import React from 'react'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// Assets
import 'bootstrap/dist/css/bootstrap.min.css'
// Routes
import AppRouter from './helpers/router'
//store
import store from './reducers'

render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)
registerServiceWorker()