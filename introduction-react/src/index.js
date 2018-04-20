// Dependencies
import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

// Assets
import 'bootstrap/dist/css/bootstrap.min.css'

// Routes
import AppRouter from './router'

render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
    , document.getElementById('root')
)
registerServiceWorker()