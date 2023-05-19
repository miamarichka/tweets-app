import { useEffect, useState } from 'react';
import axios from 'axios';
import { TweetsList } from './TweetsList/TweetsList'
import { LoadMoreButton, NoMoreTweetsText } from './TweetsPage.styled';
import { Loader } from '../Loader/Loader';

const BASE_URL = 'https://646614d6228bd07b355afdb8.mockapi.io/users'

const TweetsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [allTweets, setAllTweets] = useState([])
    const [tweets, setTweets] = useState([]);
    const [itemsPerPage] = useState(3);
    const [tweetsToShowCount, setTweetsToShowCount] = useState(3);

    useEffect(() => {
        const loadCards = async () => {
            try {
                setIsError(false);
                const responce = await axios.get(BASE_URL);
                if (responce.data.length) {
                    setAllTweets(responce.data)
                    setTweets(responce.data.slice(0, 3));
                }
            } catch{
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        loadCards();
    }, []);

      useEffect(() => {
        setTweets(allTweets.slice(0, tweetsToShowCount));
      }, [tweetsToShowCount, allTweets]);
    
    const LoadMoreHandleClick = () => {
        setTweetsToShowCount(prevState => prevState + itemsPerPage);
    }
    
    return (
      <>
        {isLoading && !isError && <Loader />}
        {isError && !isLoading && <h2> Something went wrong </h2>}
        {!isLoading && !isError && (
          <div>
            {!!tweets.length && <TweetsList tweets={tweets} />}
            {tweets.length === allTweets.length ? (
              <NoMoreTweetsText>You`ve reached all users</NoMoreTweetsText>
            ) : (
              <LoadMoreButton onClick={LoadMoreHandleClick}>
                Load more
              </LoadMoreButton>
            )}
          </div>
        )}
      </>
    );
}

export default TweetsPage;