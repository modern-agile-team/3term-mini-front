import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, HotBoard, Text, Button } from '../../components';
import { Row, Col } from '../../style';

const ContentBox = styled(Box)`
  height: 630px;
  max-height: 630px;

  & :first-child {
    border-bottom: 1px solid #d6d6d6;
    padding-bottom: 5px;
  }
  & :last-child {
    border: none;
  }
`;

const MainContent = styled(Col)`
  max-height: 580px;
  overflow: scroll;
`;

const MainInput = styled.textarea`
  width: 100%;
  height: 580px;
  overflow: scroll;
  font-size: 20px;
  outline: none;
  background-color: rgba(1, 1, 1, 0);
  resize: none;
`;

const Input = styled.input`
  width: 300px;
  padding: 0px;
  border: none;
  font-size: 20px;
  outline: none;
  background-color: rgba(1, 1, 1, 0);
`;

function BoardEditPresenter() {
  const [content, setContent] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque. consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam i consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit ea voluptatum placeat quis qui laudantium, facilis, quod fuga explicabo, autem a tempora at aliquid maxime aliquam ipsa. Repellendus, cumque.psa. Repellendus, cumque.'
  );

  const editContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8" align="flex-start">
        <Row padding="0 0 5px">
          <Box padding="15px">
            <div>
              <Text color={'gray1'} size={'size6'} weight={'medium'}>
                게시글 수정
              </Text>
            </div>
          </Box>
        </Row>
        <Row padding={'0 0 5px'}>
          <Box width="len8" padding="15px">
            <Row>
              <Input type="text" placeholder="게시글 제목"></Input>
              <Button width={'len18'} borderRadius={'default'} padding={'len1'}>
                킄
              </Button>
            </Row>
          </Box>
        </Row>
        <Col>
          <ContentBox>
            <Row padding={'15px 700px 15px 15px'}>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size6'}
              >
                B
              </Button>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size8'}
              >
                í
              </Button>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size10'}
              >
                ū
              </Button>
            </Row>
            <MainContent padding={'15px'}>
              <MainInput
                type="text"
                value={content}
                onChange={editContent}
              ></MainInput>
            </MainContent>
          </ContentBox>
        </Col>
      </Col>
      <Box width="len3">
        <HotBoard />
      </Box>
    </Row>
  );
}

export default BoardEditPresenter;
