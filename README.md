# react를 이용한 포트폴리오 사이트 만들기
React는 많은 개발자에게 인기 있는 JavaScript 라이브러리 중 하나이며, 다음은 React의 주요 장단점을 설명합니다:

장점:

가상 DOM (Virtual DOM): React는 가상 DOM을 사용하여 성능을 최적화합니다. 변경 사항을 직접 실제 DOM에 적용하는 대신 가상 DOM을 통해 변경 사항을 비교하고 효율적으로 업데이트합니다. 이로써 성능이 향상되고 빠른 렌더링이 가능해집니다.

컴포넌트 기반 구조: React는 컴포넌트 기반 아키텍처를 사용하며, UI를 독립적인 컴포넌트로 구성합니다. 이로써 코드의 재사용성과 유지보수성이 향상되며, 큰 프로젝트를 관리하기 용이해집니다.

단방향 데이터 흐름: React는 단방향 데이터 바인딩을 채택하고 있습니다. 이로써 데이터 흐름이 예측 가능하며, 버그를 추적하고 수정하기 쉬워집니다.

커뮤니티와 생태계: React는 활발한 개발자 커뮤니티와 다양한 라이브러리 및 도구를 가지고 있습니다. 이로써 문제를 해결하고 기능을 추가하기 위한 리소스가 풍부하며, 지속적인 업데이트와 개선이 이루어집니다.

용이한 테스트: React 애플리케이션은 테스트하기 쉽습니다. 테스트 라이브러리 및 도구의 지원을 받아 유닛 테스트 및 통합 테스트를 수행하기 용이합니다.

단점:

높은 학습 곡선: React는 처음 사용하는 개발자에게는 학습 곡선이 높을 수 있습니다. JSX와 컴포넌트 기반 설계 등의 개념을 익히는데 시간이 걸릴 수 있습니다.

전체적인 생태계 복잡성: React는 라이브러리이지만 프로젝트에서 사용할 추가 도구, 상태 관리 라이브러리, 라우팅 등을 선택해야 합니다. 이로 인해 프로젝트 초기 설정이 복잡할 수 있습니다.

SEO (Search Engine Optimization) 어려움: React 앱은 초기 로딩 시에 검색 엔진에 적합한 HTML을 생성하기 어렵기 때문에 SEO에 어려움이 있을 수 있습니다. 이 문제는 서버 사이드 렌더링(SSR)을 통해 해결할 수 있습니다.

불완전한 문서화: React의 문서화는 개선되었지만 여전히 부족한 부분이 있을 수 있습니다. 때로는 원하는 정보를 찾기가 어려울 수 있습니다.

## 작업 순서

1. 리액트를 설치
2. git에 업로드
3. [lenis 사이트] (https://github.com/studio-freight/lenis)

## 설치

1. react `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

### GSAP
GSAP (GreenSock Animation Platform)은 웹 애니메이션을 생성하고 관리하기 위한 강력하고 유연한 JavaScript 라이브러리입니다. GSAP는 HTML, CSS 및 SVG 요소를 사용하여 웹 페이지 및 애플리케이션에서 고품질의 애니메이션을 만들 수 있도록 돕는 도구입니다.

GSAP의 주요 특징과 기능은 다음과 같습니다:

크로스 브라우저 호환성: GSAP는 주요 브라우저에서 잘 동작하며, 호환성 문제를 신경 쓰지 않고 애니메이션을 개발할 수 있습니다.

간편한 사용: GSAP는 직관적이고 간단한 API를 제공하므로, 초보자부터 전문 개발자까지 모두가 쉽게 사용할 수 있습니다.

뛰어난 성능: GSAP는 성능 최적화에 중점을 두어 매끄러운 애니메이션을 제공합니다. 가상 DOM을 사용하지 않고 직접 DOM 요소를 조작하며, 이로써 훌륭한 성능을 달성합니다.

다양한 애니메이션 유형: GSAP는 다양한 애니메이션 유형을 지원하며, 속성 기반 애니메이션, 시간 기반 애니메이션, 스크롤 애니메이션, 트윈 애니메이션 등 다양한 애니메이션 스타일을 만들 수 있습니다.

재생 제어: 애니메이션을 시작, 일시 중지, 다시 시작, 반전 및 재생 속도 조절과 같은 제어 기능을 제공합니다.

시퀀스 및 그룹: 여러 애니메이션을 시퀀스로 연결하거나 그룹화하여 복잡한 애니메이션 시나리오를 만들 수 있습니다.

스크롤 애니메이션: 페이지 스크롤에 반응하여 요소를 애니메이션화하는 ScrollTrigger 플러그인을 통해 스크롤 애니메이션을 쉽게 구현할 수 있습니다.

커스터마이징 가능: GSAP는 트윈, 트윈맥스 및 트라이거 등의 다양한 플러그인을 통해 애니메이션을 자세하게 제어하고 커스터마이징할 수 있습니다.
### lenis

### firebase
Firebase는 Google에서 제공하는 클라우드 기반의 개발 플랫폼으로, 웹 및 모바일 애플리케이션을 빠르게 개발하고 배포하는 데 도움을 주는 다양한 도구와 서비스를 제공합니다. Firebase는 다음과 같은 주요 기능과 서비스를 포함하고 있습니다:

실시간 데이터베이스 (Realtime Database): Firebase의 실시간 데이터베이스는 JSON 기반의 NoSQL 데이터베이스로, 실시간 데이터 동기화를 지원합니다. 다양한 플랫폼에서 실시간 업데이트를 제공하며, 실시간 채팅 애플리케이션, 실시간 협업 도구 및 게임에 유용합니다.

인증 (Authentication): Firebase 인증을 사용하면 사용자 관리와 인증을 간단하게 처리할 수 있습니다. 이메일/비밀번호, 소셜 로그인 (Google, Facebook, Twitter 등), 전화번호 인증 등 다양한 로그인 방법을 지원합니다.

스토리지 (Cloud Storage): Firebase 스토리지는 파일 및 미디어를 안전하게 저장하고 서비스할 수 있는 클라우드 스토리지 서비스입니다. 웹 및 모바일 애플리케이션에서 사용자 업로드 파일을 저장하거나 공유하는 데 사용됩니다.

호스팅 (Hosting): Firebase 호스팅을 사용하면 정적 웹 사이트를 간단하게 호스팅하고 배포할 수 있습니다. 빠르고 안전한 글로벌 CDN (콘텐츠 전달 네트워크)를 통해 콘텐츠를 제공합니다.

클라우드 함수 (Cloud Functions): Firebase 클라우드 함수는 서버리스 백엔드로 사용자 정의 서버 코드를 실행할 수 있도록 합니다. 이벤트 기반 함수를 작성하여 데이터베이스 업데이트, 인증 확인, 알림 전송 등 다양한 작업을 자동화할 수 있습니다.

클라우드 Firestore: 클라우드 Firestore는 Firebase의 NoSQL 데이터베이스 서비스로, 더 많은 기능과 쿼리 옵션을 제공합니다. 데이터를 JSON 형식으로 저장하고, 리얼타임 업데이트와 오프라인 액세스를 지원합니다.

애널리틱스 (Analytics): Firebase 애널리틱스는 앱 사용 및 사용자 동작을 추적하고 분석할 수 있는 도구를 제공합니다. 이를 통해 앱 성능을 개선하고 사용자 경험을 최적화할 수 있습니다.

클라우드 메시징 (Cloud Messaging): Firebase 클라우드 메시징을 사용하여 모바일 앱 또는 웹 앱으로 푸시 알림을 보낼 수 있습니다.
<details>
<summary>설치 순서</summary>
* npm run build
1. firebase 홈페이지 : 프로젝트 만들기
2. 빌드(카테고리) : 호스팅 시작하기 선택
3. vs code 터미널에 가서 firebase-tools 설치: npm install -g firebase-tools (경로 확인!)
4. firebase login (powershell에서 안됨..)
5. firebase init
6. space bar을 이용해서 Hosting 선택 하고 enter.
7. y/N 선택시 추천 선택 (그냥 enter)

? Are you ready to proceed? Yes 
? Project Setup
? Hosting Setup
? What do you want to use as your public directory? build         
? Configure as a single-page app (rewrite all urls to /index.html)? No     
? Set up automatic builds and deploys with GitHub? No
? File build/index.html already exists. Overwrite? No
## 트러블 슈팅

<details>
<summary>whiespace 에러</summary>
 warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it

해결방법
Git의 core.autocrlf 라는 기능을 켜서 이를 자동 변환 해주도록 하면 된다.

`git config --global core.autocrlf true // 시스템 전체에 적용`

`git config core.autocrlf true // 해당 프로젝트에만 적용`

</details>
