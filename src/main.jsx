import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet"/>
    </Helmet>
    <App />
  </>,
)
