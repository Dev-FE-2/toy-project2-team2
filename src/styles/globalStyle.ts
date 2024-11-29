import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardLight from "@/assets/fonts/Pretendard-Light.woff2";
import PretendardRegular from "@/assets/fonts/Pretendard-Regular.woff2";
import PretendardMedium from "@/assets/fonts/Pretendard-Medium.woff2";
import PretendardBold from "@/assets/fonts/Pretendard-Bold.woff2";
import { getColor, getFontWeight } from "./theme";

// 글로벌 스타일 설정
const GlobalStyle = createGlobalStyle`
  // reset css 적용
  ${reset}
   
  
  // === 전역 스타일 추가 === //
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', 'Arial', sans-serif;
    font-weight: ${getFontWeight("regular")};
    background-color: ${getColor("white")};
    color: ${getColor("secondaryDark")};
  }

  // === 폰트 설정 === //
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Light'), url(${PretendardLight}) format('woff2');
    font-weight: ${getFontWeight("light")};
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Regular'), url(${PretendardRegular}) format('woff2');
    font-weight: ${getFontWeight("regular")};
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Medium'), url(${PretendardMedium}) format('woff2');
    font-weight: ${getFontWeight("medium")};
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Bold'), url(${PretendardBold}) format('woff2');
    font-weight: ${getFontWeight("bold")};
    font-style: normal;
  }
`;

export default GlobalStyle;
