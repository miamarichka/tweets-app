import styled from 'styled-components';

export const TweetsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  li {
    flex-basis: calc(33.33% - 20px);
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 0px;
  }

  li:nth-child(3n) {
    margin-right: 0;
  }

  li:last-child {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.main};
  padding: 5px;
`;

export const TweetsListWrapper = styled.div`
  padding: 10px;
`;

export const GoBackButton = styled.button`
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  &:hover,
  &:focus{
    color: ${props=> props.theme.colors.main}
  }
`;