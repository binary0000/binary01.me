---
title: AWS Cloud Practitioner 자격증 공부 -3
date: "2020-04-12T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Cloud_Practitioner_3"
category: "AWS"
tags:
  - "AWS"
  - "Cloud_Practitioner"
  - "Certificate"
description: "이번에 정리할 내용은 Module 3으로 AWS 플랫폼의 주요 서비스 및 관련 일반 사용 사례를 설명한다!"
---

<br/>

이번에 정리할 내용은 Module 3으로 AWS 플랫폼의 주요 서비스 및 관련 일반 사용 사례를 설명한다!

---

* **Module 3**
  * AWS 플랫폼의 주요 서비스 및 관련 일반 사용 사례를 설명

---

### Application Load Balancer

<br/><img src="/categoryImage/AWS/alb.png" width="600px"><br/>

AWS의 ELB 서비스에는 총 3가지 유형이 있다. (CLB, ALB, NLB)<br/>
그 중 두 번째인 ALB를 설명하겠다.<br/>
<br/>

* 향상된 기능
	* 지원되는 프로토콜
	* CloudWatch 지표
	* 액세스 로그
	* 상태 확인

<br/>

**ALB는 인스턴스 대신 대상을 등록**하므로 대상 그룹은 해당 대상을 로드 밸런서에 등록하는 방법이다.<br/>

<br/>

* 용어
	* 리스너  : 구성한 프로토콜 및 포트를 사용하여 연결 요청을 확인하는 프로세스이다. 리스너에 대해 정의한 규칙에 따라 로드 밸런서가 하나 이상의 대상 그룹에 있는 대상으로 요청을 라우팅하는 방법이 결정된다.
	* 대상 : 설정된 리스너 규칙에 따른 트래픽의 목적지
	* 대상 그룹 : 지정된 프로토콜과 포트 번호를 사용하여 하나 이상의 등록된 대상으로 요청을 라우팅한다.

<br/><img src="/categoryImage/AWS/alb2.png" width="600px"><br/>

### Auto Scaling

<br/>

Auto Scaling을 통해 APP의 로드를 처리할 수 있는 **적절한 수의 EC2 인스턴스를 유지**할 수 있다.<br/>

EC2에서 APP를 실행할 때 Amazon CloudWatch를 사용하여 워크로드 성능을 모니터링하는 것이 중요하다.<br/>

CloudWatch가 인스턴스의 수를 추가, 제거하는 것은 아니다. Auto Scaling으로 한다.<br/>

<br/>

* Auto Scaling의 구성요소
	* 시작 구성 : Auto Scaling에 의해 시작될 항목을 정의하는 것 Ex) AMI, 유형 보안 그룹 등
	* Auto Scaling 그룹 : 배포가 이루어지는 위치와 배포의 일부 경계를 정의하는 것, 이 단계에서 VPC를 정의
	* Auto Scaling 정책 : EC2 인스턴스를 시작하거나 종료할 시기를 지정하는 방법

<br/>

EC2 인스턴스 또는 로드 밸런서의 성능 정보를 기반으로 CloudWatch 경보를 생성할 수 있다.<br/>

성능 임계 값을 초과하면 CloudWatch 경보가 환경의 EC2 인스턴스에서 확장 또는 축소되는 Auto Scaling 이벤트를 트리거한다.<br/>

<br/>

* 경보 단계
	* 특정 임계 값이 있는 조건
	* 알람이 트리거된 후 수행할 작업

<br/>

### Amazon Route 53

<br/><img src="/categoryImage/AWS/route53.png" width="600px"><br/>

**DNS**(Domain Name Server)이며, 사용자가 도메인 이름을 IP로 변환하도록 요청하는 서비스이다.<br/>
<br/>

* 기능
	* 도메인 등록
	* 글로벌 고가용성 DNS
	* 퍼블릭 및 프라이빗 DNS 이름
	* 다중 라우팅 알고리즘
	* IPv4와 IPv6 모두 지원
	* 다른 AWS 클라우드 서비스와 통합

<br/>

### Amazon Relational Database Services (RDS)

<br/>

MySQL, Amazon Aurora, MSQL Server, PostgreSQL, MariaDB, Oracle의 6개 DB 지원<br/>
Amazon **VPC 서비스를 사용하여 인스턴스를 실행** 할 수 있다.<br/>

자체 IP 주소 범위를 선택하고 서브넷을 생성하며 라우팅 및 액세스 제한 목록을 구성<br/>
**RDS의 기본 기능은 VPC에서 실행되는지 여부에 상관없이 동일**하다.<br/>

데이터베이스 인스턴스는 **Private Subnet에서 격리**되어 있으며 **지정된 APP 인스턴스에만 직접 액세스**할 수 있다.<br/>

<br/>

**다중 AZ를 통한 고가용성**

<br/><img src="/categoryImage/AWS/rds.png" width="600px"><br/>
<br/>

### AWS Lambda

<br/>

AWS Lambda는 **서버를** 프로비저닝하거나 **관리하지 않고도 코드를 실행**할 수 있게 해주는 컴퓨팅 서비스이다.<br/>

람다는 **필요시에만 코드를 실행**하고 초당 수천 개의 요청으로 **자동 확장**한다.<br/>

**컴퓨팅 시간에 대한 비용을 지불하지 않는다.**<br/>
다양한 Programming Language 지원<br/>

<br/><img src="/categoryImage/AWS/lambda.png" width="700px"><br/>
<br/>

### AWS Elastic Beanstalk

<br/>

**PaaS**(Platform as a Service)이며, **APP를 빠르게 배포**할 수 있다. 또한 관리의 복잡성을 줄인다.<br/>

* 제어 권한 유지
	* 인스턴스 유형 선택
	* 데이터베이스 선택
	* Auto Scaling 설정 및 조정
	* APP Update
	* 서버 로그 파일에 액세스
	* 로드 밸런서에서 HTTPS 활성화

<br/><img src="/categoryImage/AWS/eb.png" width="700px"><br/>
<br/>

### Amazon Simple Notification Service (SNS)

<br/>

* 유연한 완전관리형 게시/구독 메시징 및 모바일 **통신 서비스**이다.
* 구독 엔드포인트 및 클라이언트로의 메시지 전달을 Control 한다.
* 안정적인 통신을 손쉽게 설정, 운영 및 전송할 수 있다.
* 마이크로서비스, 분산 시스템 및 서버리스 애플리케이션을 분리 및 확장

<br/><img src="/categoryImage/AWS/sns.png" width="700px"><br/>
<br/>

### Amazon CloudWatch

<br/>

* AWS에서 실행하는 AWS 리소스와 APP를 **실시간으로 모니터링**한다.

<br/><img src="/categoryImage/AWS/watch.png" width="700px"><br/>
<br/>

* CloudWatch 구성 요소
	* 지표
		* 시스템의 성능에 대한 데이터
		* CloudWatch에 게시된 시간 순서별 데이터 요소 세트를 나타냄
		* 기본적으로 여러 서비스에서 리소스에 대한 무료 지표를 제공함
		* 자체 애플리케이션 지표를 게시
		* 검색, 그래프 처리 및 경보를 위해 계정의 모든 지표를 로드

	* 경보
		* 단일 지표를 감시
		* 하나 이상의 작업을 수행
		* 지속하는 상태 변경에 대해서만 작업을 호출

	* 이벤트
	* 로그
	* 대시보드

<br/>

### Amazon CloudFront

<br/>

Content Delivery Network이다.

* 개요
	* 계속 확장되는 글로벌 네트워크
	* 엣지의 콘텐츠 보안
	* 주요 AWS 서비스와 긴밀한 통합
	* 고성능
	* 비용 효율성
	* 사용 편의성

* 사용 사례
	* 정적 자산 캐싱
	* 라이브 및 온디맨드 동영상 스트리밍
	* 보안 및 DDoS 보호
	* 동적 및 사용자 지정 가능한 콘텐츠
	* API 가속화
	* 소프트웨어 배포

WAF : Web Application Firewall

<br/>

### AWS CloudFormation

<br/>

APP를 지원하는 관련 리소스 그룹을 반복적이고 예측할 수 있게 생성하는 **작업을 자동화 및 간소화**한다.
(AWS 리소스의 프로비저닝을 자동화하는 엔진 역할)<br/>
<br/>

* 템플릿
	* AWS CloudFormation 템플릿은 JSON 또는 YAML 형식의 텍스트 파일이다.
	* 템플릿에서 인스턴스 유형, AMI ID, 블록 디바이스 매핑, Amazon EC2 키 페어 이름 등과 같은 Amazon EC2 인스턴스를 설명할 수 있다.

<br/>

**JSON Example**
```json
{
  "AWSTemplateFormatVersion" : "2010-09-09",
  "Description" : "A sample template",
  "Resources" : {
    "MyEC2Instance" : {
      "Type" : "AWS::EC2::Instance",
      "Properties" : {
        "ImageId" : "ami-0ff8a91507f77f867",
        "InstanceType" : "t2.micro",
        "KeyName" : "testkey",
        "BlockDeviceMappings" : [
          {
            "DeviceName" : "/dev/sdm",
            "Ebs" : {
              "VolumeType" : "io1",
              "Iops" : "200",
              "DeleteOnTermination" : "false",
              "VolumeSize" : "20"
            }
          }
        ]
      }
    }
  }
}
```

<br/>

* 스택

AWS CloudFormation을 사용할 경우 **스택을 하나의 단위로 관련 리소스를 관리**한다.<br/>
스택을 생성, 업데이트, 삭제하여 리소스 모음을 생성, 업데이트 및 삭제할 수 있다.<br/>

**스택의 모든 리소스는** 스택의 AWS CloudFormation **템플릿으로 정의**한다.<br/>

Auto Scaling 그룹, Elastic Load Balancing 로드 밸런서 및 Amazon Relational Database Service(Amazon RDS) 데이터베이스 인스턴스를 포함하는 템플릿을 생성했다고 가정하자.<br/> 

이러한 리소스를 생성하려면 **생성한 템플릿을 제출하여 스택을 생성**한다.<br/>
그러면 AWS CloudFormation에서 **모든 리소스를 자동으로 프로비저닝**한다.<br/>

이러한 작업을 콘솔, API 또는 AWS CLI 등을 사용하여 스택으로 작업할 수 있다.<br/>