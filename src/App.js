import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import "assets/style/app.scss";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
