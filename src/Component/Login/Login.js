import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPassworLost from './LoginPassworLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPassworLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </nav>
  )
}

export default Login
