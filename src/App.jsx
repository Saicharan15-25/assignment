import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Assignment from "./components/Assignment/Assignment";
import AnyQuestion from "./components/AnyQuestion/AnyQuestion";
import FileUpload from "./components/Fileupload/FileUpload";

import ProcessAnalyzer from "./components/ProcessAnalyzer/ProcessAnalyzer";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnyQuestion />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/processAnalyzer" element={<ProcessAnalyzer />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/assignment" element={<Assignment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
