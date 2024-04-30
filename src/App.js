import Info from './components/Info';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import React from "react";
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info/:id" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
