import React from 'react'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
import AuthState from './context/AuthState'
import Button from './components/Button';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';
import LegalAdvice from './pages/LegalAdvice';
import Admin from './pages/Admin';
import MonitorCases from './pages/MonitorCases'
import ConnectToLegalServices from './pages/ConnectToLegalServices';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<UndertrialPrisoner />}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/legaladvice' element={<LegalAdvice/>} ></Route>
            <Route path='/monitorcase' element={<MonitorCases/>} ></Route>
            <Route path='/connect' element={<ConnectToLegalServices/>} ></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/monitoring' element={<MonitorCases/>}></Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

export default App