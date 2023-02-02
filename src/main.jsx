import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//brings react in
//react dom is and adapter and it has a method create root
//here we attach the application to the div that has the id of root 
//we simply render whatver app is
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> 
    <App />//this is a custom html element called app , also jsx must use self closing tags
 // </React.StrictMode>,
)
