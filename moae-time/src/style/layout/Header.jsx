import React from 'react';

const HeaderLayout = ({ children }) => {
  return <div className="Header">{children}</div>;
};

function HeaderContents() {
  return <HeaderLayout>test!!!</HeaderLayout>;
}

export default HeaderContents;
