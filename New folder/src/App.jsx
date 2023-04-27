import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import 'animate.css';
import Home from './screens/Home';
// import 'antd/dist/antd.css';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default App
