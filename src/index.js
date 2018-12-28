require ('./components/Application')

import { render } from 'react-dom'
import React from 'react'

import Application from './components/Application'
require('./reset.css')
require('./styles.css')

render(<Application />, document.getElementById('application'))
