import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/createpost' element={<CreatePost/>}/>
      </Routes>
    </Router>

  )
}

export default App
