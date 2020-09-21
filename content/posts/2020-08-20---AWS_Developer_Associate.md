---
title: AWS Developer Associate 자격증 공부 -1!
date: "2020-08-20T23:46:37.121Z"
template: "post"
draft: false
slug: " AWS_Developer_Associate_1"
category: "AWS"
tags:
  - "AWS"
  - "Developer Associate"

description: "Cloud Practitioner를 취득하고 다음 자격증인 AWS Developer Associate를 취득하기 위해 공부를 시작하였다!"
---

<br/>

6월 초쯤 AWS의 자격증 중 가장 기초적인 자격증인 AWS Cloud Practitioner를 취득하였다.<br/>

그다음 자격증인 Developer Associate는 빠르면 7월 말, 늦어도 8월까지 취득하려 했지만..<br/>
게으름에 져버렸다...ㅠ 다시 초심으로 돌아가 열심히 살아보자!<br/>

---

공부를 하며 새로운 알게 된 부분, 중요한 부분만 간단하게 적으려 노력했다.<br/>

## AWS Budget Setup

- 사용자가 특정 기간 동안 사용할 예산을 정하고 초과한다면 이메일 등으로 알람을 보냄
- 알람 설정 종류
	- Actual Costs
	- Forecasted Costs

---

## AWS Fundamentals

- Regions
  - Cluster of Data Centers
  - 특정 Regions에서만 사용할 수 있는 AWS Service가 있다
        - Availability Zones
            - AZ는 하나 이상의 DC이다
    		- 다수의 AZ는 서로 독립적이다
			- 각 Region은 최소 2개에서 최대 6개까지의 AZ를 가지고 있다
			- 각 AZ는 높은 Bandwidth, Low Latency Networking으로 연결되어 있음
				
- IAM (Identity and Access Management)
    - Global Service
	- Root Account는 사용, 공유되어서는 안된다
	- Users, Groups, Roles로 구성됨
	- User를 생성할 때는 그 User가 사용할 권한만 가지는 것이 적절하다 (Least Privilege Principles)
	- Policy는 JSON으로 작성된다.
	- User는 사람, Role은 기계에 할당된다
	- User는 여러 개의 Group에 속할 수 있다
	- MFA(Multi Factor Authentication) 사용 가능
	- IAM Federation
    	- 회사용으로 사용
		- 회사의 Credential을 사용하여 로그인을 할 수 있다

- Abstraction
    - One IAM User per One Person
	- One IAM Role per Application
	- IAM credentials 공유되어서는 **절대! 안된다**
    - Root Account 절대 사용하지 말자

- EC2
    - VM를 빌리는 것
	- 가상 드라이브(EBS)에 데이터를 저장할 수 있다
	- ELB를 활용해 로드 밸런싱 가능
    - ASG를 통해 Scaling 가능

<img src= "/categoryImage/AWS/Developer/ssh_table.png" width="700px"><br/>

---

## SSH Troubleshooting

- Connection timeout
    - Check Security group 
    - Corporate firewall or Personal firewall

- Connection refused
    - Instance에 접근은 가능하다는 의미
    - Instance에 ssh가 미설치 되었을 가능성

- Permission denied
    - Check Security Key
    - Check User Name
	- 어제는 됐는데 오늘은 안된다?
        - Public IP가 바뀌었을 가능성

---

## Security Groups

- 네트워크 보안의 뼈대

<img src= "/categoryImage/AWS/Developer/sg_1.png" width="500px"><br/>

- 방화벽과 같은 역할을 함
- 기능
    - Access to Ports
    - Inbound, Outbound Network

<img src= "/categoryImage/AWS/Developer/sg_2.png" width="600px"><br/>

- SSH Access를 위해 하나의 독립적인 Security Group을 만드는 게 좋음 (내 IP가 허용된 SG)

<img src= "/categoryImage/AWS/Developer/sg_3.png" width="600px"><br/>

## Private IP vs Public IP vs Elastic IP

- Public IP
    - 인터넷에서 유니크하다
    - 인터넷을 통해 식별할 수 있다

- Private IP
    - Private Network 내부에서 유니크하다
    - Private Network 안에서만 식별할 수 있다
    - 여러 개의 Private Network들은 서로 같은 IP를 가질 수 있다
	- Internet Gateway를 통해 다른 것들과 통신할 수 있다

- Elastic IP
    - AWS에서 사용하는 EIP
    - Instance에 부착할 수 있다
    - 기존의 부착된 Instance에서 해제하고, 다른 Instance에 재할당 가능하다
    - 전반적으로, EIP 사용보단 DNS name, Load Balancer 사용을 추천함

- Abstraction
    - Private IP for internal AWS Network
    - Public IP for the WWW
	- Instance가 stop -> start 되면 Public IP가 변경됨 (Private IP, EIP 변경되지 않음)

### 마무리

<br/>

거의 3달 만의 포스팅이라니... ㅠ 정신 좀 차려야겠다!<br/>
Developer를 고득점으로 취득할 수 있을 때까지 반복해서 공부하고 정리한 내용을 올려야겠다!<br/> 

---

본 포스팅은 Udemy 강의 **Ultimate AWS Certified Developer Associate 2020 - NEW!**를 공부하며 정리한 포스팅입니다!
