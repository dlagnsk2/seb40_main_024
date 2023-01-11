// import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line no-unused-vars
import { FiEdit, FiDelete } from 'react-icons/fi';

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 500px;
    height: 200px;
    padding-top: 10px;
    padding-left: 150px;
    padding-right: 100px;
  }
  .slick-track {
    width: 500px;
    height: 200px;
  }
  .slick-slide.slick-active.slick-current {
    width: 850px;
  }
  .slick-list.slick-track {
    width: 500px;
    height: 200px;
    /* padding: auto; */
  }

  .slick-prev {
    left: 10px !important;
    z-index: 1000;
  }

  .slick-next {
    right: 10px !important;
    z-index: 1000;
  }

  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 3.5px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }
  .slick-arrow.slick-prev {
    display: flex;
    z-index: 10;
    margin-left: 70px;
  }
  .slick-arrow.slick-prev::before {
    color: #020626;
    font-size: 25px;
    width: 25px;
    opacity: 1;
  }
  .slick-arrow.slick-next {
    display: flex;
    z-index: 10;
    margin-right: 70px;
  }
  .slick-arrow.slick-next::before {
    color: #020626;
    font-size: 25px;
    width: 25px;
    opacity: 1;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;
export const SimpleSlider = ({
  AssetListBox,
  // eslint-disable-next-line no-unused-vars
  H3,
  // eslint-disable-next-line no-unused-vars
  H3Title,
  // eslint-disable-next-line no-unused-vars
  EditButton,
  // eslint-disable-next-line no-unused-vars
  ListTypeData,
  // eslint-disable-next-line no-unused-vars
  ListData,
  // eslint-disable-next-line no-unused-vars
  ListTextValue1,
  // eslint-disable-next-line no-unused-vars
  ListTextValue2,
  // eslint-disable-next-line no-unused-vars
  ListTextValue3,
  // eslint-disable-next-line no-unused-vars
  ListTextValue4,
  // eslint-disable-next-line no-unused-vars
  ListTextValue5,
  // eslint-disable-next-line no-unused-vars
  ListTextValue6,
  openEditTextModal1,
  // eslint-disable-next-line no-unused-vars
  openEditTextModal2,
  // eslint-disable-next-line no-unused-vars
  openEditTextModal3,
  // eslint-disable-next-line no-unused-vars
  openEditTextModal4,
  // eslint-disable-next-line no-unused-vars
  openEditTextModal5,
  // eslint-disable-next-line no-unused-vars
  openEditTextModal6,

  DelModalopenHandler1,
  // eslint-disable-next-line no-unused-vars
  DelModalopenHandler2,
  // eslint-disable-next-line no-unused-vars
  DelModalopenHandler3,
  // eslint-disable-next-line no-unused-vars
  DelModalopenHandler4,
  // eslint-disable-next-line no-unused-vars
  DelModalopenHandler5,
  // eslint-disable-next-line no-unused-vars
  DelModalopenHandler6,
}) => {
  let settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>1 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[0] === undefined ? <>명칭</> : <>{ListTypeData[0]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal1}
              disabled={ListTypeData[0] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler1}
              disabled={ListTypeData[0] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[0] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>
                총 금액&nbsp;:&nbsp;
                {ListTextValue1}
                &nbsp;원
              </>
            )}
          </H3>
        </AssetListBox>
      </div>

      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>2 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[1] === undefined ? <>명칭</> : <>{ListTypeData[1]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal2}
              disabled={ListTypeData[1] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler2}
              disabled={ListTypeData[1] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[1] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>총 금액&nbsp;:&nbsp;{ListTextValue2}&nbsp;원</>
            )}
          </H3>
        </AssetListBox>
      </div>
      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>3 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[2] === undefined ? <>명칭</> : <>{ListTypeData[2]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal3}
              disabled={ListTypeData[2] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler3}
              disabled={ListTypeData[2] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[2] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>총 금액&nbsp;:&nbsp;{ListTextValue3}&nbsp;원</>
            )}
          </H3>
        </AssetListBox>
      </div>
      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>4 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[3] === undefined ? <>명칭</> : <>{ListTypeData[3]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal4}
              disabled={ListTypeData[3] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler4}
              disabled={ListTypeData[3] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[3] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>총 금액&nbsp;:&nbsp;{ListTextValue4}&nbsp;원</>
            )}
          </H3>
        </AssetListBox>
      </div>
      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>5 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[4] === undefined ? <>명칭</> : <>{ListTypeData[4]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal5}
              disabled={ListTypeData[4] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler5}
              disabled={ListTypeData[4] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[4] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>총 금액&nbsp;:&nbsp;{ListTextValue5}&nbsp;원</>
            )}
          </H3>
        </AssetListBox>
      </div>
      <div>
        <AssetListBox>
          <H3 style={{ marginTop: '10px' }}>6 &nbsp;) &nbsp;</H3>
          <H3Title>
            {ListTypeData[5] === undefined ? <>명칭</> : <>{ListTypeData[5]}</>}
            <EditButton
              className="1"
              onClick={openEditTextModal6}
              disabled={ListTypeData[5] === '명칭'}
            >
              <FiEdit />
            </EditButton>
            &nbsp;
            <EditButton
              className="1"
              onClick={DelModalopenHandler6}
              disabled={ListTypeData[5] === '명칭'}
            >
              <FiDelete />
            </EditButton>
          </H3Title>
          <H3>
            {ListData[5] === undefined ? (
              <>총 금액&nbsp;:&nbsp;0원</>
            ) : (
              <>총 금액&nbsp;:&nbsp;{ListTextValue6}&nbsp;원</>
            )}
          </H3>
        </AssetListBox>
      </div>
    </StyledSlider>
  );
};
/**
  const settings = {

  dots: true, // 개수 표시 점
  infinite: true, // 무한 캐러셀
  speed: 500, // 다음 컨텐츠 까지의 속도
  slidesToShow: 1, // 화면에 보이는 컨텐츠 수
  slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
  centerMode: true, // 현재 컨텐츠 가운데 정렬
  centerPadding: '10px', // 중앙 컨텐츠 padding 값
  autoplay: true, // 자동 캐러셀
  autoplaySpeed: 2000, // 자동 캐러셀 속도
  draggable: false, // 드래그
  fade: false, // 사라졌다 나타나는 효과
  arrows: true, // 좌,우 버튼
  vertical: false, // 세로 캐러셀
  initialSlide: 1, // 첫 컨텐츠 번호
  pauseOnFocus: true, // focus시 정지
  pauseOnHover: true, // hover시 정지
  responsive: [
  반응형 옵션
  {
    breakpoint: 768, // (숫자)px 이하일 경우
    settings: {
      slidesToShow: 1,
      arrows: true,
    },
  },
  ],

 */
