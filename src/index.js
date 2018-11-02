import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import store from './redux/store'
require ('./components/Application')


import Application from './components/Application'
require('./styles.css')

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('application')
)
