---
title: AWS Developer Associate 자격증 공부 -2!
date: "2020-08-23T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Developer_Associate_2"
category: "AWS"
tags:
  - "AWS"
  - "Developer Associate"

description: "저번 포스팅에 이어 오늘은 EC2와 LB에 관해 설명한다."
---

<br/>

저번 포스팅에 이어 오늘은 EC2와 LB에 관해 설명한다.<br/>

---

공부를 하며 새로운 알게 된 부분, 중요한 부분만 간단하게 적으려 노력했다.<br/>

### EC2 User Data

- **Script is only run once at the instance first start**

<img src= "/categoryImage/AWS/Developer/user_data.png" width="450px"><br/>

- EC2 Instance Types
    - OnDemand Instances : short workload, predictable pricing
	- Reserved Instances : Minimum 1year
	- Spot Instances
	- Dedicated Instances
	- Reserved Instances for baseline + On-Demand & Spot for peaks
	
- Elastic Network Interfaces (ENI)
	- 하나의 EC2에 Eth0, Eth1 등 두 개의 Private IP 할당 가능
	- 하나의 Private IP 당 하나의 EIP
	- 하나의 Public IP 당 하나의 EIP
	- 하나 이상의 보안 그룹 할당 가능
	- 하나의 MAC 주소 할당 가능
	- AZ에 종속
    - Eth를 다른 EC2 인스턴스로 옮겨 Private IP 변경 가능

---

### EC2 Pricing

- 1분당 사용량 청구
- Region, Instance Type, OS 등에 따라 가격이 다름
- Instance가 Stop 상태면 가격 청구 X

### AMI
- Custom Image
- Region에 종속적 

- EC2 Instances
    - M types, balanced (No GPU)
	- T2/T3 types, burstable
	    - CPU 사용량이 특정 임계치 넘으면 CPU의 성능이 좋아진다. 
		- 그 후, burst credit이 사용된다.
        - Credit이 떨어지면 CPU 성능은 다시 낮아진다.

<img src= "/categoryImage/AWS/Developer/credit.png" width="550px"><br/>

- 시험을 통과하기 위한 EC2 Checklist
	- SSH를 사용하여 EC2에 접속하는 방법
	- Security Group 활용법
	- Private Public Elastic IP의 차이점 
	- User Data를 사용한 Instance 커스텀
    - Custom AMI 활용법

---

### ELB, ASG

- Scalability
	- Vertical Scalability
		- Instance의 spec을 올림
	- Horizontal Scalability (Elasticity)
		- Instance의 수를 늘림

- High Availability
    - 시스템을 최소 2개 이상의 DC 또는 AZ를 사용

- LB
	- 인터넷 트래픽을 여러 서버로 뿌려주는 역할
	- SSL 적용 가능
	- Instance에 대한 Health check 가능
    - High Availability 제공

<br/>

- LB Type
	- CLB
		- HTTP, HTTPS, TCP

	- ALB
		- HTTP, HTTPS, WebSocket
		- Support redirect
		- MSA, Container에 적합
			- Target Group 대상
				- EC2 Instances
				- ECS tasks
				- Lambda Function
                - IP Addresses

	- NLB
		- TCP, TLS, UDP
		- One Static IP per AZ
        - Extreme Performance

<img src= "/categoryImage/AWS/Developer/alb.png" width="550px"><br/>

- 그 밖의 LB 정보
    - Private, public ELB 세팅 가능
    - Error 503은 LB의 에러 !
	- 모니터링 가능 (ELB access logs, CloudWatch Metrics) 

### LB Stickiness

<img src= "/categoryImage/AWS/Developer/lb_stickiness.png" width="550px">

- 동일한 Client는 LB를 통해 이전에 접근한 Instance로 다시 접근하는 기능
- CLB & ALB에서 사용 가능 (쿠키가 사용된다)
- 사용 시, 각 EC2 Instance로의 부하가 달라질 수 있다.

### Cross-Zone Load Balancing

<img src= "/categoryImage/AWS/Developer/cross_zone.png" width="400px">

- 각각 다른 AZ로의 Load Balancing 가능!

- CLB
	- 초기값 : 비활성화
	- AZ 간 데이터 전송 요금 X

- ALB
	- 초기값 : 활성화(수정 불가능)
	- AZ 간 데이터 전송 요금 X

- NLB
	- 초기값 : 비활성화
    - AZ 간 데이터 전송 요금 O

---

본 포스팅은 Udemy 강의 **Ultimate AWS Certified Developer Associate 2020 - NEW!**를 공부하며 정리한 포스팅입니다!