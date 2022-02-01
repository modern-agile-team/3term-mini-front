import React from "react";
import styled from "styled-components";
import BasicProfile from "../../style/image/BasicProfile.png"

const WholeWrap = styled.div`
  padding-top: 20px;
  & :last-child {
    border-bottom: none;
  }
`

const TitleDiv = styled.span`
  height: 23px;

  padding: 15px;
  margin-bottom: 12px;
  font-weight: bold;  
`

const WrapToFlex = styled.div`
  display: flex;
  align-items: center;

  padding-left: 15px;
  margin-bottom: 24px;
`//row

const ImgWriterDateWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: flex-end;

  margin-top: 12px;
`//row

const WriterImage = styled.img`
  width: 25px;
  height: 25px;

  margin-right: 5px;
`//감싼 거의 패딩

const WriterDiv = styled.span`
  height: 20px;
  font-weight: 400;
  font-size: 14px;

  margin-right: 10px;
`//감싼 거의 패딩

const DateAndTimeDiv = styled.span`
  height: 17px;
  color: #A6A6A6;
  display: flex;
  align-items: flex-end;
  

  font-weight: 300;
  font-size: 12px;
`

const CommentsAndViewsWrap = styled.div`
  height: 17px;
  display: flex;

  margin-left: 463px;
  font-weight: 300;
  font-size: 12px;
`

const CommentsNumDiv = styled.div`
  margin-right: 30px;
`

const ViewsDiv = styled.div`
  margin-right: 19px;
`

const BottomLine = styled.div`
  width: 816px;
  border: 0.5px solid #D6D6D6;

`


function PostList() {

  const postsInfo = {
    postsData: 
    [
      { postId: 1, 
        postTitle: "Hi Front End", 
        writer: "한결", 
        dateAndTime: "02/01 14:32", 
        conmmentNum: "128개",
        views: "587회"
      },

      { postId: 2, 
        postTitle: "Hi Back End", 
        writer: "승범", 
        dateAndTime: "01/31 18:52", 
        conmmentNum: "78개",
        views: "389회"
      },

      { postId: 3, 
        postTitle: "Hi Design", 
        writer: "재희", 
        dateAndTime: "02/02 09:00", 
        conmmentNum: "117개",
        views: "488회"
      },
    ]
  }


  const mapToWrite = () => postsInfo.postsData.map((post) => {
    return (
      <>
      <WholeWrap key={post.postId}>
        <TitleDiv>{post.postTitle}</TitleDiv><br/>
        <WrapToFlex>
          <ImgWriterDateWrap>
            <WriterImage src={BasicProfile}/>
            <WriterDiv>{post.writer}</WriterDiv>
            <DateAndTimeDiv>{post.dateAndTime}</DateAndTimeDiv>
          </ImgWriterDateWrap>
          <CommentsAndViewsWrap>
            <CommentsNumDiv>댓글 수 {post.conmmentNum}</CommentsNumDiv>
            <ViewsDiv>조회수 {post.views}</ViewsDiv>
          </CommentsAndViewsWrap>
        </WrapToFlex>
        <BottomLine/>
      </WholeWrap>
      </>
    )
  })

  return (
    <>
      {mapToWrite()}
    </>
  )
}

export default PostList;