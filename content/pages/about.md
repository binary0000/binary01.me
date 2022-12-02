---
title: '이진수(Lee Jin Soo)'
template: 'page'
---

<img src="../../static/icons/email.svg" width="27px" align="left" hspace= "18">
<a href="mailto:binary01@kakao.com">binary01@kakao.com</a><br/><br/>
<img src="../../static/icons/github.svg" width="27px" align="left" hspace= "18">
<a href="https://github.com/01-binary">github.com/01-binary</a><br/><br/>
<img src="../../static/icons/instagram.svg" width="27px" align="left" hspace= "18">
<a href="https://instagram.com/01_binary">instagram.com/01_binary</a><br/>

#### 안녕하세요 다양한 분야에 관심이 있어<br/> 스스로 지속적으로 발전하는 개발자 이진수입니다!

---

## Available Things

<br/>

NextJS, ReactJS, TypeScript, JavaScript, AWS, GraphQL, NodeJS

---

## Work Experiences

<br/>

<details>

<summary>2022. 03 ~ &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp핀다 / Front-End 개발자</summary>

- 예적금 비교 프로덕트 개발
- 신용점수, 신용정보, 신용점수 올리기 프로덕트 개발
- 모노 레포 Git Flow 작성 및 모노 레포 세팅
- 마이데이터 알고하는 동의 개발
- DSR 계산기, 여윳돈 계산기 유지보수
- 금융인증서 연동
- 연말정산 계산기 (3종), 금융 계산기 (5종) 레거시 이관 및 리팩토링
- 안드로이드, iOS와 WEB 간 인터페이스 다수 추가
- 앱 알림탭 리팩토링
- 중도 상환 안내페이지 개발
- Web ALB 세팅
- 앱 자주 묻는 질문 개발
- 이벤트 페이지 다수 개발

* 기술 스택 : NestJS, Redux, RTK-Query, Redux-saga, Tailwind CSS, TypeScript, Styled-components, AWS

</details>

<details>

<summary>2020. 12 ~ 2022. 02 &nbsp &nbsp아이겐코리아 / Front-End 개발자</summary>

- Embeddable React 개발

  - 타 사이트에 Script 방식으로 삽입할 수 있는 봇 형태의 UI 개발
  - User Agent를 활용한 PC, MO UI 제작
  - 고객사의 Sub Domain이 다를 경우에도 Indexed DB에 저장된 내용을 공유하기 위해 iframe으로 특정 도메인을 가진 페이지 삽입
  - iframe으로 삽입된 페이지에서 Indexed DB를 활용하여 Script가 삽입된 타 사이트 페이지의 정보를 기록
  - Message Channel API를 활용한 Embeddable React와 iframe간의 통신 구현
  - 페이지의 정보를 토대로 호출할 추천 리스트 API를 선별하는 Trigger 기능 제작
  - AWS Code Pipeline를 활용한 프론트엔드 CI / CD 구축 및 배포
  - 기술 스택 : React, Redux, React hooks, TypeScript, Mono Repo (Lerna, yarn Workspace), SCSS, Atomic Design System

- 어드민 웹 리팩토링 및 유지보수

  - 고객사에게 데이터 추천과 관련된 모든 정보를 제공하기 위한 백오피스(어드민) 웹에 대한 전반적인 유지보수 및 리팩토링
  - React와 상태 관리 라이브러리 Redux, 비동기처리를 위한 Redux-Saga 활용
  - Component 비즈니스 로직을 Custom Hooks에서 처리
  - Class Component를 Functional Component로 리팩토링
  - Global CSS (Bootstrap 등) 제거 및 레이아웃 재설계
  - locale(react-intl)를 활용한 국제화
  - 추천 리스트에 따라 다른 데모 View 제공
  - JavaScript에서 TypeScript로 마이그레이션
  - Antd와 Task runner gulp를 활용한 Dark Mode 제작
  - AWS Code Pipeline를 활용한 프론트엔드 CI / CD 구축 및 배포
  - AWS Certificate Manager, AWS Route 53를 활용한 SSL 적용, 호스팅
  - 기술 스택 : React, Redux, Redux-saga, React hooks, TypeScript, CRACO, Antd UI, Styled-components, AWS

- puppeteer를 활용한 네이버 쇼핑 크롤링

  - puppeteer를 활용하여 각 검색어에 대한 검색 결과를 크롤링
  - 각 검색어의 정보가 담긴 csv 파일을 Read 후, 검색의 Input 값으로 활용
  - 각 검색 데이터의 네이버 쇼핑 리뷰 텍스트 크롤링
  - 각 검색 결과의 이미지를 크롤링하여 RGB 또는 Hex Code로 변환
  - 해당 데이터를 tsv, csv 파일로 변환
  - 기술 스택 : JavaScript, Puppeteer 등

- AWS ELB 트래픽 로그를 활용한 기능 추가

  - AWS Lambda와 Eventbridge를 활용한 매일 정오 배치 작업
  - 당일 특정 API 도메인의 ELB 로그를 확인하여 호출된 도메인의 Query Param 파싱 후, S3에 적재
  - 스프링 Scheduler Cron으로 매일 S3에 적재된 파일에 접근하여 고객사별 사용, 미사용 추천 리스트 구분 후 DB 적재 AWS Lambda를 활용한 데이터 파싱, S3 적재
  - AWS Lambda에서 NodeJS 환경으로 S3 파일을 Read한 후 파싱
  - Eventbridge를 활용하여 Target이 업로드 될 때마다 Target를 파싱
  - 파싱된 데이터를 S3에 csv로 적재

- 카페 24 Admin API를 활용한 상품 데이터 추출

  - AWS DynamoDB, Lambda를 활용하여 고객사의 전체 아이템 정보를 가져오는 일배치 개발
  - 카페 24를 활용하여 쇼핑몰 운영하는 경우 매일 전체 쇼핑 리스트를 제공해주는 API가 존재하지 않음 (limit 최대 100개인 API 존재)
  - limit 최대 100개인 API를 활용하기 위한 초기 Access Token (Expire time: 2시간), Refresh Token 발행 및 DynamoDB에 저장
  - 반복문을 활용하여 전체 쇼핑 리스트 가져오기, Call 수를 Over하거나 만료 시간이 지날 경우 DynamoDB에 저장된 Refresh Token으로 Access Token 재발행 후 사용

- 라운지비 프론트엔드 제작

  - 카페 24를 활용하여 쇼핑몰을 운영하는 라운지비라는 고객사의 프론트엔드 일부분을 직접 작성
  - PC용 페이지 총 11개에 들어갈 Carousel 형태의 View 제작
  - Auto Scroll, Responsive, Mouse Hover Stop 기능을 가진 Carousel View 제작
  - fetch API와 DOM API 활용
  - Vanilla JS로 제작
  - 기술 스택 : HTML5, JavaScript, CSS3

- 올리브영 어드민 프론트엔드 개발

  - 회사에서 제공하는 데이터 추천 API의 데모 및 성과 분석 리포트를 보여주는 올리브영용 백오피스(어드민)를 개발
  - 추천 배치 정상 작동 여부 View 개발
  - 추천 배치 정상 작동 여부 API 개발
  - 백엔드 서버에서 AWS S3의 presigned url 발행을 요청하여 사용자는 가용 가능한 시간동안 프론트엔드에서 S3 파일 다운 가능
  - 추천 성과 지표 조회 화면 개발
  - 추천 & 라이브 스트림 데모 화면 개발
  - 운영 기능 (AB TEST 설정, 필터링 등) 개발
  - 기술 스택 : React, Redux, AWS (Lambda, Code Pipeline, S3)

</details>

<details>
<summary>2020. 01 ~ 2020. 11 &nbsp &nbsp신세계 I&C / Cloud Architect</summary>

- 마이크로 사이트 개발

  - 리테일 분야 AWS 활용에 대한 파트너 기업의 전문성을 인증해주는 AWS Retail Competency 취득을 위해 마이크로 사이트 개발
  - 정적 사이트 생성기인 Gatsby(React + GraphQL)로 개발
  - react-intl를 활용한 번역 기능 개발
  - AWS S3, CloudFront를 활용한 배포
  - AWS Retail Competency 심사 항목 대상으로 해당 사이트 활용
  - 관련 기사 : https://www.shinsegaegroupinside.com/44056/
  - 도메인 : https://ssgmsp.com

- Public Cloud 환경에서 Infra 운영

  - MSP (Mirco Service Provider) 역할을 하는 팀에서 인프라 운영 업무를 맡음
  - AWS Console 상에서의 보안 그룹, EC2 등 AWS Service 네이밍 룰 정의
  - 고객의 요청에 따라 Security Group Open 및 방화벽 정책 제어
  - AWS 서비스 사용량에 따른 비용 최적화
  - 기존 고객사의 아키텍처를 바탕으로 AWS로 인프라를 마이그레이션 했을 때의 AWS 아키텍처 제작
  - AWS Serverless Function인 Lambda를 활용하여 EC2에 보안 솔루션 자동설치

</details>

<details>
<summary>2019. 08 ~ 2019. 11 &nbsp &nbsp델리(Dely) / Back-End 개발자 InternShip</summary>

- 플랫폼 백엔드에 대한 전반적인 리팩토링과 기능 개발을 수행
- RDB 설계, Graphql Query, Mutation, Subscription 작성
- 네이버 클라우드 SENS를 활용하여 인증 메세지 전송 구현
- AWS, Naver Cloud Platform 등 여러 API를 활용한 경험
- 기술 스택 : NodeJS, GraphQL, Sequelize, AWS, Naver Cloud Platform

</details>

<details>
<summary>2019. 07 ~ 2019. 08 &nbsp &nbsp크로니아이티 / InternShip</summary>

- IoT 플랫폼인 OneM2M을 매주 학습하고 다른 학생 및 교수님들과 세미나를 진행

</details>

---

## Activities

<br/>

<!-- 프론트엔드 개발을 위한 자바스크립트 (feat. VanillaJS)
 -->
 <details>
<summary>2022. 01 ~ 2022. 02 &nbsp&nbsp프론트엔드 개발을 위한 자바스크립트 (feat. VanillaJS) / Front-End 개발자</summary>

- 프로그래머스에서 진행하는 JavaScript 스터디
- 매주 미션을 진행하며 멘토분들께 코드 리뷰를 받음
- Vanilla JS로만 미션을 진행하여 JS에 대한 기본기 강화
- 기술 스택 : JS
- 관련 링크 : [Link](https://programmers.co.kr/learn/courses/13545)

</details>

<details>
<summary>2021. 08 ~ 2021. 10 &nbsp&nbsp빗썸 테크 아카데미 1기 / Front-End 개발자</summary>

- 4주간 빗썸코리아에서 주최하는 웹 프론트엔드 과정을 학습하고 이를 토대로 3주간 프로젝트를 진행
- 코인에 지식이 없는 초보 투자자가 투자 고수들의 포트폴리오를 따라 투자할 수 있는 플랫폼 Clone Coin 개발
- 기술 스택 : React, JS, Redux, Redux-saga, styled-component, Custom Hooks
- 관련 링크 : [Link](https://docs.google.com/presentation/d/1snmurKuTz5yTYzdyzOJS9oceM7djMcEkXLpThUHcKeg/edit?usp=sharing)

</details>

<details>

<summary>2021. 01 ~ 2021. 03 &nbsp&nbspD&D 4기 / Front-End 개발자</summary>

- Front-End 개발자로 참여해 소비자들의 현명한 소비를 위한 서비스 '쫌싸!' 개발
- 반응형으로 PC, Mobile용 사이트 개발
- 기술 스택 : React, JS, Context API, Tailwind, AWS
- 관련 링크 : [Link](https://dnd.ac/project/10)

</details>

---

## Education

<br/>

2014. 03 ~ 2020. 02 &nbsp&nbsp동국대학교 컴퓨터공학과

---

## Certificates

<br/>

- AWS Solutions Architect – Associate
- AWS Cloud Practitioner
- 정보처리기사

---

<!--
## Papers

<br/>

- LoRaWAN 기반 블록체인 차량정보 관리 체계의 설계 및 구현

  - LoRa를 활용하여, 신뢰성 있는 차량 정보를 수집하고 이를 블록체인으로 관리할 수 있는 시스템을 구축
  - 고유 번호 - 106329679 &nbsp&nbsp[Link](http://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=ff3fa5ed2256b1546aae8a972f9116fb)

- 전자제어 기반 잠금장치 시스템의 설계 및 구현
  - IoT 기술을 활용해 전자식으로 잠금장치(금고)를 제어하는 시스템을 설계 및 구축
  - 고유 번호 - 106039132 &nbsp&nbsp[Link](http://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=fa8c22c6df2c09d94884a65323211ff0)

<!--금고(o), lora1(한국정보)(o),lora2(국제),lora3(scopus),종설(1(국내),2(국제))  -->

<!--
## Projects

<br/>

2021

- 초보 투자자가 투자 고수들의 포트폴리오를 따라 투자할 수 있는 플랫폼 Clone Coin 제작

  - Project Period : 2021-09 ~ 2021-10
  - Used Things : React, Redux, Redux-Saga, Antd, Styled-Component, AWS

- 소비자들의 현명한 소비를 위한 서비스 '쫌싸!' 제작
  - Project Period : 2021-01 ~ 2021-03
  - Used Things : React, Context API, Tailwind, AWS

<br/>

2020

- Gatsby를 활용한 개인 블로그 제작
  - Project Period : 2020-01 ~ 2020-02
  - Used Things : React, GraphQL, JavaScript

<br/>

<details>

<summary>2019</summary>

- OneM2M 기반 드론을 활용한 스마트 치안 시스템

  - Project Period : 2019-09 ~ 2019-12
  - Used Things : OneM2M, JavaScript

- Semantic Segmentation을 이용한 교내 시설 혼잡도 안내 서비스

  - Project Period : 2019-10 ~ 2019-11
  - Used Things : JavaScript, OneM2M, Tensorflow.js

- 카카오 아레나 브런치 사용자를 위한 글 추천 대회
  - Project Period : 2019-07 ~ 2019-07
  - Used Things : Python, Jupyter Notebook
- LoRa Network 기반 블록체인 차량 정보 관리 체계
  - Project Period : 2019-04 ~ 2019-05
  - Used Things : Raspberry Pi, LoRa
- 블록체인을 활용한 중고거래 이력관리 시스템 구성

  - Project Period : 2019-03 ~ 2019-05
  - Used Things : JavaScript, NodeJS, Docker, Hyperledger Fabric

- 오픈소스 기반의 챗봇 성능 비교분석 연구
  - Project Period : 2019-01 ~ 2019-01
  - Used Things : JavaScript, Dialogflow, QnA Maker

</details>

<br/>

<details>

<summary>2018</summary>

- 인공지능 음성인식을 통한 편의점 상품정보 알림 시스템

  - Project Period : 2018-09 ~ 2018-12
  - Used Things : JavaScript, NodeJS, MySQL

- 웨어러블 디바이스를 활용한 실시간 소방관 위험 감지 시스템

  - Project Period : 2018-11 ~ 2018-12
  - Used Things : Arduino Uno, Android

- 강의실 대관 및 강의실 정보열람 시스템

  - Project Period : 2018-11 ~ 2018-12
  - Used Things : JavaScript, NodeJS, MySQL

- OpenGL를 이용한 게임 제작

  - Project Period : 2018-11 ~ 2018-12
  - Used Things : C++, OpenGL

- 전자제어 기반 잠금장치 시스템의 설계 및 구현

  - Project Period : 2018-10 ~ 2018-11
  - Used Things : Arduino Uno, JavaScript, NodeJS, MongoDB

- 크롤링을 이용한 포털사이트 검색순위 종합시스템
  - Project Period : 2018-06 ~ 2018-06
  - Used Things : Java, Swing

</details> -->
