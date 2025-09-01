import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Assignment from "./components/Assignment/Assignment";
import { Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/assignment" element={<Assignment />} />
      </Routes>
   
  );
};

export default App;
