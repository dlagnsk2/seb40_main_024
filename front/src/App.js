import { useRecoilValue, useSetRecoilState } from 'recoil';
import { darkMode } from './recoil/recoil';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
// import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/Home/MainHome';
import { AssetChange } from './Pages/Asset/AssetChange';
import { LoginPage } from './Pages/Member/LoginPage';
import { SignupPage } from './Pages/Member/SignupPage';
import { ForgotPasswordPage } from './Pages/Member/ForgotPasswordPage';
import { BoardPage } from './Pages/Board/BoardPage';
import Board from './Pages/Board/Board';
import MyPage from './Pages/Member/MyPage';
import BoardContentPage from './Pages/Board/BoardContentPage';
import AssetTargetPage from './Pages/Asset/AssetTargetPage';
import PaymentConfirmPage from './Pages/Pay/PaymentConfirmPage';
import PaymentPage from './Pages/Pay/PaymentPage';
import SubscriptionPage from './Pages/Pay/SubscriptionPage';
import ModifyBoard from './Pages/Board/ModifyBoard';
import { Error } from './Pages/ErrorPage/Error';
import { LongNavbarBox, MiniNavbarBox } from './Component/Common/NavebarRev';

// #    background-color: #f2f5f7;
// #    background-color: #020626;

const DeviceSizes = {
  mobileWidth: '320px',
  tabletWidth: '768px',
  etcWidth: '999999px',
};

const Device = {
  mobileWidth: `screen and (max-width: ${DeviceSizes.mobileWidth})`,
  tabletWidth: `screen and (max-width: ${DeviceSizes.tabletWidth})`,
  laptopWidth: `screen and (max-width: ${DeviceSizes.etcWidth})`,
};

const darkTheme = {
  bgColor: '#020626',
  color: '#f2f5f7',
};

const lightTheme = {
  bgColor: '#f2f5f7',
  color: '#020626',
};

const darkDeviceTheme = {
  Device,
  darkTheme,
};

const lightDeviceTheme = {
  Device,
  lightTheme,
};

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: center;
  margin: auto;
  padding: auto;
  width: 45px;
  height: 45px;
  background-color: transparent;
  font-size: 35px;
  font-weight: bold;
  color: orange;
  cursor: pointer;
  :hover {
    color: yellow;
  }
`;

const LightDiv = styled.div`
  width: auto;
  height: auto;
  color: #020626;
  @media ${({ theme }) => theme.Device.etcWidth} {
    display: flex;
    flex-direction: column;

    /* min-height: 1500px; */
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.lightTheme.bgColor};
  }

  @media ${({ theme }) => theme.Device.tabletWidth} {
    display: flex;
    height: 100%;
    /* min-height: 1500px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.lightTheme.bgColor};
  }

  @media ${({ theme }) => theme.Device.mobileWidth} {
    display: flex;
    /* min-height: 1500px; */
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.lightTheme.bgColor};
  }
`;

const DarkDiv = styled.div`
  width: auto;
  height: auto;
  color: #f2f5f7;
  @media ${({ theme }) => theme.Device.etcWidth} {
    display: flex;
    flex-direction: column;

    min-height: 1500px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.darkTheme.bgColor};
  }

  @media ${({ theme }) => theme.Device.tabletWidth} {
    display: flex;
    min-height: 1500px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.darkTheme.bgColor};
  }

  @media ${({ theme }) => theme.Device.mobileWidth} {
    display: flex;
    min-height: 1500px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.darkTheme.bgColor};
  }
`;

// console.log('window.innerHeight', `${window.innerHeight}px`);
function App() {
  const darkmode = useRecoilValue(darkMode);
  const setdarkmode = useSetRecoilState(darkMode);

  const DarkModeHandler1 = () => {
    setdarkmode(!darkmode);
  };

  return (
    <>
      <ThemeProvider theme={darkmode ? darkDeviceTheme : lightDeviceTheme}>
        <LongNavbarBox
          ButtonBox={ButtonBox}
          DarkModeHandler1={DarkModeHandler1}
        />
        <MiniNavbarBox
          ButtonBox={ButtonBox}
          DarkModeHandler1={DarkModeHandler1}
        />

        {darkmode ? (
          <DarkDiv>
            <Routes>
              <Route path="*" element={<Error />}></Route>
              <Route path="/" element={<MainHome />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
              <Route path="/board" element={<BoardPage />} />
              <Route
                path="/boardcontentpage/:id"
                element={<BoardContentPage />}
              />

              {/* <Route path="/tsassetchange" element={<TSAssetChange />} /> */}
              <Route path="/assetchange" element={<AssetChange />} />
              <Route path="/boardpost" element={<Board />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/modifyboard/:id" element={<ModifyBoard />} />
              <Route path="/assettarget" element={<AssetTargetPage />} />

              {/* <Route path="/assettargetpage" element={<AssetTargetTest />} /> */}
              {/* {authCtx.isLoggedIn && (
  <Route path="/assetchange" element={<AssetChange />} />
)}
{authCtx.isLoggedIn && <Route path="/boardpost" element={<Board />} />}
{authCtx.isLoggedIn && <Route path="/mypage" element={<MyPage />} />}
{authCtx.isLoggedIn && (
  <Route path="/modifyboard/:id" element={<ModifyBoard />} />
)}
{authCtx.isLoggedIn && (
  <Route path="/assettarget" element={<AssetTargetTest />} />
)}
{authCtx.isLoggedIn && (
  <Route path="/assettargetpage" element={<AssetTargetPage />} />
)}

    {/*
subscriptionpage는 ?
paymentpage는 결제하는 페이지
paymentconfirmpage는 페이지 대신 모달로 대체

네브바에 신문구독 같은 네이밍으로 넣어두고
눌렀을때 -> 구독결제페이지로 이동, 구독을 이미 한 상태일 경우
세부 구독 정보 페이지로 이동?
-> 이렇게 할 경우 마이페이지에서 구독페이지 이동버튼이 있어야함
 */}
              <Route
                path="/paymentconfirmpage"
                element={<PaymentConfirmPage />}
              />
              <Route path="/paymentpage" element={<PaymentPage />} />
              <Route path="/subscriptionpage" element={<SubscriptionPage />} />
            </Routes>
          </DarkDiv>
        ) : (
          <LightDiv>
            <Routes>
              <Route path="*" element={<Error />}></Route>
              <Route path="/" element={<MainHome />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
              <Route path="/board" element={<BoardPage />} />
              <Route
                path="/boardcontentpage/:id"
                element={<BoardContentPage />}
              />

              <Route path="/assetchange" element={<AssetChange />} />
              <Route path="/boardpost" element={<Board />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/modifyboard/:id" element={<ModifyBoard />} />
              <Route path="/assettarget" element={<AssetTargetPage />} />

              {/* <Route path="/assettargetpage" element={<AssetTargetTest />} /> */}
              {/* {authCtx.isLoggedIn && (
  <Route path="/assetchange" element={<AssetChange />} />
)}
{authCtx.isLoggedIn && <Route path="/boardpost" element={<Board />} />}
{authCtx.isLoggedIn && <Route path="/mypage" element={<MyPage />} />}
{authCtx.isLoggedIn && (
  <Route path="/modifyboard/:id" element={<ModifyBoard />} />
)}
{authCtx.isLoggedIn && (
  <Route path="/assettarget" element={<AssetTargetTest />} />
)}
{authCtx.isLoggedIn && (
  <Route path="/assettargetpage" element={<AssetTargetPage />} />
)}

    {/*
subscriptionpage는 ?
paymentpage는 결제하는 페이지
paymentconfirmpage는 페이지 대신 모달로 대체

네브바에 신문구독 같은 네이밍으로 넣어두고
눌렀을때 -> 구독결제페이지로 이동, 구독을 이미 한 상태일 경우
세부 구독 정보 페이지로 이동?
-> 이렇게 할 경우 마이페이지에서 구독페이지 이동버튼이 있어야함
 */}
              <Route
                path="/paymentconfirmpage"
                element={<PaymentConfirmPage />}
              />
              <Route path="/paymentpage" element={<PaymentPage />} />
              <Route path="/subscriptionpage" element={<SubscriptionPage />} />
            </Routes>
          </LightDiv>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
