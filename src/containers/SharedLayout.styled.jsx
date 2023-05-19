/** @format */
import styled from "styled-components";

export const Container = styled.div`
background-color: ${(props) => props.theme.colors.white};
width: ${(props) => props.theme.container.width};,
padding-left: ${(props) => props.theme.container.paddingLeft};
padding-right: ${(props) => props.theme.container.paddingRight};
margin: ${(props) => props.theme.container.margin};
`;
