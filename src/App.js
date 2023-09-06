import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  )
}

export default App