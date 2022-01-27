import React from 'react';
import { HomePage, BoardPage, MyPage } from './pages';
import { GlobalStyle, MainLayout } from './style';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 같은 레벨에 있는 컴포에 적용 */}
      <Routes>
        <Route path="/" element={<MainLayout main={<HomePage />} />} />
        <Route path="/board" element={<MainLayout main={<BoardPage />} />} />
        <Route path="/mypage" element={<MainLayout main={<MyPage />} />} />
      </Routes>
    </>
  );
}

export default App;
