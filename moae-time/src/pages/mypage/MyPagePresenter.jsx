import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Box, PageNation } from '../../components';
import { Row, Col } from '../../style';
import { Link } from 'react-router-dom';
import dummyBoard from '../../apis/dummyBoard.json';
import SchoolImg from '../../style/image/school.png';
import MajorImg from '../../style/image/major.png';
import BoardImg from '../../style/image/board.png';
import LikeImg from '../../style/image/like.png';
import InputImage from '../../style/image/inputImage.png';

const MyBoardsWrapper = styled(Row)`
  padding: 0 0 13px;
  & > div {
    border-top: 1px #d6d6d6 solid;
  }
`;

const ProfileCircle = styled(Box)`
  width: 155px;
  height: 155px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Img = styled.div`
  width: 27px;
  height: 25px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center auto;
  margin-bottom: 15px;
`;

const ProfileCol = styled(Col)`
  & > * {
    margin-bottom: 5px;
  }
  & :last-child {
    margin-bottom: 0;
  }
`;

const SpecsRow = styled(Col)`
  margin-bottom: 5px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center auto;
  cursor: pointer;
`;

function MyPagePresenter() {
  const [myPageNation, setMyPageNation] = useState(0);

  const clickPageNationOne = () => {
    setMyPageNation(0);
  };

  const clickPageNationTwo = () => {
    setMyPageNation(1);
  };

  const clickPageNationThr = () => {
    setMyPageNation(2);
  };

  const clickRight = () => {
    if (myPageNation < 2) {
      setMyPageNation(myPageNation + 1);
    } else {
      setMyPageNation(0);
    }
  };

  const clickLeft = () => {
    if (myPageNation > 0) {
      setMyPageNation(myPageNation - 1);
    } else {
      setMyPageNation(2);
    }
  };

  const start = myPageNation * 14;
  const end = myPageNation * 14 + 14;

  const showMyBoards = () =>
    dummyBoard.slice(start, end).map((post) => {
      return (
        <MyBoardsWrapper>
          <Row padding={'13px 13px 0'}>
            <Text size={'size7'} color={'gray2'}>
              <Link to={'/board'}>{post.title}</Link>
            </Text>
            <Text size={'size3'} color={'gray4'}>
              {post.inDate}
            </Text>
          </Row>
        </MyBoardsWrapper>
      );
    });

  const specs = [
    {
      id: 1,
      name: 'school',
      content: 'School',
      img: SchoolImg,
    },
    {
      id: 2,
      name: 'major',
      content: 'Major',
      img: MajorImg,
    },
    {
      id: 3,
      name: 'boards',
      content: 'Boards',
      img: BoardImg,
    },
    {
      id: 4,
      name: 'likes',
      content: 'likes',
      img: LikeImg,
    },
  ];

  const specButtons = () =>
    specs.map((spec) => (
      <Col>
        <Img img={spec.img}></Img>
        <Text size={'size5'} color={'gray2'}>
          {spec.content}
        </Text>
      </Col>
    ));

  const editList = [
    {
      id: 1,
      name: 'certification',
      content: '학교 인증',
    },
    {
      id: 2,
      name: 'change password',
      content: '비밀번호 변경',
    },
    {
      id: 3,
      name: 'change Email',
      content: '이메일 변경',
    },
    {
      id: 4,
      name: 'Q and A',
      content: '문의사항',
    },
    {
      id: 5,
      name: 'notice',
      content: '공지사항',
    },
    {
      id: 6,
      name: 'terms',
      content: '이용 약관',
    },
  ];

  const showEditList = () =>
    editList.map((list) => (
      <MyBoardsWrapper key={list.id}>
        <Row padding={'13px 13px 0'}>
          <Text size={'size7'} color={'gray2'}>
            <Link to={'/notice'}>{list.content}</Link>
          </Text>
          {/* <Img
            img={ButtonImg}
            alt=""
            onClick={() => {
              alert(list.content);
            }}
          /> */}
        </Row>
      </MyBoardsWrapper>
    ));

  return (
    <Col padding={'25px 172px 32px'}>
      <Box width={'len11'} padding={'16px'}>
        <h2>마이페이지</h2>
      </Box>
      <Row padding={'5px 0 0'}>
        <Col width={'len4'}>
          <ProfileCol padding={'30px 0 21px'}>
            <ProfileCircle>
              <Col>
                <ProfileImg
                  img={InputImage}
                  onClick={() => {
                    alert('input ur image');
                  }}
                />
              </Col>
            </ProfileCircle>
            <Col
              onClick={() => {
                alert('프로필 편집');
              }}
            >
              <Text size={'size3'} color={'gray4'}>
                프로필 편집
              </Text>
            </Col>
            <Text size={'size11'} color={'gray2'}>
              사용자 이름
            </Text>
          </ProfileCol>
          <SpecsRow padding={''}>
            <Box padding={'10px'}>
              <Row>{specButtons()}</Row>
            </Box>
          </SpecsRow>
          <Box>{showEditList()}</Box>
        </Col>
        <Col width={'len21'}>
          <Box>
            <Text color={'green'} size={'size7'} padding={'len7'}>
              내가 쓴 게시물
            </Text>
            {showMyBoards()}
            <Row padding={'0 0 20px 250px'}>
              <PageNation
                clickPageNationOne={clickPageNationOne}
                clickPageNationTwo={clickPageNationTwo}
                clickPageNationThr={clickPageNationThr}
                clickLeft={clickLeft}
                clickRight={clickRight}
              />
            </Row>
          </Box>
        </Col>
      </Row>
    </Col>
  );
}

export default MyPagePresenter;
