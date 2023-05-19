import styled from 'styled-components';

export const CardContainer = styled.li`
height: 460px;
width: 380px;
left: 435px;
top: 168px;
border-radius: 20px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
text-align: center;
margin-bottom:48px;
`;

export const CardUpperImgWrapper = styled.div`
position: relative;
`;

export const CardUpperLogo = styled.img`
position: absolute;
left: 20px;
top: 20px;
`;

export const CardUpperImg = styled.img`
margin: 28px 36px 18px 36px;
`;

export const CircleImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: 26px;
`;
export const AvatarImg = styled.img`
  height: 62px;
  width: 62px;
  border-radius: 50%;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TweetsText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #ebd8ff;
  display: block;
  margin-bottom: 16px;
  margin-top: 46px;
`;

export const FollowersText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #ebd8ff;
  display: block;
  margin-bottom: 26px;
`;

export const FollowButton = styled.button`
  height: 50px;
  width: 196px;
  left: 92px;
  top: 374px;
  border-radius: 10.310786247253418px;
  border-color: transparent;
  padding: 14px 28px 14px 28px;
  background-color: ${(props) =>
    props.children === "FOLLOW" ? "#EBD8FF" : "#5CD3A8"};
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;