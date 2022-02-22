import { React, useRef, useEffect, useState } from 'react';
import { Box } from '..';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div.attrs(
  ({ modalState, width, height, topMargin, leftMargin }) => ({
    state: modalState,
    row: height,
    col: width,
    top: topMargin,
    left: leftMargin,
  })
)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  position: fixed;
  top: ${(props) => props.topMargin};
  left: ${(props) => props.leftMargin};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  display: ${(props) => (props.modalState ? 'block' : 'none')};

  background-color: #f9f9f9;
  border: 1px solid #d6d6d6;
`;

const ModalBackGround = styled.div.attrs(({ modalState }) => ({
  state: modalState,
}))`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  display: ${(props) => (props.modalState ? 'block' : 'none')};

  background-color: rgba(97, 94, 94, 0.7);
`;

const ReportBoxAndTextWrap = styled.div`
  width: 250px;
  height: 20px;

  margin-left: 75px;
  margin-bottom: 7px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button.attrs(({ height, width, margin }) => ({
  row: height,
  col: width,
  margin: margin,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  margin: ${(props) => props.margin};
`;

function BoardReportModal(props) {
  const modalEl = useRef();
  const { 
    boardReport,
    setBoardReport,
    boardOneState
  } = props;

  const handleClickOutside = ({ target }) => {
    if (boardReport && !modalEl.current.contains(target)) {
      setBoardReport(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [boardReport]);

  const reportTypes = [
    {
      no: 1,
      content: '욕설및비방',
    },
    {
      no: 2,
      content: '개인정보요구',
    },
    {
      no: 3,
      content: '사기',
    },
    {
      no: 4,
      content: '사적인연락',
    },
    {
      no: 5,
      content: '도배',
    },
    {
      no: 6,
      content: '선정적인게시물',
    },
    {
      no: 7,
      content: '폭력적위협',
    },
  ];

  const [checkState, setCheckState] = useState([]);

  const checkedHandler = (checked, id) => {
    if (checkState.length < 3) {
      if (checked) {
        setCheckState([...checkState, id]);
      } else {
        setCheckState(checkState.filter((el) => el !== id));
      }
    } else {
      setCheckState(checkState.filter((el) => el !== id));
      alert('3개 이상 안됨');
    }
  };

  const [reportDescription, setReportDescription] = useState('');
  const onChange = (e) => {
    setReportDescription(e.target.value);
    console.log('reportModal :>> ', boardOneState.boardNo);
  };

  const drawing = () => {
    return reportTypes.map((item) => (
      <ReportBoxAndTextWrap key={item.no}>
        <Box wnoth='16px' height='16px' margin='0px 0px 12px 0px'>
          <input
            type='checkbox'
            onChange={(e) => checkedHandler(e.currentTarget.checked, item.no)}
            checked={checkState.includes(item.no) ? true : false}
          />
        </Box>
        <Box width='224px' height='16px' margin='0px 0px 20px 0px'>
          {item.content}
        </Box>
      </ReportBoxAndTextWrap>
    ));
  };

  const onClick = () => {
    boardReport && setBoardReport(false);
  }


  const sendReport = () => {
    axios
      .post(`http://3.36.125.16:8080/moae/report/board`, 
      {
        "reportedBoardNo": boardOneState.boardNo,
        "reportUserNo": 100,
        "description": `${reportDescription}`,
        "reportId": checkState,
      })
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err.response)
      });
  };
  // , boardReport
  return (
    <>
      {boardReport && (
        <ModalBackGround modalState={boardReport}>
          <Modal
            ref={modalEl}
            modalState={boardReport}
            width='400px'
            height='480px'
            topMargin='121px'
            leftMargin='556px'
          >
            <Btn
              width='9.69px'
              height='9.69px'
              margin='21.66px 20.66px 0px 369.66px'
              onClick={() => onClick}
            >
              x
            </Btn>
            <Box width='250px' height='23px' margin='27px 75px 5px 75px' />
            <Box width='250px' height='14px' margin='0px 75px 15px 75px' />
            {drawing()}
            <input onChange={onChange} placeholder='내용 작성' />
            <Btn
              width='46px'
              height='30px'
              margin='15px 177px 27px'
              onClick={() => sendReport()}
            >
              전송
            </Btn>
          </Modal>
        </ModalBackGround>
      )}
    </>
  );
}

export default BoardReportModal;
