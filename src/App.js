import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Info from './components/Info';
import Home from './components/Home';
import Create from "./components/Create";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info/:id" element={<Info />} />
      <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
