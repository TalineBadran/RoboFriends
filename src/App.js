import Info from './components/Info';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import View from './components/View';
import React from "react";
import './App.css';
import Post from './components/Post';
import Get from './components/Get';
import Put from './components/Put';
import Patch from './components/Patch';
import Delete from './components/Delete';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/info/:id" element={<Info />} /> */}
      <Route path="/info/:id" element={<Info />} />
      <Route path="/post" element={<Post/>}  />
      <Route path="/get" element={<Get/>}  />
      <Route path="/put" element={<Put/>}  />
      <Route path="/patch" element={<Patch/>}  />
      <Route path="/delete" element={<Delete/>}  />
      </Routes>
    </Router>
  );
}

export default App;
