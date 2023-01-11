import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 홈페이지 이름
const FooterMain = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  background-color: #dce3e9;
  margin-top: 100px;
  padding: 70px;
  line-height: normal;
  font-size: 17px;
  font-weight: bold;
  color: #333;
  width: 100%;
  min-width: 550px;
  .github {
    display: flex;
    font-size: 50px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    font-size: 15px;
    font-weight: 600;
  }
  .FooterInfo {
    display: flex;
    align-items: center;
  }
  .Footers {
    cursor: pointer;
    :hover {
      color: #ffff;
    }
    :active {
      color: #c0daf9;
    }
  }
`;

function Footer() {
  return (
    <FooterMain>
      <div className="Footers">
        <a href="https://github.com/dlagnsk2">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <span>
            Frontend
            <br />
            임후나
          </span>
        </a>
      </div>
      <div className="Footers">
        <a href="https://github.com/jioneee">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <span>
            Frontend
            <br />
            이지원
          </span>
        </a>
      </div>

      <div className="Footers">
        <a href="https://github.com/codinginfant">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <span>
            Backend
            <br />
            주윤정
          </span>
        </a>
      </div>
      <div className="Footers">
        <a href="https://github.com/JadeMK">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <span>
            Backend
            <br />
            김민주
          </span>
        </a>
      </div>
    </FooterMain>
  );
}

export default Footer;
