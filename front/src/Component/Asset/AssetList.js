import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { SaveBtn, EditGoalBtn, DeleteGoalBtn } from '../Common/Button';
import {
  GoalModifyModal,
  Modal,
  SavingModal,
} from '../../Component/Common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 5px solid #d6e9fd;
  border-radius: 3%;
  .p {
    font-size: 17px;
    font-weight: 500;
    color: #92b4ec;
  }
  .smallP {
    margin-bottom: 5px;
    font-weight: 500;
    text-align: left;
    color: gray;
  }
  @media only screen and (max-width: 320px) {
    display: none;
  }
`;
const boxAnimation = keyframes`

0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;
const MobileComponentContain = styled.div`
  @media only screen and (min-width: 321px) {
    display: none;
  }
  @media only screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 5px solid #d6e9fd;
    width: 300px;
    margin-left: 180px;
    height: auto;
    border-radius: 3%;
    opacity: 1;
    transition: opacity 5s;
    .goaltitle {
      color: gray;
    }
  }
`;
const MobileComponentDetail = styled.div`
  @media only screen and (min-width: 321px) {
    display: none;
  }
  @media only screen and (max-width: 320px) {
    animation: ${boxAnimation} 1s 0s;
    display: flex;
    flex-direction: column;
    /* display: inline-flex; */
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    border-radius: 3%;
    /* opacity: 1;
    transition: opacity 500ms; */

    .mobilep {
      font-size: 15px;
      font-weight: 500;
      color: #1c2f71;
    }
    .mobilesmallP {
      margin-bottom: 5px;
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      color: gray;
    }
  }
`;

const Header = styled.h3`
  box-sizing: border-box;
  width: 120px;
  height: 30px;
  color: #92b4ec;
  text-align: center;
  /* border: 2px solid #4a61a9; */
  border-radius: 2rem;
  border: 1px solid #4a61a9;
  margin-bottom: 10px;

  /* @media only screen and (max-width: 320px) {
    margin-top: -20px;
  } */
`;
const MobileHeader = styled.h4`
  @media only screen and (min-width: 321px) {
    display: none;
  }
  @media only screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 120px;
    height: 30px;
    margin-top: 10px;
    color: #92b4ec;
    text-align: center;
    /* border: 2px solid #4a61a9; */
    border-radius: 2rem;
    border: 1px solid #4a61a9;
    cursor: pointer;
  }
`;

const SettingInput = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 400px;
  height: 50px;
  margin: 10px;
  font-size: 25px;
  border-bottom: solid 2px #adcaf3;
  margin-top: 20px;
  color: grey;
  @media only screen and (max-width: 320px) {
    width: 60%;
    font-size: 20px;
  }
`;

const CalcurlatedBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  border: solid 2px rgba(188, 234, 213, 30%);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #d6e9fd;
  :hover {
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
    .li {
      color: black;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 320px) {
    width: 70%;
  }
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-left: 50px;
  .saving {
  }
`;

const InfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
  .number {
    color: #8ec3b0;
  }
`;

const Input = styled.input`
  width: 230px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #444;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #999;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 40px;
  gap: 10px;
  margin-left: 350px;
  @media only screen and (max-width: 320px) {
    margin-top: -25px;
    width: 80px;
    margin-left: 190px;
    gap: 5px;
  }
`;
const NewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 40px;
  gap: 60px;
  margin-bottom: 10px;
`;
const UpBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #bcead5;
  border-radius: 10%;
  color: grey;
  font-weight: 900;
`;
const DownBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #bcead5;
  border-radius: 10%;
  color: grey;
  font-weight: 900;
`;

const SavingInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 5px;
  .number {
    color: #8ec3b0;
  }
`;
// const MobileGoalList = styled.div`
//   box-sizing: border-box;
//   width: 120px;
//   height: 30px;
//   text-align: center;
//   /* border: 2px solid #4a61a9; */
//   border-radius: 2rem;
//   background-color: #4a61a9;
//   margin-bottom: 10px;
//   color: #fff;
// `;

const AssetList = ({
  count,
  goalDelete,
  setGoal,
  setExtended,
  setPeriod,
  goal,
  extended,
  period,
  goalPatch,
  goalNameonChange,
  goalPriceonChange,
  targetLengthonChange,
  goalUpPatch,
  goalDownPatch,
  id,
}) => {
  const [save, setSave] = useState(false);
  const [Modify, setModify] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const openSavingModal = () => {
    setSave(!save);
  };
  const openModal = () => {
    setModalopen(!Modalopen);
  };
  const closeModal = () => {
    setModalopen(false);
    setModify(false);
    setSave(false);
  };
  const openModify = () => {
    setModify(true);
  };
  const listOpenHandler = () => {
    setListOpen(!listOpen);
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <MobileComponentContain>
          <MobileHeader
            placeholder="자동차"
            type="text"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
            onClick={listOpenHandler}
          >
            나의 목표
          </MobileHeader>
          <div className="goaltitle">{count.goalName}</div>
          {listOpen ? (
            <MobileComponentDetail>
              <BtnBox>
                <EditGoalBtn
                  openModify={openModify}
                  id={count.goalId}
                ></EditGoalBtn>
                <DeleteGoalBtn
                  goalDelete={goalDelete}
                  id={count.goalId}
                ></DeleteGoalBtn>
              </BtnBox>
              <p className="mobilep">목표 금액</p>
              <SettingInput
                placeholder="30,000,000원"
                type="number"
                onChange={(e) => setExtended(e.target.value)}
                value={extended}
              >
                {count.goalPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원
              </SettingInput>
              <p className="mobilep">목표 기간</p>
              <SettingInput
                placeholder="12개월"
                type="number"
                onChange={(e) => setPeriod(e.target.value)}
                value={period}
              >
                {count.targetLength} 개월
              </SettingInput>
              <CalcurlatedBox>
                <p className="mobilesmallP">
                  <li>
                    {' '}
                    매달 저축액:{' '}
                    {Number(count.calculatedPrice)
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    원
                  </li>
                </p>
                <p className="mobilesmallP">
                  <li>
                    {' '}
                    남은 금액:{' '}
                    {Number(Math.ceil(count.goalPrice)) <
                    (Number(count.targetLength) - count.completed) *
                      Number(count.calculatedPrice)
                      ? Number(Math.ceil(count.goalPrice))
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                      : (
                          (Number(count.targetLength) - count.completed) *
                          Number(count.calculatedPrice)
                        )
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    원{' '}
                  </li>
                </p>

                <p className="mobilesmallP">
                  <li className="savingContent">
                    남은 기간: {Number(count.targetLength) - count.completed}{' '}
                    개월{' '}
                  </li>
                </p>
              </CalcurlatedBox>
              <SaveBtn openSavingModal={openSavingModal}></SaveBtn>
              <GoalModifyModal
                id={count.goalId}
                open={Modify}
                close={openModal}
                header="목표자산 수정"
                goalPatch={goalPatch}
              >
                <Div>
                  <ListContain>
                    <Info>
                      <div>
                        <InfoHead>목표자산 수정</InfoHead>
                        <Input
                          onChange={goalNameonChange}
                          placeholder="나의 목표"
                        ></Input>
                        <Input
                          type="number"
                          onChange={goalPriceonChange}
                          placeholder="금액"
                        />
                        <Input
                          type="number"
                          onChange={targetLengthonChange}
                          placeholder="기간"
                        />
                      </div>
                    </Info>
                  </ListContain>
                  <Modal open={Modalopen} close={closeModal} header="알림">
                    목표달성에 도전해보세요!
                  </Modal>
                </Div>
              </GoalModifyModal>
              <SavingModal
                open={save}
                close={openModal}
                goalUpPatch={goalUpPatch}
                goalDownPatch={goalDownPatch}
                header="저축 기간"
              >
                <Div>
                  <ListContain>
                    <Info>
                      <div className="saving">
                        <SavingInfoHead>
                          <FontAwesomeIcon icon={faCheck} color="grey" /> 목표
                          기간:{' '}
                          <span className="number">{count.targetLength}</span>
                          개월
                        </SavingInfoHead>
                        <SavingInfoHead>
                          <FontAwesomeIcon icon={faCheck} color="grey" /> 저축
                          기간:{' '}
                          <span className="number">{count.completed}</span>
                          개월
                        </SavingInfoHead>
                        <SavingInfoHead>
                          <FontAwesomeIcon icon={faCheck} color="grey" /> 남은
                          금액:{' '}
                          <span className="number">
                            {Number(Math.ceil(count.goalPrice)) <
                            (Number(count.targetLength) - count.completed) *
                              Number(count.calculatedPrice)
                              ? Number(Math.ceil(count.goalPrice))
                                  .toString()
                                  .replace(
                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                    ','
                                  )
                              : (
                                  (Number(count.targetLength) -
                                    count.completed) *
                                  Number(count.calculatedPrice)
                                )
                                  .toString()
                                  .replace(
                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                    ','
                                  )}{' '}
                          </span>
                          원
                        </SavingInfoHead>

                        <NewBtnBox>
                          <UpBtn onClick={goalUpPatch} data-id={id}>
                            UP
                          </UpBtn>
                          <DownBtn onClick={goalDownPatch} data-id={id}>
                            DOWN
                          </DownBtn>
                        </NewBtnBox>
                      </div>
                    </Info>
                  </ListContain>
                  <Modal
                    open={Modalopen}
                    close={closeModal}
                    header="저축기간 저장 알림"
                  >
                    저축 기간이 저장되었습니다.
                  </Modal>
                </Div>
              </SavingModal>
            </MobileComponentDetail>
          ) : null}
        </MobileComponentContain>

        <ComponentContain>
          <br />
          <BtnBox>
            <EditGoalBtn
              openModify={openModify}
              id={count.goalId}
            ></EditGoalBtn>
            <DeleteGoalBtn
              goalDelete={goalDelete}
              id={count.goalId}
            ></DeleteGoalBtn>
          </BtnBox>
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="자동차"
            type="text"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
          >
            {count.goalName}
          </SettingInput>
          <p className="p">목표 금액</p>
          <SettingInput
            placeholder="30,000,000원"
            type="number"
            onChange={(e) => setExtended(e.target.value)}
            value={extended}
          >
            {count.goalPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
            원
          </SettingInput>
          <p className="p">목표 기간</p>
          <SettingInput
            placeholder="12개월"
            type="number"
            onChange={(e) => setPeriod(e.target.value)}
            value={period}
          >
            {count.targetLength} 개월
          </SettingInput>
          <CalcurlatedBox>
            <p className="smallP">
              <li>
                {' '}
                매달 저축액:{' '}
                {Number(count.calculatedPrice)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원
              </li>
            </p>
            <p className="smallP">
              <li>
                {' '}
                남은 금액:{' '}
                {Number(Math.ceil(count.goalPrice)) <
                (Number(count.targetLength) - count.completed) *
                  Number(count.calculatedPrice)
                  ? Number(Math.ceil(count.goalPrice))
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  : (
                      (Number(count.targetLength) - count.completed) *
                      Number(count.calculatedPrice)
                    )
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원{' '}
              </li>
            </p>

            <p className="smallP">
              <li className="savingContent">
                남은 기간: {Number(count.targetLength) - count.completed} 개월{' '}
              </li>
            </p>
          </CalcurlatedBox>
          <SaveBtn openSavingModal={openSavingModal}></SaveBtn>
          <GoalModifyModal
            id={count.goalId}
            open={Modify}
            close={openModal}
            header="목표자산 수정"
            goalPatch={goalPatch}
          >
            <Div>
              <ListContain>
                <Info>
                  <div>
                    <InfoHead>목표자산 수정</InfoHead>
                    <Input
                      onChange={goalNameonChange}
                      placeholder="나의 목표"
                    ></Input>
                    <Input
                      type="number"
                      onChange={goalPriceonChange}
                      placeholder="금액"
                    />
                    <Input
                      type="number"
                      onChange={targetLengthonChange}
                      placeholder="기간"
                    />
                  </div>
                </Info>
              </ListContain>
              <Modal open={Modalopen} close={closeModal} header="알림">
                목표달성에 도전해보세요!
              </Modal>
            </Div>
          </GoalModifyModal>
          <SavingModal
            open={save}
            close={openModal}
            goalUpPatch={goalUpPatch}
            goalDownPatch={goalDownPatch}
            header="저축 기간"
          >
            <Div>
              <ListContain>
                <Info>
                  <div className="saving">
                    <SavingInfoHead>
                      <FontAwesomeIcon icon={faCheck} color="grey" /> 목표 기간:{' '}
                      <span className="number">{count.targetLength}</span>
                      개월
                    </SavingInfoHead>
                    <SavingInfoHead>
                      <FontAwesomeIcon icon={faCheck} color="grey" /> 저축 기간:{' '}
                      <span className="number">{count.completed}</span>
                      개월
                    </SavingInfoHead>
                    <SavingInfoHead>
                      <FontAwesomeIcon icon={faCheck} color="grey" /> 남은 금액:{' '}
                      <span className="number">
                        {Number(Math.ceil(count.goalPrice)) <
                        (Number(count.targetLength) - count.completed) *
                          Number(count.calculatedPrice)
                          ? Number(Math.ceil(count.goalPrice))
                              .toString()
                              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                          : (
                              (Number(count.targetLength) - count.completed) *
                              Number(count.calculatedPrice)
                            )
                              .toString()
                              .replace(
                                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                ','
                              )}{' '}
                      </span>
                      원
                    </SavingInfoHead>

                    <NewBtnBox>
                      <UpBtn onClick={goalUpPatch} data-id={id}>
                        UP
                      </UpBtn>
                      <DownBtn onClick={goalDownPatch} data-id={id}>
                        DOWN
                      </DownBtn>
                    </NewBtnBox>
                  </div>
                </Info>
              </ListContain>
              <Modal
                open={Modalopen}
                close={closeModal}
                header="저축기간 저장 알림"
              >
                저축 기간이 저장되었습니다.
              </Modal>
            </Div>
          </SavingModal>
        </ComponentContain>
      </div>
    </>
  );
};

export default AssetList;
