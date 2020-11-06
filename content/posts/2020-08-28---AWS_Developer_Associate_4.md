---
title: AWS Developer Associate 자격증 공부 -4!
date: "2020-08-28T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Developer_Associate_4"
category: "AWS"
tags:
  - "AWS"
  - "Developer Associate"

description: "저번 포스팅에 이어 오늘은 ElastiCache와 Route 53 등에 관해 설명한다."
---

<br/>

저번 포스팅에 이어 오늘은 ElastiCache와 Route 53 등에 관해 설명한다.<br/>

---

공부를 하며 새로운 알게 된 부분, 중요한 부분만 간단하게 적으려 노력했다.<br/>

### ElastiCache

<br/>

ElastiCache의 종류

- Redis
- Memcached

<br/>

ElastiCache의 용도

<img src= "/categoryImage/AWS/Developer/es_1.png" width="400px"><br/>

- DB의 부하를 줄이기 위한 용도로 사용됨
- Cache에 원하는 데이터가 없다면, DB 접근 후 다시 Cache에 저장

<br/>

<img src= "/categoryImage/AWS/Developer/es_2.png" width="400px"><br/>

- 세션 저장소 용도로 사용 가능

---

### Redis vs Memcached

<br/>

- Redis
    - Multi AZ with Auto-Failover
    - Read Replicas 기능
    - AOF(Append Only File)의 활용으로 데이터 안정성이 높다
    - Backup and Restore 기능

- Memcached
    - Multi-node 활용으로 sharding 가능
    - Non persistent
    - No Backup and Restore
    - Multi-threaded 아키텍쳐

Data가 천천히 변하고 Key가 거의 필요 없다면 Caching이 효율적이다.<br/>
Data가 빠르게 변하고 Key의 사용이 빈번하다면 Caching은 비효율적이다.<br/>

---

### Lazy Loading, Cache-Aside, Lazy Population

<br/>

<img src= "/categoryImage/AWS/Developer/es_lazyloading.png" width="400px"><br/>

- 장점
    - 요청된 Data만이 Cached 된다
    - ElastiCache의 장애가 서비스에 치명적이지 않다
- 단점
    - Cache Miss일 경우, 총 3단계의 과정을 거치게 된다
    - 새로운 Data는 DB에 저장되나, Cache에는 이전 데이터가 저장되어 있다

### Write Through

<br/>

<img src= "/categoryImage/AWS/Developer/es_wt.png" width="400px"><br/>

- 장점
    - DB, Cache에 저장된 Data는 최신의 Data이다
    - Data 쓰기의 단계가 총 2단계이다
- 단점
    - Cache에 있는 많은 Data가 읽히지 않을 가능성이 있다

---

### Route 53(DNS Service)

<br/>

- A : Hostname to IPv4
- CNAME : Hostname to Hostname
- Alias : Hostname to AWS resource

<img src= "/categoryImage/AWS/Developer/route53_1.png" width="450px"><br/>

Client가 Web browser를 통해 DNS 질의를 하면 Route 53은 질의 대상의 IP를 Web browser에게 전달한다. <br/>

IP를 전달받은 후, Web browser는 대상 IP에 HTTP 요청을 보낸다.<br/>

### TTL(Time To Live)

<br/>

<img src= "/categoryImage/AWS/Developer/route53_2.png" width="450px"><br/>

TTL은 컴퓨터나 네트워크에서 데이터의 유효 기간을 나타내는 방법이다.<br/>
특정 도메인을 이전에 호출하였고 TTL 값을 가지고 있다고 가정하자.<br/>

Web browser에서 해당 도메인을 TTL 이내에 호출할 때, Web browser는 DNS 서버로 질의하지 않고 이미 가지고 있는 DNS Cache를 활용하여 대상 IP로 요청을 보낸다.<br/>

### Route 53의 기능

<br/>

-	Weight : 트래픽이 여러 Instance 중 어느 Instance에 ?% 확률로 할당될지 정할 수 있음
	
-	Latency : 전 세계의 유저가 Latency가 낮은 Instance에 트래픽을 보낼 수 있도록 한다
	
- Health Check : 대상 Instance의 상태를 체크한다(초기 값 : 3)
    -  실패 시 -> unhealthy
    -  성공 시 -> health
    -  하나의 Resource에 redirect 할 경우 health check 사용 불가능

- Failover
    - Primary Resource 장애 시, Secondary로 Switching

<img src= "/categoryImage/AWS/Developer/route53_3.png" width="450px"><br/>

- GeoLocation : 유저의 위치에 가까운 곳의 Instance로 routing 하는 기능
- Multi Value
    -  같은 도메인에 여러 개의 A record를 단다
    -  Dig 명령어 시, 각 인스턴스 IP 반환하는 것을 확인할 수 있음
    -  Route 53은 여러 개의 레코드를 임의로 선택한다

<img src= "/categoryImage/AWS/Developer/route53_4.png" width="550px"><br/>

---

본 포스팅은 Udemy 강의 **Ultimate AWS Certified Developer Associate 2020 - NEW!**를 공부하며 정리한 포스팅입니다!