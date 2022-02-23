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

React, JavaScript, TypeScript, AWS, NodeJS, GraphQL, Java, Python, SQL, C++

---

## Work Experiences

<br/>

<details>

<summary>2022. 03 ~ &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp핀다 / Front-End 개발자</summary>
</details>

<details>

<summary>2020. 12 ~ 2022. 02 &nbsp &nbsp아이겐코리아 / Front-End 개발자</summary>

- Embeddable React 개발

  - 타 사이트에 Script 방식으로 삽입할 수 있는 봇 형태의 UI 개발
  - 모바일 웹 형태의 UI 제작
  - indexed DB를 활용하여 Script가 삽입된 타 사이트 페이지의 정보를 기록
  - 페이지의 정보를 토대로 호출할 추천 리스트 API를 선별하는 Trigger 기능 제작
  - React, Redux, React hooks, TypeScript, SCSS, Atomic Design System

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
  - React, Redux, Redux-saga, React hooks, TypeScript, CRACO, Antd UI, styled-components, AWS

- puppeteer를 활용한 네이버 쇼핑 크롤링

  - puppeteer를 활용하여 각 검색어에 대한 검색 결과를 크롤링
  - 각 검색어의 정보가 담긴 csv 파일을 Read 후, 검색의 Input 값으로 활용
  - 각 검색 데이터의 네이버 쇼핑 리뷰 텍스트 크롤링
  - 각 검색 결과의 이미지를 크롤링하여 RGB 또는 Hex Code로 변환
  - 해당 데이터를 tsv, csv 파일로 변환

- AWS를 활용한 개발

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

</details>

<details>
<summary>2020. 01 ~ 2020. 11 &nbsp &nbsp신세계 I&C / Cloud Architect</summary>

- 마이크로 사이트 개발

  - AWS Competency 취득을 위한 마이크로 사이트 개발
  - 정적 사이트 생성기인 Gatsby(React + GraphQL)로 개발
  - AWS Retail Competency 심사 항목 대상으로 해당 사이트 활용
  - 관련 기사 : https://www.shinsegaegroupinside.com/44056/

- Public Cloud 환경에서 Infra 운영
  - AWS Console 상에서의 네이밍 룰 정의
  - 고객의 요청에 따라 Security Group Open 및 방화벽 정책 제어
  - AWS 서비스 사용량에 따른 비용 최적화
  - 기존 고객사의 아키텍처를 바탕으로 AWS 아키텍처 제작
  - AWS Lambda를 활용한 보안 솔루션 자동설치
  - AWS EKS HPA 설정 및 Deployment yaml작성 및 배포

</details>

<details>
<summary>2019. 08 ~ 2019. 11 &nbsp &nbsp델리(Dely) / Back-End 개발자 InternShip</summary>

- 공유 배송 플랫폼인 델리에서 Back-End 개발을 진행하였으며, JavaScript로 작성
- AWS, Naver Cloud Platform 등 여러 API를 활용한 경험

</details>

<details>
<summary>2019. 07 ~ 2019. 08 &nbsp &nbsp크로니아이티 / InternShip</summary>

- IoT 플랫폼인 OneM2M을 매주 학습하고 다른 학생 및 교수님들과 세미나를 진행

</details>

---

## Activities

<br/>

<details>
<summary>2021. 08 ~ 2021. 10 &nbsp&nbsp빗썸 테크 아카데미 1기 / Front-End 개발자</summary>

- 4주간 빗썸코리아에서 주최하는 웹 프론트엔드 과정을 학습하고 이를 토대로 3주간 프로젝트를 진행하였습니다!

</details>

<details>

<summary>2021. 01 ~ 2021. 03 &nbsp&nbspD&D 4기 / Front-End 개발자</summary>

- [쫌싸!](https://zzomssa.com)
- Front-End 개발자로 참여해 소비자들의 현명한 소비를 위한 서비스 '쫌싸!' 개발
- React, JS, Context API, Tailwind을 활용하여 반응형으로 PC, Mobile용 사이트 개발

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

## Papers

<br/>

- LoRaWAN 기반 블록체인 차량정보 관리 체계의 설계 및 구현

  - LoRa를 활용하여, 신뢰성 있는 차량 정보를 수집하고 이를 블록체인으로 관리할 수 있는 시스템을 구축
  - 고유 번호 - 106329679 &nbsp&nbsp[Link](http://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=ff3fa5ed2256b1546aae8a972f9116fb)

- 전자제어 기반 잠금장치 시스템의 설계 및 구현
  - IoT 기술을 활용해 전자식으로 잠금장치(금고)를 제어하는 시스템을 설계 및 구축
  - 고유 번호 - 106039132 &nbsp&nbsp[Link](http://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=fa8c22c6df2c09d94884a65323211ff0)

<!--금고(o), lora1(한국정보)(o),lora2(국제),lora3(scopus),종설(1(국내),2(국제))  -->

---

## Projects

<br/>

2021

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

</details>
