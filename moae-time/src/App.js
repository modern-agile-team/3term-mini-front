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

function App() {
  return (
    <>
      <GlobalStyle />
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
              main={<BoardEditPresenter path="/board/:boardId/edit" />}
            />
          }
        />
        <Route
          path="/board/write"
          element={
            <MainLayout main={<BoardEditPresenter path="/board/write" />} />
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
