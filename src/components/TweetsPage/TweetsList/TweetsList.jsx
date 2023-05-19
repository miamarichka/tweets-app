import { useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem"
import { GoBackButton, Select, TweetsListStyled, TweetsListWrapper } from "./TweetsList.styled";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";


export const TweetsList = ({ tweets }) => {
  const navigation = useNavigate();
  const [selectStatus, setSelectStatus] = useState('ALL')

  const selectHandler = (e) => {
    setSelectStatus(e.target.value)
  }

  return (
    <TweetsListWrapper>
      <div>
        <GoBackButton onClick={()=> navigation(-1)}>Go Back</GoBackButton>
        <Select name='filter' id='filter' onChange={selectHandler}>
          <option value='ALL'>ALL</option>
          <option value='FOLLOW'>FOLLOW</option>
          <option value='UNFOLLOWING'>UNFOLLOWING</option>
        </Select>
      </div>
      <TweetsListStyled>
        {tweets.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} filter={selectStatus} />
        ))}
      </TweetsListStyled>
    </TweetsListWrapper>
  );
}

TweetsList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.string.isRequired,
      followers: PropTypes.string.isRequired,
    }).isRequired
  ),
};