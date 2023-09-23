import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/User/Home';
import Dashboard from './Pages/Admin/Dashboard';
import Contact from './Pages/User/Contact';
import AboutUs from './Pages/User/AboutUs';
import ServicesPage from './Pages/User/ServicesPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<User />} />
        <Route exact path='/admin/*' element={<Admin />} />
      </Routes>
    </>
  )
}

function User() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/services' element={<ServicesPage />} />
    </Routes>
  )
}
function Admin() {
  return (
    <Routes>
      <Route path='' element={<Dashboard />} />
    </Routes>
  )

}

export default App
