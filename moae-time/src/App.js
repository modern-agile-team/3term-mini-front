import React from "react";
import { HomePage, BoardPage, MyPage } from "./pages";
import { GlobalStyle } from "./style";
import { Routes, Route } from "react-router-dom";
import Layout from "./style/layout/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 같은 레벨에 있는 컴포에 적용 */}
      <Routes>
        <Route path="/" element={<Layout main={<HomePage />} />} />
        <Route path="/board" element={<Layout main={<BoardPage />} />} />
        <Route path="/mypage" element={<Layout main={<MyPage />} />} />
      </Routes>
    </>
  );
}

export default App;
