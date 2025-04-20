import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Messages from './Pages/Messages'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import Search from './components/Seach'
import UserSearch from './components/UserSearch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App