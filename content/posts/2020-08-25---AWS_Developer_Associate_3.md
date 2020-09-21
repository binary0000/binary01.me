---
title: AWS Developer Associate 자격증 공부 -3!
date: "2020-08-25T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Developer_Associate_3"
category: "AWS"
tags:
  - "AWS"
  - "Developer Associate"

description: "저번 포스팅에 이어 오늘은 Auto Scaling Group과 EBS, EFS, RDS 등에 관해 설명한다."
---

<br/>

저번 포스팅에 이어 오늘은 Auto Scaling Group과 EBS, EFS, RDS 등에 관해 설명한다.<br/>

---

공부를 하며 새로운 알게 된 부분, 중요한 부분만 간단하게 적으려 노력했다.<br/>

### SSL(Secure Sockets Layer) / TLS(Transport Layer Security)

- In-flight encryption

<img src= "/categoryImage/AWS/Developer/lb_ssl.png" width="550px"><br/>

- 하나의 웹 서버에 로딩되는 여러 개의 SSL 증명서에 대한 문제를 해결하는 역할
- CLB를 제외한 LB(ALB, NLB), CloudFront에서 작동

<img src= "/categoryImage/AWS/Developer/multi_ssl.png" width="450px"><br/>

---

### ELB - Connection Draining

- Time to complete "in-flight requests" while the instance is de-registering or unhealthy
- 초기 값 : 300초 (범위 : 1 ~ 3600초)

<img src= "/categoryImage/AWS/Developer/lb_cd.png" width="400px"><br/>

---

### Auto Scaling Group

- 증가된 부하에 맞추어 Scale out를 한다.
- 감소된 부하에 맞추어 Scale in를 한다.
- 최소, 최대 인스턴스 수 지정 가능 

<img src= "/categoryImage/AWS/Developer/asg_1.png" width="600px"><br/>

- LB의 타겟그룹이 ASG라면 Scale out 시 자동으로 추가된 인스턴스에도 트래픽을 보낼 수 있음.
- CloudWatch를 통해 ASG (Scale in, out) 가능
- 평균 값(CPU, MEM 등 Custom도 가능)을 통해 CloudWatch 설정가능 (min, max X)

<img src= "/categoryImage/AWS/Developer/asg_2.png" width="600px"><br/>

---

### Scaling Policies
	
- Target Tracking Scaling
	- Ex) CPU 임계치 설정
- Simple / Step Scaling
	- CloudWatch alarm triggered
- Scheduled Actions
	- 사용패턴을 알 경우, 특정 시간에 Scale in/out
  
---

### EBS Volume

- Network drive
- Locked to an AZ

- EBS vs Instance Store(Instance Store 기준)
	- Instance Store는 물리적으로 기계가 attach되어있음
	- Better I/O Perfomance
	- High IOPS (physically attached)
    - 인스턴스 중지를 하면 데이터가 손실될 가능성이 높다

<img src= "/categoryImage/AWS/Developer/efs.png" width="600px"><br/>

- Windows 인스턴스는 Mount 불가능 (Linux만 가능)

---

### EFS

- 여러 AZ의 EC2에 적용 가능

- EFS vs EBS(EBS 기준)
	- EBS는 한 번에 하나의 Instance에만 부착됨
	- AZ 내부에서만 탈부착 가능
	- EC2가 종료되면, Root EBS Volume이 종료된다 (초기값)

---

### RDS
	
### RDS VS DB on EC2
	
- RDS가 제공하는 것들
	- OS 패치
	- 프로비저닝
	- Backup
	- Monitoring dashboard
	- Read replica
	- Multi AZ
	- Scaling

**하지만 ssh로 접속 불가능**

- RDS Backups
	- Automated backups
		- Daily full backup
		- 트랜젝션 로깅 (5분 마다)
		- 7일간 유지 (35일까지 연장가능)
	- DB Snapshots
		- User가 트리거
		- 유지기간 설정가능 (최대 6개월)

**시험대비로 Multi AZ와 Read replica의 차이를 이해하는 것은 매우 중요**<br/>

- Read Replica
	
	- 최대 5개까지 Read Replica 할당가능
	- **같은 AZ, 다른 AZ, 다른 Region 모두 가능**
	- Read Replica는 SELECT만 가능
	- RDS Read Replicas를 다른 AZ에 배치할 경우 복사할 때 Cost 발생

- Multi AZ
	
	- One DNS name

RDS 자동 Storage scaling 기능 있음

- RDS Security
	- KMS, AES-256으로 암호화 가능
	- Master가 encrypt 안되면, read도 안된다
	- At rest Encryption
	- In-flight Encryption (SSL 사용)
    - IAM 인증을 통해 RDS에 로그인도 가능

- Aurora
	
	- AWS Cloud optimized
	- 스토리지 10GB에서 64TB까지 자동으로 증가 가능
	- RDS보다 20% 정도 비쌈
	- Write(Master)용 하나
	- FailOver 30초 이내
    - Writer, Reader Endpoint 존재

### Aurora Serverless

<img src= "/categoryImage/AWS/Developer/aurora.png" width="450px"><br/>

---

본 포스팅은 Udemy 강의 **Ultimate AWS Certified Developer Associate 2020 - NEW!**를 공부하며 정리한 포스팅입니다!