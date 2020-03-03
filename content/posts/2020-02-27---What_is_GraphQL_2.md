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
description: "이번 포스팅에서는 REST API의 단점에 간략히 알아보고 본격적으로 GraphQL에 대해서 설명할 것이다!"
socialImage: ""
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
위 GET 요청은 **인턴사원들의 id, name, job을 Client에게 Response** 해준다.<br/><br/>
하지만 Client가 id, job에 대한 값들은 필요 없고 name만 필요로 한다면??<br/>
REST API에서 어떻게 해야 할까?

```bash
$ curl -X GET http://binary01.me/names
```

위와 같은 Endpoint를 하나 만들어 **name만 반환해주는 GET 요청**을 만들 수 있다.

### 그렇다면 id만 필요할 경우는 ? job만 필요한 경우는 ? 🤔

<br/>

이에 지친 개발자들은 결국 ```/interns```로 인턴사원들의 **모든 정보를 받아온 다음 필요한 것만** 가져다 쓴다. -**> 이것이 바로 Overfetching**<br/>

Overfetching 이란 **Client가 어느 시점에 필요하지 않은 데이터까지 요청하는 것**을 말한다. 이는 APP의 성능 저하를 유도하며 보안상으로도 좋다고 할 수 없다.<br/><br/>

* **Underfetching**
  
Underfetching은 Overfetching과 반대되는 개념이다.<br/><br/>
**Client에서 필요로 하는 데이터가 충분하지 않아, 추가적인 API를 계속 만들어야 한다는 것 또는 추가적인 요청을 계속해야 한다는 것**이다.

---

<img src="/categoryImage/GraphQL/graphql.png" width="550px">

### GraphQL

<br/>드디어 GraphQL이다.<br/>
아랫글은 [GraphQL이란? -1](http://binary01.me/posts/What-is-GraphQL)에서 중요하다고 생각하여 다시 한번 가져왔다.<br/>

GraphQL은 **REST API의 대체재** 성격으로 2015년 Facebook에서 발표한 **통신 API**이다.
GraphQL은 REST API의 단점인 Underfetching, Overfetching을 효과적으로 줄일 수 있다.  
또한, GraphQL은 **단일 EndPoint를 지향**함으로써 **/graphql에서 모든 요청을 처리**한다.  

**GraphQL은 API를 위한 쿼리 언어이며 이미 존재하는 데이터로 쿼리를 수행하기 위한 런타임**이다.<br/>

Query language라고 하면 SQL이 생각난다! SQL은 서버와 데이터베이스가 정보를 주고받기 위한 언어다.<br/>

이와 유사하게 **GraphQL은 서버와 클라이언트가 정보를 주고받기 위한 언어**라고 생각하면 된다!<br/>

바로 JS로 작성된 코드를 보여 설명하겠다!<br/>

```bash
mkdir graphql_test
cd graphql_test
npm init -y
npm install --save express
npm install --save express-graphql
npm install --save graphql-tools
touch app.js
```

graphql_test 폴더를 만든 후,<br/>
해당 폴더에 들어가서 npm init -y로 package.json 파일을 만들어 준다.<br/>

다음으로 express, express-graphql, graphql-tools 모듈을 설치해준다.<br/>
마지막으로 app.js 파일을 만들어 준다.

```javascript
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require("graphql-tools");
```

app.js 파일 안에 위와 같이 설치한 모듈들을 불러온다.<br/>

각 모듈을 아주 간단하게 설명하자면,<br/>
**express는** 자체적인 최소한의 기능을 갖춘 라우팅 및 미들웨어 **웹 프레임워크**이다.<br/>

**express-graphql은 미들웨어**로 express와 함께 사용할 것이다.<br/>

**graphql-tools은 GraphQL에서 필요한 typeDefs, resolvers를 결합하여 하나의 schema**로 만들어 주는 데 사용한다.<br/>

```javascript
const typeDefs = `
  type Query {
    test: String
  }
`;

const resolvers = {
    Query: {
        test: () => "binary01.me"
    }
};
```
typeDefs, resolvers는 위와 같이 작성해준다.<br/>
typeDefs에 정의한 **Query는 데이터를 읽어오는 GraphQL의 기능** 중 하나이다.<br/>

**```test : String```에서 test는 Query의 이름이며, String은 데이터 반환 type이다.**

typeDefs에 test라는 이름의 Query와 데이터 반환 type을 지정했으니,<br/>
Query test은 어떤 동작을 한 후 String을 반환하는지 resolvers에서 정의해보자!<br/>

**```test: () => "binary01.me"```**<br/>
Query test는 **input이 없고** 바로 **binary01.me라는 String을 반환**한다고 resolvers에 작성하였다!
```javascript
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
```
다음으로 makeExecutableSchema를 이용하여 **typeDefs, resolvers를 하나의 schema**로 만들어 준다.<br/>

```javascript
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000);

console.log('Running a GraphQL API server at localhost:3000/graphql');
```
```app.use```를 활용하여 Endpoint ```/graphql```로 통신할 수 있게 해준다.<br/>
마지막으로 3000번 포트로 서버를 열어준다.<br/>

다음으로 package.json이 있는 폴더로 가서 ```node app.js``` 입력해준 후 엔터!
```bash
node app.js
Running a GraphQL API server at localhost:3000/graphql
```
코드에 문제가 없으면 console에 위와 같은 문구가 뜨며 서버가 실행된다!<br/>

[localhost:3000/graphql](http://localhost:3000/graphql)<br/>
그 후 주소창에 위와 같이 입력하고 접속하면 ~

<img src="/categoryImage/GraphQL/graphiql.png" width="750px">

짜잔~! GraphiQL이 뜨는 것을 확인할 수 있다.<br/>

GraphiQL은 Query, Mutation, Subscription (아직 설명은 안 했지만..) 등을 **테스트**하고<br/>
**어떤 type들이 정의된 지 확인**할 수 있는 아주 좋은 GraphQL의 IDE라고 할 수 있다.<br/>

<img src="/categoryImage/GraphQL/query_test.png" width="750px">

GraphiQL 왼쪽 창에 위와 같은 코드를 입력하고 실행 버튼을 누르면 오른쪽과 같은 결과를 얻을 수 있다.<br/>

[얄팍한 코딩사전 - GraphQL이 뭔가요?](https://www.youtube.com/watch?v=EkWI6Ru8lFQ)<br/>

위 링크는 제목 그대로 GraphQL을 설명하는데, 시간도 짧고 중요한 부분을 아주 재미있게 잘 설명했다.<br/> 
**꼭 한 번 보는 걸 추천**한다!

---

### 마무리

오늘은 REST API의 단점을 간략히 설명하고, 바로 GraphQL의 코드를 보며 설명해보았다.<br/>
하지만 Mutation, Subscription도 설명해야 하고 Apollo 등등 아직 설명할 게 너무 많다.
안뇽~ ✌✌

---

**app.js**
```javascript
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = `
  type Query {
    test: String
  }
`;

const resolvers = {
    Query: {
        test: () => "binary01.me"
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000);

console.log('Running a GraphQL API server at localhost:3000/graphql');
```
