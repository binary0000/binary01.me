---
title: JavaScript 핵심 개념 정리 - Prototype
date: "2020-11-08T23:46:37.121Z"
template: "post"
draft: false
slug: "JavaScript_Concept_4"
category: "JavaScript"
tags:
  - "JavaScript"
  - "Prototype"

description: "이번 시간에는 Prototype에 대해 알아보자!"
---

<br/>

오랜만의 포스팅이다! 이번 시간에는 Prototype에 대해 알아보자!<br/>

---

## Prototype
* prototype
* constructor
* \__proto__

Class는 많이 들어봤지만, Prototype이란 개념은 생소하고 활용해본 적이 없는 것 같다.<br/>
하지만, 알고 보면 우리는 항상 사용하고 있다.

<img src= "/categoryImage/JavaScript/prototype_1.png" width="500px"><br/>

new 연산자를 써서 생성자(constructor)로 instance를 만들면 **생성자 함수의 prototype이라고 하는 속성(property)가 instance의 \__proto__라는 속성(property)에 전달이 된다.**<br/>

즉, 생성자 함수의 prototype과 instance의 \__proto__는 같은 객체를 참조한다.<br/>
따라서 생략되어 오른쪽 그림과 같이 작동하는 것처럼 보일 수 있다.<br/>

무슨 말인지 잘 모르겠다...😥😥<br/>
아래 그림을 보며 다시 이해해보자.<br/>

<img src= "/categoryImage/JavaScript/prototype_2.png" width="500px"><br/>

Browser에서 Array에 대한 정보를 출력하면 위와 같이 출력됨을 확인할 수 있다.<br/>

prototype에 어떤 메소드가 들어있는지 확인해보면 우리가 Array를 다룰 때, 매일 쓰는 concat, forEach, map, push, pop 등의 메소드들이 여기 전부 들어있다.<br/>

이게 무슨 말이냐! 아래와 같이 우리는 map과 같은 Array의 메소드를 항상 쓰면서 굳이 앞에 \__proto__쓰지 않아도 된다는 말(생략 가능하다!)이다.<br/>

```javascript
const test = ["binary","01","me"];
test.map(x => console.log(x));
test.__proto__.map(x => console.log(x));
```

다시 맨 처음의 그림을 보면 그림이 무엇을 의미하는 지 알 수 있을 것이다!<br/>

**예제**
```javascript
function Developer (name, company) {
	this.name = name;
	this.company = company;
}

const jinsoo = new Developer('이진수','null..');
const jinsoo2 = new jinsoo.__proto__.constructor('징수_복사닷!','AWS');
const jinsoo3 = new jinsoo.constructor('징수_복사닷22','Google');
const jinsooProto = Object.getPrototypeOf(jinsoo);
const jinsoo4 = new jinsooProto.constructor('binary','instagram');
const jinsoo5 = new Developer.prototype.constructor('binary2','');
```

위 코드에서 jinsoo들은 모두 같은 constructor에 접근한다.
또한, ```[CONSTRUCTOR].prototype, [instance].__proto__, [instance], Object.getPrototypeOf([instance]) ```는 같은 constructor의 prototype에 접근하는 것을 알 수 있다.

### prototype chaining

<img src= "/categoryImage/JavaScript/prototype_3.png" width="500px"><br/>

위에서 한 설명처럼 Array.prototype에는 배열 메소드가 담겨있다.<br/>
즉, **Array.prototype은 객체**이다.<br/>

Array.prototype가 객체라는 말은 Object 생성자 함수에 new 연산자로 생성된 instance라는 말이다.<br/>

따라서 Object.prototype을 상속받는다. 그 결과, 배열 인스턴스는 Object.prototype에 담겨있는 메소드(toString, valueOf)등을 사용할 수 있다.<br/>

이를 **prototype chaining**이라고 한다.<br/>
아래 예제를 보며, 활용 방법에 대해 생각해보자!

**예제1**
```javascript
const test = [0,1,2];
test.toString = function() {
  return this.join('_');
}

console.log(test.toString());
console.log(test.__proto__.toString.call(test)); //Array.prototype의 메소드 toString 호출
console.log(test.__proto__.__proto__.toString.call(test)); //Object.prototype의 메소드 toString 호출

/*
result
0_1_2
0,1,2
[object Array]
*/
```
<br/>

**예제2**
```javascript
const obj = {
  a: 1,
  b: {
    c: 'c'
  }
};

Object.prototype.toString = function() {
  let res = [];
  for(let key in this) {
    res.push(key+ ': ' + this[key].toString());
  }
  return  '{' + res.join(', ') + '}';
}

console.log(obj.toString());

/*
result
{a: 1, b: {c: c}}
*/
```

---

### 마무리

<br/>

오랜만의 포스팅이라 글이 잘 써지지 않았다.. ㅠ<br/>
처음 블로그를 만들 때의 마음가짐으로 다시 시작할 것이다! 😤😤😤<br/>

JavaScript 핵심 개념 정리의 다음 포스팅은 마지막 포스팅으로 Class에 대해 알아볼 것이다.<br/>


---

본 포스팅은 인프런 강의 **Javascript 핵심 개념 알아보기 - JS Flow**를 공부하며 정리한 포스팅입니다!
