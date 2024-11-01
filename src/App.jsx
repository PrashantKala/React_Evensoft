import { useState } from 'react'
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navabar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import SolutionsPage from '../components/SolutionsPage'
import PrivacyPolicy from '../components/PrivacyPolice'
import TermsofUse from '../components/TermsofUse'
import IntellectualPropertyPolicy from '../components/IntellectualPropertyPolicy'
import AboutUs from '../components/AboutUs'

function App() {
  return (
    <>
      <Navbar />  {/* Navbar is displayed on all pages */}
      <Outlet /> 
    </>
  );
}

export default App
