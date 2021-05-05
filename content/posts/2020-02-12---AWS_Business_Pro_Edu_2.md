---
title: AWS 비즈니스 전문가 교육 -2
date: "2020-02-12T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Business_Professional-2"
category: "AWS"
tags:
  - "AWS"
  - "MAP"
  - "Business"
  - "Service"
description: "AWS의 서비스는 Lambda, EC2, ELB(Elastic Load Balancing), RDS, S3 등이 있으며 그 개수는 약 170개이다..."
---

<br/><br/><img src="/categoryImage/AWS/aws_map.png" width="900px">
<p style="font-size:1.5em; font-weight: bold; text-align: center;">AWS MAP</p>

위에 보이는 Map은 AWS 서비스들을 연결해놓은 것이다(2018년 기준).<br/>
확대를 해봐도 잘 보이지 않는다.<br/>
서비스들은 더 늘어나 현재는 약 170개이며 앞으로도 더 늘어날 것이다.<br/>

AWS와 관련된 일을 하지 않는다면 이러한 서비스들을 **모두 알 필요는 없다.**<br/>
아래에는 알 필요가 있다고 생각하는 서비스 몇 개를 간단하게 기술하였다.

### AWS Services<br/><br/>

* **AWS Lambda : Serverless Computing**
  * **FaaS (Function as a Service)**로써 서비스를 제공하며 API들을 여러 개의 Function으로 나누어 각 Function의 호출 횟수만큼 비용을 지불한다.<br/>
  이 부분에 대한 자세한 설명은 나중에 공부하여 추가로 포스팅하겠다!

* **Amazon EC2**
  * 클라우드에서 **확장식 컴퓨팅을 제공**한다.<br/>
  인스턴스 유형(쉽게 말해 컴퓨터 사양)들을 자동, 수동 조정이 가능하다.<br/>
  * **EIP**(클라우드 IP 고정 할당), Amazon EBS 볼륨을 사용해 **영구 스토리지 볼륨에 데이터 저장** 등 여러 기능이 있다.
  * **AMI**(Amazon Machine Image)로 OS 등 여러 소프트웨어를 쉽게 구성할 수 있다.

* **Amazon S3(Simple Storage Service)**
  * S3는 간단하게 **파일 서버의 역할을 하는 서비스**라고 생각할 수 있으며(정확히는 Object Storage이지만..) 또한 **웹 서버로써 활용**이 가능하다.<br/>
  * image 파일 등을 DB에 BLOB Type으로 저장할 수 있다. 하지만 이러한 방식으로 저장하는 것은 효율적이지 않으며, 실 서비스에서 이러한 방식을 사용하는 것은 아직까지 보지 못하였다. 이것이 파일 서버를 사용하는 이유이다.
  * **특징**
      * **버킷(Bucket)** : S3에서 생성할 수 있는 최상위 디렉토리의 개념이며, 버킷의 이름은 유니크해야 한다.
      버킷에 여러 개의 객체들이 담기며, 버킷에 담을 수 있는 객체의 수는 무제한이다.
      * 인증과정을 통해 파일에 무단으로 Access 하지 못하도록 설정할 수 있다.
      * 버전 관리 등을 통해 복원이 가능하다.
  * **잡지식**
      * Naver Cloud PlatForm의 Object Storage 또한 S3의 SDK를 사용한다.
      * S3와 CloudFront를 사용하여 스트리밍 서비스를 만들 수 있다.

* **Elastic Load Balancing**
  * 하나의 서버에 굉장히 많은 양을 트래픽이 수신된다면, 그 서버는 버티지 못하고 문제가 생긴다.
  **ELB(Elastic Load Balancing)**는 이를 해결하기 위해 여러 개의 서버에 **수신 트래픽을 분배**해주는 **단일 진입점(Single Entry point)**이다.
  *  EC2가 ELB를 거치도록 시스템을 구성하면 **EC2는 Client와 직접적인 통신을 할 수 없다.** 그 결과 EC2는 송신자(Client)의 정보를 알 수 없다.
  이를 해결하기 위해 **특수한 헤더**를 필요로 한다. ELB 부분 또한 나중에 하나의 포스팅으로 더욱 자세하게 다루겠다!

* **Elastic Container Service**
  * 컨테이너(Docker, Kubernetes)를 사용해본 사람들은 알겠지만, 개발자라면 절대 빼놓을 수 없는 **협업에서 실행 및 개발 환경을 동일하게 하는 데 굉장히 유용하다.**
  * **ECS**는 확장성 및 성능이 뛰어난 컨테이너 관리 서비스로서, 도커 컨테이너를 지원하고 관리형 인스턴스에서 애플리케이션을 실행 가능하다.

* **Database Service**
  * **RDS**
      * EC2와 마찬가지로 인스턴스 유형을 쉽게 스케일링 가능하며, 종류로는 Aurora, MySQL, PostgreSQL, Maria, Oracle 등이 있다.
  * **DynamoDB(NoSQL)**
      * DynamoDB는 Serverless로 Serverless 웹 앱, Micro Service 등에 최적화되어 있다. 그 외로 NoSQL의 특징을 가지고 있다.
  * **ElastiCache**
      * **ElastiCache는 Redis 또는 Memcached와 호환되는 In-Memory Data Store**이다.<br/>
      여기서 Store라는 용어는 데이터베이스, 캐시, 메시지 브로커 및 대기열 포함한다.<br/>
      In-Memory 아주 간단하게 설명하자면 Data가 HDD or SSD에 적재되어 있지 않고, Memory에 올라가 있어 속도가 빠르다는 장점이 있다.
* **AWS Identity and Access Management(IAM)**
  * AWS 서비스 및 리소스에 대한 액세스를 안전하게 제어할 수 있게 해준다. ex) 액서스 제어 및 분석, 권한 부여 

---

**Module 2 : AWS 파트너 커뮤니티**
  * APN의 목표와 이점
      * 글로벌 AWS 파트너 지원 네트워크에 참여
      * AWS를 사용하여 성공적인 비즈니스와 솔루션을 구축 및 유지
      * 비즈니스, 기술, 마케팅 및 시장 진입 지원을 획득

  * APN의 두가지 파트너 유형
      * 컨설팅 파트너 : 고객이 AWS를 기반으로 워크로드 및 APP을 디자인, 설계, 구축 마이그레이션 및 관리할 수 있도록 돕는 전문 서비스 회사
      * 기술파트너 : AWS 제품 및 서비스에서 호스팅되거나 그와 통합되는 소프트웨어 솔루션을 제공한다. AWS를 기반으로 하는 애플리케이션을 구축하고 재판매한다.

  * APN 성과 티어
      <img src="/categoryImage/AWS/apn_teer.png" width="800px">

      컨설팅 파트너는 4개의 성과 티어, 기술 파트너는 3개의 성과 티어가 있다.<br/>
      기업의 AWS 전문 지식 수준이 높아짐에 따라 APN 티어를 업그레이드하여 추가적인 혜택을 누릴 수 있다.