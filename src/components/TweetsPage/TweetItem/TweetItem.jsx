/** @format */
import { AvatarImg, AvatarWrapper, CardContainer, CardUpperImg, CardUpperImgWrapper, CardUpperLogo, CircleImg, FollowButton, FollowersText, TweetsText } from "./TweetItem.styled";
import cardUpperPicture from "../../../assets/staticImages/cardUpperPicture.png";
import Logo from "../../../assets/staticImages/Logo.png";
import circle from "../../../assets/staticImages/circle.png";
import line from "../../../assets/staticImages/line.png";
import { formatNumberFollowers } from "../../../utils/converterFunction";
import { useState } from "react";
import PropTypes from "prop-types";

export const TweetItem = ({ tweet, filter }) => {
    const { id, avatar, tweets, followers } = tweet;
    const status = JSON.parse(localStorage.getItem(id));
    const [isClicked, setIsClicked] = useState(status || false);
    
    const btnClickHandler = () => {
        setIsClicked(prevState => !prevState)
    }
  localStorage.setItem(id, JSON.stringify(isClicked));
  
  const isRender =
    filter === "ALL" ||
    (filter === "FOLLOW" && isClicked) ||
    (filter === "UNFOLLOWING" && !isClicked);

  return (
    isRender && (
      <CardContainer>
        <CardUpperImgWrapper>
          <CardUpperLogo src={Logo} alt='' />
          <CardUpperImg src={cardUpperPicture} alt='' />
        </CardUpperImgWrapper>
        <AvatarWrapper>
          <img src={line} alt='' />
          <CircleImg src={circle} alt='' />
          <AvatarImg src={avatar} alt='' />
        </AvatarWrapper>
        <div>
          <TweetsText>{tweets} TWEETS</TweetsText>
          <FollowersText>
            {formatNumberFollowers(isClicked ? +followers + 1 : +followers)}{" "}
            FOLLOWERS
          </FollowersText>
          <FollowButton onClick={btnClickHandler}>
            {isClicked ? "UNFOLLOWING" : "FOLLOW"}
          </FollowButton>
        </div>
      </CardContainer>
    )
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.oneOf(["ALL", "FOLLOW", "UNFOLLOWING"]).isRequired,
};