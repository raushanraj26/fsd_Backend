import React from 'react'
import Register from './components/Register'
import View from './components/View'
import './App.css'
import Update from './components/Update'
import Delete from './components/Delete'
const App = () => {
  return (
    <div>
      <h1>User Registration system</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App