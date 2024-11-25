import { createGlobalStyle } from "styled-components";

// 글로벌 스타일 설정
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
