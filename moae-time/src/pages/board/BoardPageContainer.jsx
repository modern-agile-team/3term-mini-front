import { React, useState, useEffect } from 'react';
import BoardPagePresenter from './BoardPagePresenter';
import dummyBoard from '../../apis/dummyBoard.json';


function BoardPage() {
  
  const [state, setState] = useState()

  return (
  <BoardPagePresenter />
  );
}

export default BoardPage;
