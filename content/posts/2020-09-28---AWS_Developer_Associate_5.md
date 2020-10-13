---
title: AWS Developer Associate 자격증 공부 -5!
date: "2020-09-28T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Developer_Associate_5"
category: "AWS"
tags:
  - "AWS"
  - "Developer Associate"

description: "저번 포스팅에 이어 오늘은 VPC와 S3 등에 관해 설명한다."
---

<br/>

저번 포스팅에 이어 오늘은 VPC와 S3 등에 관해 설명한다.<br/>

---

공부를 하며 새로운 알게 된 부분, 중요한 부분만 간단하게 적으려 노력했다.<br/>

### VPC (Virtual Private Cloud)

<br/>

Subnets : AZ level에서 설정 가능

<img src= "/categoryImage/AWS/Developer/subnets.png" width="250px"><br/>

AZ 영역내에서 Public, Private Subnet으로 나누어 망 분리 가능<br/>

<br/>

### Network ACL vs Security Groups

<br/>

Network ACL
- ALLOW, DENY 룰을 가지고 있다
- Subnet level에서 attach 가능
- Return traffic이 명시적으로 룰에 의해 Allow 되어야함
- 해당 Subnet의 모든 Instance들에 자동으로 룰이 적용됨

<br/>

Security Groups
- ALLOW 룰만 가지고 있다
- Instance level에서 attach 가능
- Return traffic이 자동으로 룰에 관련없이 Allow 되어야함
- Instance에 Security Group을 Associate하여 적용 가능

<br/>

Flow Log
- AWS 서비스의 네트워크 정보를 캡쳐한다
- VPC, Subnet, Elastic Network Interface 등에 적용 가능

<br/>

VPC Peering : VPC 간의 통신<br/>

VPC Endpoints : Private Network를 연결할 수 있게 해준다<br/>

<img src= "/categoryImage/AWS/Developer/vpc_endpoint.png" width="250px"><br/>

---

### S3

<br/>

- Buckets : Directory, Unique Name
- Objects : File (최대 5TB), 오른쪽 클릭 -> 파일 열 수 있음
- URL -> Access Denied
- Versioning : Bucket level

<br/>

#### S3 Encryption

- 기능
    - Encryption in transit
	- HTTPS endpoint : encryption in flight

- SSE-S3 : AWS가 AES-256 등을 활용하여 암호화

<br/><img src= "/categoryImage/AWS/Developer/sse_s3.png" width="350px"><br/>

- SSE-KMS : KMS로 암호화

<br/><img src= "/categoryImage/AWS/Developer/sse_kms.png" width="350px"><br/>

- SSE-C : 자기의 암호화 키로 암호화

<br/><img src= "/categoryImage/AWS/Developer/sse_c.png" width="350px"><br/>

#### S3 Security

- User based
	- IAM policy
- Resource based
	- Bucket policy
	- Object Access Control List
	- Bucket Access Control List

#### Bucket Policy

- JSON based

#### S3 Website (Static Hosting)
	
#### S3 CORS (Cross-Origin Resource Sharing)
	
#### S3 Consistency Model
- S3는 여러 개의 서버로 구성되어, 일관성 문제가 생길 수 도 있다.
- Object를 호출할 경우, older version을 get할 가능성이 있다.
- Strong Consistency를 만족할 수 없다.

#### S3 access Logs

- MY 버킷 -> Logging Bucket

#### S3 Replication

- Versioning 필수
- 같은 리전, 다른 리전으로 복사 가능

#### Pre-signed URLs
- 다른 사람이 다운받거나, 열어볼 수 있는 URL를 제공하는 기능, 
- 만료 기간 존재

#### S3 Lifecycle Rules
- Transition actions : 다른 storage class로 옮김
- Expiration actions : 

#### S3 Event Notifications

- SNS, SQS, Lambda Function으로 notify가능

#### AWS Athena

- Serverless 서비스로 S3 File을 분석함

#### S3 Object Lock & Glacier Vault Lock
- WORM (Write Once Read Many) Model

---

#### AWS CLI ON EC2

<br/>

AWS configure를 EC2에서 쓰는 것은 보안적으로 좋지 않다. (Personal credential이 os에 저장되기 때문)<br/>
**-> IAM Role**를 사용하자!

- IAM Role은 EC2 instance에 attach 될 수 있다.
- IAM Role에 policy를 추가하여 EC2 instance에 부여 가능
- IAM Role을 EC2에 붙이면 aws configure 없이 사용 가능

<br/><img src= "/categoryImage/AWS/Developer/cli_on_ec2.png" width="500px"><br/>

#### Dry run

<br/>

테스트 실행 옵션이다.<br/>

AWS CLI로 ```aws ec2 start-instances --instance-ids i-****** --dry-run```
위와 같은 옵션을 주어 작업에 필요한 권한이 있는 지 확인한다.<br/>
실제로 실행되지는 않고, 권한이 있는 지만 확인할 수 있다.<br/>

#### EC2 Instance Metadata
	
해당 인스턴스의 Terminal에서 ```curl http://169.254.169.254/latest/meta-data/```<br/>

EC2에서만 호출가능, 해당하는 EC2 인스턴스의 정보를 확인할 수 있다.<br/>

~/.aws : AWS directory
	
#### AWS CLI Profiles
	
- aws configure --profile : 여러 AWS 계정의 Configure 확인 가능
	
#### CLI with MFA
	
- MFA ARN 정보로 cli에서 aws sts get-session-token 으로 임시 session-token 발급가능
	
#### AWS SDK
	
- C++, NodeJS, Python 등등 여러 SDK 제공
- API Limit : S3는 5500/sec, EC2는 100/sec
- Service limit increase 가능
	
##### AWS Credential Best Practice
	
- AWS Credential를 절대 코드에 저장하면 안된다.
- AWS 내부에서 작업할 경우,Role을 머신에 붙여라
- AWS 외부에서 작업할 경우, 환경 변수 / Profile등을 사용해라

---

본 포스팅은 Udemy 강의 **Ultimate AWS Certified Developer Associate 2020 - NEW!**를 공부하며 정리한 포스팅입니다!