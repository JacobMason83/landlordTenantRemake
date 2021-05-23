import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer, { initalState } from './helpers/reducer'
import { StateProvider } from './helpers/StateProvider'
import './styles/main.scss'

ReactDOM.render(
  <StateProvider initalState={initalState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
)
