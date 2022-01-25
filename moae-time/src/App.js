import React from "react";
import { HomePage, BoardPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import Layout from "./style/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={<HomePage />} />} />
      <Route path="/board" element={<Layout main={<BoardPage />} />} />
    </Routes>
  );
}

export default App;
