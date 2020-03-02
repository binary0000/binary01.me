---
title: GraphQL이란? -2
date: "2020-02-27T23:46:37.121Z"
template: "post"
draft: false
slug: "What-is-GraphQL-2"
category: "GraphQL"
tags:
  - "GraphQL"
  - "RESTAPI"
description: "이번 포스팅에서는 REST API의 단점에 간략히 알아보고 본격적으로 Graphql에 대해서 설명할 것이다!"
socialImage: "/categoryImage/GraphQL/GraphQL_Logo.svg"
---

<br/><img src="/categoryImage/GraphQL/rest_graphql.png" width="550px">

https://velog.io/@bclef25/REST-API-%EC%99%80-graphQL
https://www.slideshare.net/deview/112rest-graph-ql-relay
https://sensedia.com/en/api/apis-rest-graphql-or-grpc-who-wins-this-game/
https://seohyun.me/what-is-graphQL

grahpql 설명


### REST API의 단점
Overfetching means the client is retrieving data that is actually not needed at the moment when it’s being fetched. It thus drains performance (more data needs longer to be downloaded and parsed) of the app and also exhausts the user’s data plan.

Underfetching is the opposite of overfetching and means that not enough data is included in an API response. This means the client needs to make additional API requests to satisfy its current data requirements.

GraphQL은 **REST API의 대체제** 성격으로 2015년 Facebook에서 발표한 **통신 API**이다.
GraphQL은 REST API의 단점인 Underfetching, Overfetching를 효과적으로 줄일 수 있다.  
또한, GraphQL은 **단일 EndPoint을 지향**함으로써 **/graphql에서 모든 요청을 처리**한다.  

---

---

### 마무리

글 제목은 Graphql이란?? 인데 어쩌다 보니 REST API 관련 내용만 작성했다.<br/>
하지만 REST API의 대체제로 나온 Graphql을 제대로 알기 위해선 REST API를 알아야된다! 라고 생각해서 글을 쓰다보니 이렇게 길어졌다..<br/>
다음 글은 REST API의 단점을 간략히 설명하고 진짜로 Graphql에 대해서 포스팅할 예정이다 ㅎㅎ 🖐🖐🖐
