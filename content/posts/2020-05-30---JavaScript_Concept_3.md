---
title: JavaScript 핵심 개념 정리 - Closure
date: "2020-05-30T23:46:37.121Z"
template: "post"
draft: false
slug: "JavaScript_Concept_3"
category: "JavaScript"
tags:
  - "JavaScript"
  - "Closure"
  - "lexical environment"

description: "Closure란 무엇일까? JavaScript를 공부하는 사람이라면 한 번쯤을 들어봤을 것이다!"
---

<br/>

Closure란 무엇일까? JavaScript를 공부하는 사람이라면 한 번쯤을 들어봤을 것이다!<br/>

---

## Closure

> A closure is the combination of a function and the lexical environment within which that function was declared.

MDN에서는 Closure를 위와 같이 정의하고 있다.<br/>

의역을 해보면 Closure는 함수와 그 함수가 내부에 선언된 lexical environment의 조합이라고 한다.
무슨 말인지 전혀 모르겠다..😐😐

---

### lexical environment

* 선언 당시의 환경에 대한 정보를 담는 객체

<br/>

lexical environment가 뭔지 알 수 있다면 좀 더 이해가 편해질 거 같다!<br/>


<img src= "/categoryImage/JavaScript/lexical.png" width="500px"><br/>

사전에서 치즈를 검색해보면 치즈는 어떻게 만들어졌고, 성분은 무엇인가? 를 알 수 있다.<br/>
바로 이것을 lexical environment라고 이해할 수 있다.<br/>

그 결과, Closure는 **함수와 그 함수가 선언될 당시 환경정보의 조합으로 발생하는 어떠한 현상 / 상태**라고 생각할 수 있다!<br/>

---


함수 Scope가 유효 범위인 곳에서 어떠한 코드를 작성하든, Scope 및 lexical environment는 변하지 않는다
**-> 최초 선언 시의 정보를 유지!**

그리고 함수 Scope에서 외부에 정보를 전달할 수 있는 수단은 무엇일까? 바로 **Return**이다.<br/>

이 두 가지를 활용하는 Closure는 크게 3가지 장점이 있다.
* 접근 권한 제어
* 지역변수 보호
* 데이터 보존 및 활용

```javascript
function a() {
	var x = 1;
	function b() {
		console.log(x);
	}
	b();
}
a();
console.log(x);
```
위 코드에서 함수 a에서 선언된 x를 함수 b에서는 접근할 수 있다.<br/>
하지만, 함수 a의 외부에서는 접근할 수 없다.<br/>

따라서 외부에서의 `console.log(x)`는 에러를 발생시킨다.<br/>

그렇다면 함수 a 내부에 선언된 x를 외부에서 사용할 수 있는 방법은 없을까?

```javascript
function a() {
	var x = 1;
	return function b() {
		console.log(x);
	}
}
var c = a();
c();
```
위 코드에서 바로 Closure의 장점을 확인할 수 있다.<br/>

함수 a 내부에서 함수 b를 return함으로써 x를 외부에서 사용할 수 있게 되었지만,<br/>
x의 값을 바꿀 수 없다!<br/>

바꿀 수 있는 권한을 주고 싶다면 set 함수 등을 정의하여 return하면 된다.

```javascript
function setCounter() {
	var count = 0;
	return function() {
		return ++count;
	}
}
var count = setCounter();
count();
```
---

### Closure로 Private Member 만들기!

친숙한 Java, C++ 등의 언어에서는 Method, Property 등을 Private으로 선언할 수 있는 기능이 있다.<br/>

JavaScript는 기본적으로 이러한 기능이 제공되고 있지는 않지만, Closure를 활용해 이를 대략 흉내 낼 수 있다.<br/>

Private Member를 만드는 이유는 크게 2가지가 있다.
* 접근 제어
* 전역 변수 최소화

```javascript
var car = {
	fuel: 10,
	power: 2,
	total: 0,
	run: function(km) {
		var wasteFuel = km / this.power;

		if(this.fuel < wasteFuel) {
			console.log('이동 불가');
			return;
		}
		this.fuel -= wasteFuel;
		this.total += km;
	}
}
```
위 코드로 어떤 게임을 만든다고 가정해보자!<br/>

특정한 사용자가 외부에서 `car.power = 10;` `car.fuel = 1000;`등의 코드를 입력할 수 있기 때문에 위와 같은 방식은 적절하지 않다.<br/>

그럼 Private 기능을 활용하여 코드를 다시 만들어보자!

```javascript
var createCar = function (f, p) {
	var fuel = f;
	var power = p;
	var total = 0;

	return {
		run: function (km) {
			var wasteFuel = km / power;

			if (fuel < wasteFuel) {
				console.log('이동 불가');
				return;
			}
			fuel -= wasteFuel;
			total += km;
		}
	}
};
var car = createCar(10, 2);
```
위 코드에서는 `car.power = 10;` `car.fuel = 1000;`등의 코드를 외부에서 입력할 수 없다!
사용자는 run이라는 Method만 사용할 수 있다.<br/>

Closure를 활용해 Private를 활용하는 순서는 아래와 같다
1. 함수에서 지역변수 및 내부함수 등을 생성한다.
2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return한다.

---

### Closure 정리

<br/>

`return function` : 최초 선언시의 정보를 유지 !<br/>
**-> return에 포함된 객체 Public, 포함되지 않은 객체 Private** <br/>
-> Closure의 장점 3가지(접근 권한 제어, 지역변수 보호, 데이터 보존 및 활용) 활용 가능!<br/>

Closure는 객체지향, Scala와 같은 함수형 언어의 Curring 등에서도 활용되기 때문에 반드시 알아두자!<br/>

---

### 마무리

<br/>

원래 중요하게 생각하고 공부한 개념이었지만, 글을 쓰며 한 번 더 배운 느낌이다!<br/>
다음 포스팅에서는 prototype, Class 등에 대해 설명할 예정이다! 😎😎<br/> 

---

본 포스팅은 인프런 강의 **Javascript 핵심 개념 알아보기 - JS Flow**를 공부하며 정리한 포스팅입니다!
