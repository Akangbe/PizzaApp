import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./UI/index.css"
import { Provider } from 'react-redux'
import store from './Features/User/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
    <App />
    <Provider/> */}
    <Provider store={store}>
<App/>
    </Provider>
  </React.StrictMode>,
)
