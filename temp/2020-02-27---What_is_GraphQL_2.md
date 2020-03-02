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


### REST API의 단점

* **Overfetching**

```bash
$ curl -X GET http://binary01.me/interns
[
  {
    "id": 1,
    "name": "이진수",
    "job": "IT"
  },
  {
    "id": 2,
    "name": "박경남",
    "job": "IT"
  },
  ...
]
```
이전 포스팅의 내용을 가져와서 다시 보자!<br/>
위 GET 요청은 **인턴 사원들의 id, name, job을 Client에게 Response** 해준다.<br/><br/>
하지만 Client가 id, job에 대한 값들은 필요 없고 name만 필요로 한다면??<br/>
REST API에서 어떻게 해야할까?

```bash
$ curl -X GET http://binary01.me/names
```

위과 같은 Endpoint를 하나 만들어 **name만 반환해주는 GET 요청**을 만들 수 있다.

### 그렇다면 id만 필요할 경우는 ? job만 필요한 경우는 ?

<br/>

이에 지친 개발자들은 결국 ```/interns```로 인턴 사원들의 **모든 정보를 받아온 다음 필요한 것만** 가져다 쓴다. -**> 이것이 바로 Overfetching**<br/>

Overfetching 이란 **Client가 어느 시점에 필요하지 않은 데이터까지 요청하는 것**을 말한다. 이는 APP의 성능 저하를 유도하며 보안 상으로도 좋다고 할 수 없다.<br/><br/>

* **Underfetching**
  
Underfetching은 Overfetching과 반대되는 개념이다.<br/><br/>
**Client에서 필요로 하는 데이터가 충분하지 않아, 추가적인 API를 계속 만들어야 한다는 것 또는 추가적인 요청을 계속해야 한다는 것**이다.

---

<img src="/categoryImage/GraphQL/graphql.png" width="550px">

### GraphQL

<br/>드디어 GraphQL이다.<br/>
아래 글은 [GraphQL이란? -1](http://binary01.me/posts/What-is-GraphQL)에서 중요하다고 생각하여 다시 한 번 가져왔다.<br/>

GraphQL은 **REST API의 대체제** 성격으로 2015년 Facebook에서 발표한 **통신 API**이다.
GraphQL은 REST API의 단점인 Underfetching, Overfetching를 효과적으로 줄일 수 있다.  
또한, GraphQL은 **단일 EndPoint을 지향**함으로써 **/graphql에서 모든 요청을 처리**한다.  

**GraphQL은 API를 위한 쿼리 언어이며 이미 존재하는 데이터로 쿼리를 수행하기 위한 런타임**이다.<br/>

Query language라고 하면 SQL이 생각난다! SQL은 서버와 데이터베이스가 정보를 주고 받기 위한 언어다.<br/>

이와 유사하게 **GraphQL은 서버와 클라이언트가 정보를 주고 받기 위한 언어**라고 생각하면 된다!<br/>

바로 JS로 작성된 코드를 보여 설명하겠다!<br/>
<!-- 3월 2일 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!-- 코드 쪼개서 하나하나 설명해야할듯 -->
```javascript
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const typeDefs = buildSchema(`
  type Query {
    test: String!
  }
`);

const resolver = {
    Query: {
        test: () => "binary01.me"
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  typeDefs: typeDefs,
  resolvers: resolvers,
  graphiql: true,
}));
app.listen(3000);

console.log('Running a GraphQL API server at localhost:3000/graphql');
```
grahpql 설명

[얄팍한 코딩사전 - GraphQL이 뭔가요?](https://www.youtube.com/watch?v=EkWI6Ru8lFQ)

---

### 마무리

글 제목은 Graphql이란?? 인데 어쩌다 보니 REST API 관련 내용만 작성했다.<br/>
하지만 REST API의 대체제로 나온 Graphql을 제대로 알기 위해선 REST API를 알아야된다! 라고 생각해서 글을 쓰다보니 이렇게 길어졌다..<br/>
다음 글은 REST API의 단점을 간략히 설명하고 진짜로 Graphql에 대해서 포스팅할 예정이다 ㅎㅎ 🖐🖐🖐
