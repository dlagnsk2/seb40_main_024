import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import {
  AddCommentBtn,
  ModifyCommentBtn,
  DeleteCommentBtn,
} from '../Common/Button';
// eslint-disable-next-line no-unused-vars
import ProfileIcon from '../Member/ProfileIcon';
// import Quill from '../Common/Quill';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// const CommentBox = styled.div`
//   display: flex;
//   height: 200px;
//   width: 700px;
//   /* border: solid 2px #9ed5c5;
//   border-radius: 10px;
//   font-size: 20px;
//   &:focus {
//     outline: none;
//     border-color: #8ec3b0;
//     box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
//   } */
// `;

// const ReviseBtn = styled.button`
//   height: 30px;
//   width: 100px;
//   cursor: pointer;
// `;

// const DeleteBtn = styled.button`
//   height: 30px;
//   width: 100px;
//   cursor: pointer;
// `;

// const ProfileIcon = styled.div`
//   box-sizing: border-box;
//   height: 70px;
//   width: 70px;
//   margin-top: 5px;
/* position: absolute;
  top: 7%;
  left: 30%; */
/* transform: translate(-50%,-50%) */
/* padding: 130px; */
/* border: solid 1px black;
  border-radius: 100%; */
// `;
const TotalComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  min-height: 800px;
  margin-top: 100px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
`;
const BtnContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 700px;
  margin-bottom: 10px;
`;
// const QuillContain = styled.div`
//   display: flex;
//   width: 800px;
//   height: auto;
//   margin-bottom: 20px;
// `;
const CommentContain = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 5px;
  margin-top: 20px;
  border-top: 3px solid #def5e5;
  border-bottom: 3px solid #def5e5;
  line-height: normal;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  /* border: 1px solid black; */
`;

const CommentInput = styled.input`
  width: 100%;
  height: 200px;
  border: 3px solid #def5e5;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  font-size: 17px;
`;
const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid #8ec3b0;
`;
const Id = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-left: 5px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const EtcBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
`;
const Date = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 20px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const At = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 10px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-left: 5px;
  padding-top: 5px;
  overflow: auto;
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModifyInput = styled.input`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 5px;
  margin-top: 20px;
  border-top: 3px solid #def5e5;
  border-bottom: 3px solid #def5e5;
  line-height: normal;
`;

//http://localhost:3000/boardcontentpage/:id
const Comments = () => {
  // const { id } = useParams();
  // console.log(id.slice(1));
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const handlerText = (e) => {
    // e.preventDefault();
    const data = e.target.value;
    setText(data);
    console.log(data.length);
    // if (data.length < 10) {
    //   return;
    // }
  };

  // const onClick = (e) => {
  //   console.log(e.target.dataset);
  //   e.target;
  // };

  // const handlerSubmit = () => {
  //   setText(text);
  //   console.log('submit');
  // };
  //8080/board/{board_id}

  // console.log(comments);

  // console.log(url + `/board/${id}`);

  const commentPost = async () => {
    const data = {
      body: text,
    };
    try {
      const posts = await axios.post(`${url}/board/${id}/comment`, data);
      setText('');
      console.log(posts);
      return;
      // if(posts.data === " " )
    } catch (err) {
      console.log('error', err);
    }
  };

  const commentPatch = async (e) => {
    const data = {
      body: '댓글 수정테스트입니다',
    };
    try {
      const patch = await axios.patch(
        `${url}/board/${id}/comment/${e.target.dataset.id}`,
        data
      );
      console.log('Patch', patch);
      console.log('dataset.id', e.target.dataset.id);
      return;
    } catch (err) {
      console.log('patcherror', err);
    }
  };

  const commentDelete = async (e) => {
    try {
      const res = await axios.delete(
        `${url}/board/${id}/comment/${e.target.dataset.id}`
      );
      console.log('dataset.id', e.target.dataset.id);
      console.log('삭제', res);
      return;
    } catch (err) {
      console.log('deleteerror', err);
    }
  };
  useEffect(() => {
    const commentGet = async () => {
      try {
        const res = await axios.get(`${url}/board/${id}`);

        setComments(res.data.commentsPosted);
        const reverseComments = res.data.commentsPosted.sort((a, b) => {
          return new window.Date(b.createdAt) - new window.Date(a.createdAt);
        });
        console.log('res', res);

        setComments(reverseComments);

        return;
      } catch (err) {
        console.log('error', err);
      }
    };
    commentGet();
  }, [commentDelete]);
  // console.log(comments);
  // axios
  //   .get(url + '/board/2')
  //   .then((res) => {
  //     console.log('응답', res.data.commentsPosted[0].commentId);
  //     setComment(res.data.commentsPosted);
  //     console.log('comments', comments);
  //   })
  //   .catch((error) => console.log('에러', error));

  // useEffect(() => {
  //   Comments();
  // }, []);

  return (
    <>
      <TotalComment>
        <BtnContain>
          <AddCommentBtn commentPost={commentPost} />
          {/* <AddCommentBtn /> */}
        </BtnContain>
        {/* <QuillContain> */}
        <CommentInput
          type="text"
          value={text}
          // value={text || ''}
          placeholder="댓글을 작성해주세요."
          onChange={handlerText}
        ></CommentInput>
        {/* </QuillContain> */}
        <ModifyInput></ModifyInput>
        {comments.map((comment, id) => {
          return (
            <CommentContain key={id}>
              <ImageBox>
                <ProfileIcon />
              </ImageBox>
              <CommentBox>
                <IdEtcBox>
                  <Id>ID: {comment.commentId}</Id>
                </IdEtcBox>
                <EtcBox>
                  <Date>{comment.createdAt.slice(0, 10)}</Date>
                  <At>{comment.createdAt.slice(11, 19)}</At>
                </EtcBox>
                <TextBox>
                  <p>{comment.body}</p>
                </TextBox>
              </CommentBox>

              <BtnBox>
                <ModifyCommentBtn
                  commentPatch={commentPatch}
                  id={comment.commentId}
                />
                <DeleteCommentBtn
                  commentDelete={commentDelete}
                  // dataset-id={comment.commentId}
                  id={comment.commentId}
                />
              </BtnBox>
            </CommentContain>
          );
        })}
      </TotalComment>
    </>
  );
};

export default Comments;
