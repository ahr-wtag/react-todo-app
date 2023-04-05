import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/Shared/Navbar/index.jsx";
import "assets/style/app.scss";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
