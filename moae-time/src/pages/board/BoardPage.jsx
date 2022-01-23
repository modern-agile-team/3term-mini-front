import React from 'react';
import "../../style/boardLayout.css";

function BoardHead({ children }) {
  return (
    <div className='boardHead'>{ children }</div>
  )
}

function BoardPage() {
  return (
    <>
      <div className='boardHead'>
        I'm Head of Board Page!<br/>
        <BoardHead>Children TEST</BoardHead>
      </div>
    </>
  );
}

export default BoardPage;
