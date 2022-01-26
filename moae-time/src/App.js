import React from "react";
import { HomePage, BoardPage } from "./pages";
import MyPage from "./pages/mypage/MyPage";
import { GlobalStyle } from "./style";
import { Routes, Route } from "react-router-dom";
import Layout from "./style/layout/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout main={<HomePage />} />} />
        <Route path="/board" element={<Layout main={<BoardPage />} />} />
        <Route path="/mypage" element={<Layout main={<MyPage />} />} />
      </Routes>
    </>
  );
}

export default App;
