import React from 'react';
import {
  HomePage,
  BoardPage,
  MyPage,
  BoardOne,
  BoardEditPresenter,
  BoardWritePresenter,
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
        <Route path="/" element={<MainLayout path="/" main={<HomePage />} />} />
        <Route
          path="/board"
          element={<MainLayout path="/board" main={<BoardPage />} />}
        />
        <Route
          path="/mypage"
          element={<MainLayout path="/mypage" main={<MyPage />} />}
        />
        <Route
          path="/board/:boardId"
          element={<MainLayout path="/board/:boardId" main={<BoardOne />} />}
        />
        <Route
          path="/board/:boardId/edit"
          element={
            <MainLayout
              path="/board/:boardId/edit"
              main={<BoardEditPresenter />}
            />
          }
        />
        <Route
          path="/notice"
          element={
            <MainLayout path="/notice" main={<h1>공지 게시판이다 나가라</h1>} />
          }
        />
        <Route
          path="/QandA"
          element={<MainLayout main={<h1>{'Q & A니까 나가'}</h1>} />}
          path="/board/write"
          element={<MainLayout main={<BoardWritePresenter />} />}
        />
        <Route
          path="/QandA"
          element={
            <MainLayout path="/QandA" main={<h1>{'Q & A니까 나가'}</h1>} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
