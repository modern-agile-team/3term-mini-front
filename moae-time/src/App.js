import React from "react";
import { HomePage, BoardPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import DummyHeader from "./style/layout/DummyHeader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DummyHeader main={<HomePage />} />} />
      <Route path="/board" element={<DummyHeader main={<BoardPage />} />} />
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route 
        path="/board" 
        element={<BoardPage />} 
      /> */}
    </Routes>
  );
}

export default App;
