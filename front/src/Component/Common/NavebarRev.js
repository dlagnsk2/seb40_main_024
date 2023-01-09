import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import mark from './Img/mark.png';
import AuthContext from '../../store/AuthContext';
import { Modal } from '../Common/Modal';

const LongContainer = styled.header`
  background-color: #020626;
  border-bottom: 0.1px solid #92b4ec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  /* padding-left: 20px; */
  padding-right: 20px;
  position: fixed;
  z-index: 999990;
  top: 0;
`;
const HamberBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 24px;
  cursor: pointer;
  div {
    height: 5px;
    width: 30px;
    background-color: #f2f5f7;
    border-radius: 5px;
  }
`;

const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 9999999;
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  margin: 4px;
  margin-left: 25px;
  background-image: url(${mark});
  background-position: top center;
  background-size: cover;
  cursor: pointer;
`;

const RowDropMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 9999999;
  /* border: 1px solid red; */
`;
const HamburgerDropMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 57px;
  position: fixed;
  z-index: 9999999;
  /* border: 1px solid red; */
`;
const Menu = styled.li`
  color: #92b4ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  list-style: none;
  padding-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 17px;
  font-weight: bold;
  width: 115px;

  cursor: pointer;
  :hover {
    color: #f2f5f7;
  }
  :active {
    color: #f2f5f7;
  }
`;
const MiniMenu = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  color: #92b4ec;
  list-style: none;
  padding-top: 25px;
  font-size: 17px;
  font-weight: bold;
  width: 135px;
  height: auto;
  background-color: #020626;
  border: 3px solid #020626;
  cursor: pointer;
  :hover {
    color: #f2f5f7;
  }
  :active {
    color: #f2f5f7;
  }
`;
const MenuTopList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  background-color: #92b4ec;
  border-top: 1px solid #020626;
  border-left: 5px solid #020626;
  border-right: 5px solid #020626;
  border-bottom: 5px solid #020626;
  margin-top: 10px;
  /* border-radius: 5px; */
  border-end-start-radius: 5px;
  border-end-end-radius: 5px;
`;
const MiniMenuTopList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #92b4ec;
  border: 3px solid #92b4ec;
`;
const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  margin: 5px;
  padding: 5px;
  width: 115px;
  height: auto;
  color: #020626;

  list-style: none;

  :hover {
    background-color: #8991a5;
    color: #020626;
    border-radius: 5px;
  }
  :active {
    color: #f2f5f7;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: normal;
    text-align: center;
  }
`;
// console.log('theme', theme);
// eslint-disable-next-line no-unused-vars
export const LongNavbarBox = ({ DarkModeHandler }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [Assetclicked, setAssetclicked] = useState(true);
  const [Modalopen, setModalopen] = useState(false);

  const handleClickAsset = () => {
    setAssetclicked(!Assetclicked);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  const errModalopen = () => {
    setModalopen(true);
  };

  const errModalclose = () => {
    setModalopen(false);
    navigate('/login');
  };

  return (
    <>
      <MediaQuery minWidth={768} maxWidth={999999}>
        {!isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={() => navigate('/')}></MarkBox>
            {/* <button
              onClick={() => DarkModeHandler()}
              style={{ marginTop: '200px', width: '50px', height: '50px' }}
            ></button> */}
            <RowDropMenuBox>
              <Menu onClick={() => navigate('/login')}>로그인</Menu>
              <Menu onClick={() => navigate('/signup')}>회원가입</Menu>
              {Assetclicked ? (
                <>
                  <Menu onClick={handleClickAsset}>자산&목표</Menu>
                </>
              ) : (
                <>
                  <Menu onClick={handleClickAsset}>
                    자산&목표
                    <MenuTopList>
                      <MenuList onClick={errModalopen}>자산현황</MenuList>
                      <MenuList onClick={errModalopen}>목표현황</MenuList>
                    </MenuTopList>
                  </Menu>
                </>
              )}
              <Menu onClick={() => navigate('/board')}>커뮤니티</Menu>
              <Modal open={Modalopen} close={errModalclose} header="오류 알림">
                자산조회 및 목표현황은 로그인이 필요합니다.
              </Modal>
            </RowDropMenuBox>
          </LongContainer>
        )}
        {isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={() => navigate('/')}></MarkBox>
            {/* <button
              onClick={() => DarkModeHandler()}
              style={{ marginTop: '200px', width: '50px', height: '50px' }}
            ></button> */}
            <RowDropMenuBox>
              <Menu onClick={() => navigate('/mypage')}>마이페이지</Menu>
              {Assetclicked ? (
                <>
                  <Menu onClick={handleClickAsset}>자산&목표</Menu>
                </>
              ) : (
                <>
                  <Menu onClick={handleClickAsset}>
                    자산&목표
                    <MenuTopList>
                      <MenuList onClick={() => navigate('/assetchange')}>
                        자산현황
                      </MenuList>
                      <MenuList onClick={() => navigate('/assettarget')}>
                        목표현황
                      </MenuList>
                    </MenuTopList>
                  </Menu>
                </>
              )}
              <Menu onClick={() => navigate('/board')}>커뮤니티</Menu>
              <Menu onClick={logoutHandler}>로그아웃</Menu>
            </RowDropMenuBox>
          </LongContainer>
        )}
      </MediaQuery>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
export const MiniNavbarBox = ({ DarkModeHandler }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  // eslint-disable-next-line no-unused-vars
  const [Infoclicked, setInfoclicked] = useState(true);
  const [Markclicked, setMarkclicked] = useState(true);
  const [Assetclicked, setAssetclicked] = useState(true);
  const [Modalopen, setModalopen] = useState(false);
  // const [Communityclicked, setCommunityclicked] = useState(true);
  // eslint-disable-next-line prettier/prettier

  const handleClickMark = () => {
    setAssetclicked(true);
    // setCommunityclicked(true);
    setMarkclicked(!Markclicked);
  };
  // const handleClickCommunity = () => {
  //   setAssetclicked(true);
  //   setCommunityclicked(!Communityclicked);
  // };
  const handleClickAsset = () => {
    // setCommunityclicked(true);
    setAssetclicked(!Assetclicked);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  const errModalopen = () => {
    setModalopen(true);
  };

  const errModalclose = () => {
    setModalopen(false);
    navigate('/login');
  };

  return (
    <>
      <MediaQuery minWidth={0} maxWidth={768}>
        {!isLoggedIn && (
          <LongContainer>
            <HamberBox onClick={handleClickMark}>
              <div></div>
              <div></div>
              <div></div>
            </HamberBox>
            {/* <button
              onClick={() => DarkModeHandler()}
              style={{ marginTop: '200px', width: '50px', height: '50px' }}
            ></button> */}
            <MarkBox></MarkBox>
            {Markclicked ? null : (
              <>
                <HamburgerDropMenuBox>
                  <MiniMenu onClick={() => navigate('/')}>홈</MiniMenu>
                  <MiniMenu onClick={() => navigate('/login')}>로그인</MiniMenu>
                  <MiniMenu onClick={() => navigate('/signup')}>
                    회원가입
                  </MiniMenu>
                  {Assetclicked ? (
                    <>
                      <MiniMenu onClick={handleClickAsset}>자산&목표</MiniMenu>
                    </>
                  ) : (
                    <>
                      <MiniMenu onClick={handleClickAsset}>
                        자산&목표
                        <MiniMenuTopList>
                          <MenuList onClick={errModalopen}>자산현황</MenuList>
                          <MenuList onClick={errModalopen}>목표현황</MenuList>
                        </MiniMenuTopList>
                      </MiniMenu>
                    </>
                  )}
                  <MiniMenu
                    onClick={() => navigate('/board')}
                    style={{
                      height: '85px',
                      borderEndEndRadius: '5px',
                      borderEndStartRadius: '5px',
                    }}
                  >
                    커뮤니티
                  </MiniMenu>
                  <Modal
                    open={Modalopen}
                    close={errModalclose}
                    header="오류 알림"
                  >
                    자산조회 및 목표현황은 로그인이 필요합니다.
                  </Modal>
                </HamburgerDropMenuBox>
              </>
            )}
          </LongContainer>
        )}
        {isLoggedIn && (
          <LongContainer>
            <HamberBox onClick={handleClickMark}>
              <div></div>
              <div></div>
              <div></div>
            </HamberBox>
            {/* <button
              onClick={() => DarkModeHandler()}
              style={{ marginTop: '200px', width: '50px', height: '50px' }}
            ></button> */}
            <MarkBox></MarkBox>
            {Markclicked ? null : (
              <>
                <HamburgerDropMenuBox>
                  <MiniMenu onClick={() => navigate('/')}>홈</MiniMenu>
                  <MiniMenu onClick={() => navigate('/mypage')}>
                    마이페이지
                  </MiniMenu>
                  {Assetclicked ? (
                    <>
                      <MiniMenu onClick={handleClickAsset}>자산&목표</MiniMenu>
                    </>
                  ) : (
                    <>
                      <MiniMenu onClick={handleClickAsset}>
                        자산&목표
                        <MiniMenuTopList>
                          <MenuList onClick={() => navigate('/assetchange')}>
                            자산현황
                          </MenuList>
                          <MenuList onClick={() => navigate('/assettarget')}>
                            목표현황
                          </MenuList>
                        </MiniMenuTopList>
                      </MiniMenu>
                    </>
                  )}
                  <MiniMenu onClick={() => navigate('/board')}>
                    커뮤니티
                  </MiniMenu>
                  <MiniMenu
                    onClick={logoutHandler}
                    style={{
                      height: '85px',
                      borderEndEndRadius: '5px',
                      borderEndStartRadius: '5px',
                    }}
                  >
                    로그아웃
                  </MiniMenu>
                </HamburgerDropMenuBox>
              </>
            )}
          </LongContainer>
        )}
      </MediaQuery>
    </>
  );
};
