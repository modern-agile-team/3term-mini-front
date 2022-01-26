import { React, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const TestDiv = styled.div`
  width: 300px;
  /* height: 300px; */

  background-color: black;
`;

function BigModal(props) {
  const [modalState, setModalState] = useState(false);

  const { children } = props;
  return (
    <>
      <button onClick={() => setModalState(true)}>Modal Open</button>
      <Modal
        isOpen={modalState}
        style={{
          overlay: {
            textAlign: "center",
            backgroundColor: "rgba(97, 94, 94, 0.7)",
          },
          content: {
            color: "lightsteelblue",
            width: "907px",
            height: "590px",
            position: "fix",
            margin: "64px 302px 0px 300px",
          },
        }}
      >
        This is Modal content
        <button onClick={() => setModalState(false)}>Modal Close</button>
        {children}
      </Modal>
    </>
  );
}

export default BigModal;
