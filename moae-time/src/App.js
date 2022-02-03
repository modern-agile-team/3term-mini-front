import React from 'react';
import {
  HomePage,
  BoardPage,
  MyPage,
  BoardOne,
  BoardEditPresenter,
} from './pages';
import { GlobalStyle, MainLayout } from './style';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore, compose, applyMiddleware } from "redux";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 같은 레벨에 있는 컴포에 적용 */}
      <Routes>
        <Route path="/" element={<MainLayout main={<HomePage />} />} />
        <Route path="/board" element={<MainLayout main={<BoardPage />} />} />
        <Route path="/mypage" element={<MainLayout main={<MyPage />} />} />
        <Route
          path="/board/:boardId"
          element={<MainLayout main={<BoardOne />} />}
        />
        <Route
          path="/board/:boardId/edit"
          element={<MainLayout main={<BoardEditPresenter />} />}
        />
      </Routes>
    </>
  );
}

export default App;
