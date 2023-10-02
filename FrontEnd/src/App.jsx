import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/User/Home';
import Dashboard from './Pages/Admin/Dashboard';
import Contact from './Pages/User/Contact';
import AboutUs from './Pages/User/AboutUs';
import ServicesPage from './Pages/User/ServicesPage';
import ScrollToTop from './Componants/User/ScrollToTop';
import AdminLogin from './Pages/Admin/AdminLogin';
import { AuthProvider } from './Context/AuthContext';
import Packages from './Pages/Admin/Packages';
import { DbContext, DbProvider, StorageProvider } from './Context/FirebaseContext';
import Gallery from './Pages/User/Gallery';
import GalleryManager from './Pages/Admin/GalleryManager';

function App() {

  return (
    <>
      <ScrollToTop />
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
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  )
}
function Admin() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/' element={<AdminLogin />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/gallerymanager' element={<GalleryManager />} />
      </Routes>
    </AuthProvider>
  )

}

export default App
