import { React, useState, useEffect } from 'react';
import BoardPagePresenter from './BoardPagePresenter';
import dummyBoard from '../../apis/dummyBoard.json';

function BoardPage(props) {
  return <BoardPagePresenter data={props} />;
}

export default BoardPage;
