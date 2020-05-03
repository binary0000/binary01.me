---
title: JavaScript 핵심 개념 정리 -1
date: "2020-04-30T23:46:37.121Z"
template: "post"
draft: false
slug: "JavaScript_Concept_1"
category: "JavaScript"
tags:
  - "JavaScript"
  - "DataTypes"
  - "Hoisting"
  - "FunctionScope"
  - "ExecutionContext"
  - "CallBack"
description: "JavaScript로 개발은 많이 해보았지만, 개념에 대한 공부는 깊게 하지 않았다..."
---

<br/>

JavaScript로 개발은 많이 해보았지만, 개념에 대한 공부는 깊게 하지 않았다.<br/>
그래서 이번 긴 연휴 동안 JavaScript를 공부하기로 했고, 공부한 내용을 정리할 예정이다!<br/>

---

## Data Types
* 기본형과 참조형의 차이가 생기는 이유

<br/>

JavaScript 데이터 타입은 크게 2가지 **Primitive Type**, **Reference Type**으로 분류된다.

### Primitive Type
* Number
* String
* Boolean
* null
* undefined

Primitive Type은 값을 그대로 할당한다.

### Reference Type
* Object
	* Array
	* Function
	* RegExp

Reference Type은 값이 저장된 주소 값을 할당(참조)한다.

<br/>

<img src= "/categoryImage/JavaScript/datatype.jpg" width="700px">

---

## Function

<br/>

### Hoisting

<br/>

호이스팅은 변수 또는 함수를 끌어올린다고 생각하면 된다!<br/>

```js
console.log(test1());
console.log(test2());

function test1 () {
	return 'binary01.me';
}
const test2 = () => {
    return 'binary01.me';
}
```

위 코드를 실행해보자!<br/>
test1은 실행이 되지만, test2는 오류가 날 것이다.<br/>

그 이유는 아래와 같다.<br/>
```js
function test1 () {
	return 'binary01.me';
}
const test2;
console.log(test1());
console.log(test2());

test2 = () => {
    return 'binary01.me';
}
```
test1는 그 자체로 하나의 선언문이고, test2는 함수 표현식으로 선언과 할당이 분리가 가능하다.<br/>

따라서 실제로 위 코드와 같은 순서를 갖기 때문에 test2는 오류가 나는 것이다.<br/>

### 함수 표현식의 순서
1. 변수 선언
2. 익명 함수 선언
3. 변수에 익명 함수 할당

<br/>

다음으로 아래 코드를 보며 결과를 예상해보자!<br/>
```js
function sum(a, b) {
    return 'haha ' + (a + b);
}

console.log(sum(1, 2));

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
```

**Result**<br/>
**3**<br/>
**3**<br/>

같은 함수명을 가진 두 함수가 호이스팅 된다면, **나중에 호이스팅된 함수가** 먼저 호이스팅 된 함수를 **덮어씌운다.**<br/>

따라서 위와 같은 Result를 확인할 수 있다.<br/>

```js
var sum = function (a, b) {
    return 'haha ' + (a + b);
}

console.log(sum(1, 2));

var sum = function (a, b) {
    return a + b;
}

console.log(sum(1, 2));
```
**Result**<br/>
**haha 3**<br/>
**3**<br/>

함수 표현식을 사용하면 모두가 예상하는 결과가 출력된다!<br/>
따라서 웬만하면 함수 표현식을 사용하자!<br/>

<br/>

### Function Scope, Execution Context

<br/>

**함수 스코프는 변수의 유효 범위,**<br/>
**실행 컨텍스트는 실행되는 코드 덩어리**를 의미한다.<br/>

둘의 가장 큰 차이는 스코프는 **함수가 정의될 때** 결정되며, 실행 컨텍스트는 **함수가 실행될 때** 생성된다!<br/>

실행 컨텍스트에는 호이스팅, this 바인딩 등의 정보가 담긴다.<br/>

```js
var a = 1;
function outer() {
	console.log(a);

	function inner() {
		console.log(a);
		var a = 3;
	}
	
	inner();
	
	console.log(a);
}
outer();
console.log(a);
```

<br/>

**실행 순서**
1. Global 실행컨텍스트 생성
2. 변수 a 선언 및 할당, outer 함수 선언
3. outer 함수 호출 및 outer 실행컨텍스트 생성
4. inner 함수 선언
5. outer 함수의 첫 번째 console.log(a) 실행
6. inner 함수 호출 및 inner 실행컨텍스트 생성
7. inner 함수의 지역 변수 a 선언
8. inner 함수의 첫 번째 console.log(a) 실행
9. inner 함수의 지역 변수 a에 3 할당
10. inner 함수 실행컨텍스트 종료
11. outer 함수의 마지막 줄 console.log(a) 실행
12. outer 함수 실행컨텍스트 종료
13. console.log(a) 실행
14. Global 실행컨텍스트 종료

<br/>
코드의 결과를 예상해보고 직접 결과를 확인하며 실행순서를 이해하자! <br/>

<br/>

### CallBack function

<br/>

무언가가 이 함수를 호출해서 나에게 다시 돌려준다!<br/>
-> 어떠한 대상에게 **제어권을 넘겨준다.**<br/>

아래 코드를 보자!

```js
setInterval(() =>{
	console.log('1초마다 실행!');
}, 1000);
```

setInterval은 정해진 주기마다 Callback 함수를 실행하며,  첫 번째 인자는 Callback func, 두 번째 인자는 milliseconds이다.<br/>

따라서 위 코드는 Arrow function으로 정의한 콜백 함수를 setInterval에게 제어권을 넘기며 주기인 1초마다 콜백 함수를 실행하고 그 결과를 나에게 돌려주는 것이다.<br/>

<br/>

### 콜백 함수의 특징
* 다른 함수(a)의 인자로 콜백 함수(b)를 전달하면, a가 b의 제어권을 갖게 된다.
* 특별한 요청 (bind)이 없는 한 a의 미리 정해진 방식에 따라 b를 호출한다.
	* 미리 정해진 방식
		* this에 무엇을 바인딩할지
		* 인자에는 어떤 값을 지정할지
		* 어떤 타이밍에 콜백을 호출할지

---

본 포스팅은 인프런 강의 **Javascript 핵심 개념 알아보기 - JS Flow**를 공부하며 정리한 포스팅입니다!
