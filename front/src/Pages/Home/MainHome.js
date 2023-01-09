/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import MainMiddle from '../../Component/Home/MainMiddle';
import MainFooter from '../../Component/Home/MainFooter';

// #020626 다크모드 배경색상
// #ffffff 라이트모드 배경색상
const MainDiv = styled.div`
  /* background-color: #020626; */
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Marginb = styled.div`
  margin-bottom: 30px;
`;

const MainHome = () => {
  return (
    <MainDiv>
      <Marginb></Marginb>
      <ContentDiv>
        <MainMiddle />
      </ContentDiv>
      <MainFooter />
    </MainDiv>
  );
};

export default MainHome;
