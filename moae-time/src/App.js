import React from "react";
import { HomePage, BoardPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import DummyLayout from "./style/layout/DummyLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DummyLayout main={<HomePage />} />} />
      <Route path="/board" element={<DummyLayout main={<BoardPage />} />} />
    </Routes>
  );
}

export default App;
