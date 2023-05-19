/** @format */

import { styled } from "styled-components";

export const LoadMoreButton = styled.button`
  display: block;
  margin: auto;
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10.310786247253418px;
  border-color: transparent;
  padding: 14px 28px 14px 28px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NoMoreTweetsText = styled.p`
  color: black;
  text-align: center;
  font-weight: 600;
`;
