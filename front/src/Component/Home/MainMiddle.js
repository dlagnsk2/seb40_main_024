import 'animate.css';
import styled from 'styled-components';
import { MainA, MainB, MainC, MainD } from './MainImgData';
import { Fade, JackInTheBox } from 'react-awesome-reveal';
import {
  ButtonLogin,
  ButtonSignup,
  ButtonCommunity,
  ButtonGoal,
  ButtonAsset,
} from '../../Component/Common/Button';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';

const MiddleDiv = styled.div`
  margin: 0 auto;
  div {
    height: auto;
  }
  .div1 {
    text-align: center;
    height: 1300px;
  }
  .Main1 {
    padding-top: 100px;
    margin-top: 80px;
  }
  .div2 {
    text-align: center;
    height: 1200px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .div3 {
    display: flex;
    justify-content: center;
    height: 1000px;
    .span {
      margin-top: 150px;
      span {
        font-size: 30px;
        color: #606060;
        font-weight: 700;
      }
    }
    img {
      width: 640px;
      height: 453px;
    }
  }
  .div4 {
    display: flex;
    justify-content: center;
    text-align: end;
    height: 1000px;
    .span {
      margin-top: 200px;
      span {
        font-size: 30px;
        color: #606060;
        font-weight: 700;
      }
    }
    img {
      width: 600px;
      height: 600px;
    }
  }
  .div5 {
    text-align: center;
    height: 400px;
    span {
      font-size: 30px;
      color: #606060;
      font-weight: 700;
    }
  }
  button {
    margin: 10px;
  }
  .MainAImg {
    display: flex;
    /* flex-wrap: wrap; */
  }
  .MainAImgs {
    width: 100%;
    height: 700px;
    margin-top: 10px;
    border-radius: 30px;
  }
  /* .MainBImgs {
    width: 100%;
    height: 300px;
    margin: 10px;
    border-radius: 20px;
  } */
  .MainBImgs {
    display: inline-block;
    width: auto !important;
    max-width: 95%;
    height: auto !important;
    margin: 10px;
    border-radius: 20px;
  }
  @media only screen and (min-width: 768px) {
    .MainThirdResponsive {
      display: none;
    }
    .MainThirdResponsiveHeader {
      display: none;
    }

    .MainFourthResponsive {
      display: none;
    }
    .MainFourthResponsiveHeader {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .MainThird {
      display: none;
    }
    .MainFourth {
      display: none;
    }
    .MainThirdResponsive {
      padding: 0px 50px;
      align-items: center;
      margin-bottom: 20px;
    }
    .MainThirdResponsiveHeader {
      padding: 0px 50px;
      align-items: center;
      margin-bottom: 20px;
      color: #606060;
      font-size: 30px;
      font-weight: 700;
    }
    .MainFourthResponsive {
      padding: 0px 100px;
      margin-bottom: 20px;
    }
    .MainFourthResponsiveHeader {
      padding: 0px 100px;
      font-size: 30px;
      color: #606060;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 320px) {
    .hojumoney {
      font-size: 17px;
    }
    .MainAImgs {
      padding: 10px;
    }

    .MainThirdResponsive {
      padding: 0px 10px;
      font-size: 15px;
    }
    .MainThirdResponsiveHeader {
      padding: 0px 10px;
      font-size: 25px;
    }
    .MainFourthResponsive {
      padding: 0px 90px;
      font-size: 15px;
    }
    .MainFourthResponsiveHeader {
      padding: 0px 100px;
      font-size: 25px;
    }
    .div5 {
      font-size: 25px;
    }
    .startTxt {
      font-size: 15px;
    }
  }
`;

const Middle = () => {
  const authCtx = useContext(AuthContext);
  const islogin = authCtx.isLoggedIn;

  return (
    <MiddleDiv>
      <div id="1" className="Main1 div1">
        <Fade cascade damping={0.5} duration={1000}>
          <span
            style={{
              color: '#FFD24C',
              fontSize: '50px',
              fontWeight: 'bold',
            }}
          >
            호주머니
          </span>
        </Fade>
        <Fade cascade duration="1300">
          <h2
            className="hojumoney"
            style={{
              marginTop: '40px',
              marginBottom: '30px',
              color: '#92b4ec',
            }}
          >
            누구나 꿈꾸는 자산전문가
            <br />
            이곳에서 저희와 함께 이루어 보세요
          </h2>
          {MainA.map((el, idx) => {
            return (
              <div key={idx} className="MainAImg">
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainAImgs"
                    />
                  );
                })}
              </div>
            );
          })}
        </Fade>
      </div>
      <div id="2" className="div2">
        <Fade direction="left" duration="1300">
          {MainB.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
                <h2
                  style={{
                    marginTop: '50px',
                    color: '#92b4ec',
                  }}
                >
                  자산 관리의 모든것,
                  <br />그 이상을 만들어내는 호주머니
                  <br />
                  대한민국 어디서나
                  <br />
                  함께 관리하고 즐기는
                  <br />
                  간편한 시스템
                </h2>
              </div>
            );
          })}
        </Fade>
      </div>

      <Fade direction="right" duration="1300">
        <div className="MainThirdResponsive">
          <span className="MainThirdResponsiveHeader">자산관리채널</span>
          <h2
            className="MainThirdResponsive"
            style={{
              marginRight: '50px',
              color: '#92b4ec',
              marginTop: '20px',
            }}
          >
            누구나 무료로 자산을 입력하고
            <br />
            그래프로 한눈에 파악하고
            <br />
            서비스를 이용할 수 있는 플랫폼
          </h2>
        </div>
      </Fade>
      <div id="3" className="div3">
        <Fade direction="right" duration="1300">
          <div className="span">
            <span className="MainThird">자산관리채널</span>
            <h2
              className="MainThird"
              style={{
                marginRight: '50px',
                color: '#92b4ec',
                marginTop: '20px',
              }}
            >
              누구나 무료로 자산을 입력하고
              <br />
              그래프로 한눈에 파악하고
              <br />
              서비스를 이용할 수 있는 플랫폼
            </h2>
          </div>

          {MainC.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
              </div>
            );
          })}
        </Fade>
      </div>
      <Fade>
        <div className="span">
          <span className="MainFourthResponsiveHeader">커뮤니티</span>
          <h2
            className="MainFourthResponsive"
            style={{
              color: '#92b4ec',
              marginTop: '20px',
            }}
          >
            다양한 사람들과
            <br />
            자산을 공유하며
            <br />
            편리한 소통할 수 있는
            <br />
            안전한 플랫폼
          </h2>
        </div>
      </Fade>
      <div id="4" className="div4">
        <Fade direction="left" duration="1300">
          {MainD.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="span">
            <span className="MainFourth">커뮤니티</span>
            <h2
              className="MainFourth"
              style={{
                marginLeft: '50px',
                color: '#92b4ec',
                marginTop: '20px',
              }}
            >
              다양한 사람들과
              <br />
              자산을 공유하며
              <br />
              편리한 소통할 수 있는
              <br />
              안전한 플랫폼
            </h2>
          </div>
        </Fade>
      </div>
      <div id="5" className="div5">
        <JackInTheBox duration="1300">
          <span className="start">출발하기</span>
          <h2
            className="startTxt"
            style={{
              color: '#92b4ec',
              marginTop: '20px',
            }}
          >
            지금바로 저희와 함께
            <br />
            부자가 되기위한
            <br />
            길을 떠나볼까요?
          </h2>
          <div>
            {islogin ? (
              <>
                <ButtonAsset />
                <ButtonGoal />
                <ButtonCommunity />
              </>
            ) : (
              <>
                <ButtonLogin />
                <ButtonSignup />
              </>
            )}
          </div>
        </JackInTheBox>
      </div>
    </MiddleDiv>
  );
};

export default Middle;
