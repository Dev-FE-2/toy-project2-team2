<div style="text-align:center">  
<h1>
 ✨ "GoodWork" 
     </h1>  </div>
     
  <div style="text-align:center">  
<h3>
    인사 관리 효율성을 높이기 위한  급여 및 일정 관리 플랫폼 입니다.
    </h3>  </div>
    
- 직원들은 급여 내역 확인, 정정 신청 관리, 근무 일정 관리 등 다양한 기능을 통해 급여 정보를 쉽게 확인할 수 있습니다.
- 업무 효율성을 향상시키고, 직원들은 자신의 급여 및 근무 일정을 체계적으로 관리할 수 있습니다.
- 직관적인 디자인과 사용하기 쉬운 기능으로 모든 사용자가 플랫폼을 쉽게 활용할 수 있습니다.

<br/>

## 주요 페이지와 기능

### 📅 1. 내 일정
<div style="text-align:center">
    <img src="https://hackmd.io/_uploads/rklEsZ6E1x.gif" alt="일정 gif" /></div>


- **일정 등록** : 나의 일정을 제목, 날짜, 컬러 라벨, 메모와 같은 내용을 직접 설정하여 등록할 수 있습니다.
- **일정 확인** : 등록한 일정을 날짜별로 확인할 수 있습니다.
- **일정 수정/삭제** : 등록한 일정을 수정 및 삭제할 수 있습니다.


### 💰 2. 급여 내역 조회
 <div style="text-align:center">
  <img src="https://hackmd.io/_uploads/rJABabaEkl.gif" alt="급여 내역 GIF"/>
</div>

- **이번 달 급여 내역 조회** : 이번 달의 급여 명세서를 가장 먼저 확인할 수 있습니다. 기본급, 실지급액, 공제 항목, 급여 지급일 등 급여와 관련된 모든 정보를 명확하게 제공합니다.
- **과거 급여 내역 조회** : 사용자는 날짜를 선택하여 원하는 달의 급여 내역도 쉽게 확인할 수 있습니다.  "이번 달" 버튼을 통해 한 번의 클릭으로 이번 달 급여 내역을 즉시 확인할 수 있습니다.
- **월별 급여 모달** :해당 연도의 월별 급여 내역을 한눈에 확인할 수 있는 목록을 제공합니다.
- **급여 정정 신청** :특정 월의 급여 내역에 오류가 있는 경우,수정 요청을 보낼 수 있습니다. 신청 후에는 "검토 중" 상태로 표시됩니다.

### 📝 3. 정정 신청 내역
 <div style="text-align:center">
  <img src="https://hackmd.io/_uploads/HkvxVGaNJl.gif" alt="급여 내역 GIF"/>
</div>

- **정정 신청 내역 확인** : 신청한 정정 요청을 월별로 목록 형태로 확인할 수 있습니다. 목록에는 정정 신청의 상태와 정정 신청 날짜가 표시됩니다.
- **세부 내역 확인** : 특정 신청 내역을 클릭하면 다음과 같은 정보를 확인할 수 있습니다
    - **확인 완료 상태** : 정정된 금액이 표시됩니다.
    - **반려 상태** : 관리자에 의해 작성된 반려 사유가 제공됩니다.
    - **신청 내용** : 신청 당시 작성했던 정정 요청 내용이 표시됩니다.

### 👨‍💼4. 로그인 & 마이페이지
<div style="display: flex; justify-content: space-around; align-items: center;">
  <img src="https://hackmd.io/_uploads/rJnksf64kg.gif"  style="width: 45%; height: auto;"/>
  <img src="https://hackmd.io/_uploads/ByFFGMp41e.gif"  style="width: 45%; height: auto;"/>
</div>


- **로그인**: 사용자의 이메일과 비밀번호를 입력해 로그인하여 GoodWork 서비스를 이용할 수 있습니다.
- **프로필 변경**: 프로필 이미지 및 이메일을 제외한 인적사항을 변경할 수 있습니다.


<br/>

## 팀원 소개
<div style="display: flex; justify-content: space-around; align-items: center;">
 
| <img src="https://avatars.githubusercontent.com/u/176368439?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/100520490?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/50770004?v=4" width="150" height="150">
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                 박찬희<br />[@park-chan-hui](https://github.com/goldegg127)                  |                  안혜련<br />[@hyeryeon](https://github.com/anhyeryeon2)                   |                   양명규<br />[@mgYang53](https://github.com/mgYang53)                    
</div>



##  개발 기간
2024.11.22 ~ 12.19 (4주)
> 설계 및 디자인, 프로젝트 세팅 : 11.22 ~ 11.25

> UI 및 컴포넌트 구현 : 11.26 ~ 12.5

> 기능 구현: 12.6 ~ 12.13

<br/>

## 프로젝트 컨벤션
 ### Code
 - 변수: camelCase
 - 상수: SNAKE_CASE
 - 함수: camelCase, 동사로 시작
 - 컴포넌트: arrow fuction
 - 포멧터
     -  Prettier / ESLint (w.Aribnb sytle guide)
     -  Husky
### Branch
- `feature`/`develop`/`mian` 운용
    - 기능 단위 PR
- feature 브랜치 이름 형식
    - `이슈라벨/기능명 -#이슈번호`
        - `feat/add-calendar-#23`
### Commit
- Commit Message 형식
    - `이슈라벨: 설명-#이슈번호`
        - `feat: add-calendar-#23`
        - \# 타입종류
        - \# feat: 새로운 기능 추가
        - \# fix: 버그 수정
        - \# design: 사용자 UI디자인 변경(CSS)
        - \# docs: 문서 수정
        - \# test: 테스트 코드 추가
        - \# refact: 코드 리팩토링
        - \# style: 코드 포멧팅, 세미콜론 누락 등 코드 의미에 영향을 주지 않는 변경사항
        - \# chore: 빌드 부분 혹은 패키지 매니저 수정 사항
        - \# comment: 주석 추가 및 변경
        - \# rename: 파일, 폴더 이름 변경
        - \# remove: 파일, 폴더 삭제
### Issue & PR
-  [Issue]
    - `<타입>:<내용>` 발행
    - 라벨 및 담당자 어싸인 필수
    - 템플릿 기능개발/버그
        ```
        # 기능 개발 템플릿
        ## 📄 Describe
        ## ✅ Tasks
        ## 📋 Ref

        # 버그 템플릿
        ## 📄 어떤 버그인가요?
        ## ⁉️ 어떤 상황에서 발생한 버그인가요?
        Given-When-Then
        ## 🟢 예상 결과
        ## 📋 참고할만한 자료(선택)
        ```    
    - Issue Labels
        - bug: 버그
        - chore: 세팅 관련
        - cleanup: 코드 정리 및 제거
        - docs: 문서 변경
        - feature: 기능 추가 및 구현
        - fix: 버그 수정
        - question: 질문만 있는 이슈
        - refactoring: 리팩토링 차원에서 코드 수정

- [PR]
    - 2인 이상 승인, Slack에 PR 공유
    - `<타입>:<내용>-#이슈번호`(이슈와 통일)
        ```
        ## #️⃣ 이슈 번호
        ## 📝 요약
        ## 💬 리뷰어에게 공유사항
        ## 📸 스크린샷 (선택)
        ```

<br/>

## 기술 스택 및 개발환경
**언어, 라이브러리, 번들러**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

**스타일링, 상태관리**

![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=Styled-Components&logoColor=white) ![Redux/toolkit](https://img.shields.io/badge/Redux/toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white)

**패키지 매니저**

![Npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

**BaaS** 

![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=Firebase&logoColor=white)

**코드 포맷팅**

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

**VCS**

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

**Communication**

![Slack](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

<br/>

## 시작하기
### 설치
서비스는 서버와 클라이언트 시스템으로 구성되며 Firebase와 react + vite 기반으로 구성되어있습니다.
프로젝트 저장소를 다음 설명에 따라 개발자 컴퓨터에 복사하고 설치 명령을 입력하여 설치를 할 수 있습니다.
```
git clone https://github.com/Dev-FE-2/toy-project2-team2.git my-project

cd my-project

npm install
```
### 실행
개발자 로컬 환경에서 개발 모드로 실행하기 위해선 프로젝트 루트 디렉토리에서 다음의 명령을 실행하세요.
Firebase 관련 API Key를 적용해야만 원활히 확인할 수 있으니, 필요하면 프로젝트 담당자에게 문의 바랍니다.
```
npm run dev 
```