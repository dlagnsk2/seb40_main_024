import styled from 'styled-components';

const Icon = styled.svg`
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-position: top center;
  background-size: cover;
  border-radius: 100%;
`;

const ProfileIcon = () => {
  return <Icon />;
};

export default ProfileIcon;
