---
title: JavaScript 핵심 개념 정리 -2
date: "2020-05-15T23:46:37.121Z"
template: "post"
draft: false
slug: "JavaScript_Concept_2"
category: "JavaScript"
tags:
  - "JavaScript"
  - "this"

description: "오늘 포스팅에서 다룰 주제는 여러 영역에서의 this이다!"
---

<br/>

오늘 포스팅에서 다룰 주제는 여러 영역에서의 this이다!<br/>

---

## this
* 전역 공간에서 this
* 함수 내부에서 this
* 메소드 호출 시 this
* Callback에서 this

<br/>

---

### 전역 공간에서 this

전역 공간에서 this를 호출하면 Window 또는 global 객체를 가리킨다!

<img src= "/categoryImage/JavaScript/console_this.jpg" width="500px"><br/>

위 사진에서 알 수 있듯이, **Node에서 출력 시 global, Browser에서 출력 시 Window 객체**를 출력한다!

---

### 함수 내부에서 this

```javascript
function a() {
    console.log(this);
}
a();

function b() {
    function c() {
        console.log(this);
    }
    c();
}
b();

var d = {
    e: function () {
        function f() {
            console.log(this);
        }
        f();
    }
}
d.e();
```

(실행 결과 생략)<br/><br/>

함수 내부에서 this 호출 또한 **Node에서 출력 시 global, Browser에서 출력 시 Window 객체**를 출력한다!

---

### 메소드 호출 시 this

```javascript
var a = {
	b: function() {
		console.log(this);
	}
}
a.b();
```

메소드에서 this를 호출 시 this는 메소드 호출의 주체를 가리킨다.<br/>
즉, 위 사진과 같이 객체 a 내부에 객체 b가 있을 경우 **this는 객체 a**를 가리킨다.

#### 추가예시
```javascript
var a = {
	b: {
	  c: function() {
		console.log(this);
	  }
	}
}
a.b.c();
```
위 예시에서의 this는 메소드명 앞인 ```a.b```가 된다!

<br/>

```javascript
var a = 10;
var obj = {
	a: 20,
	b: function() {
	  console.log(this.a);// result: 20

	  function c() {
		console.log(this.a);// result: 10
	  }
	  c();
	}
}
obj.b();
```
위 예시에서 각 a의 출력 결과는 왜 다를까!?<br/>
-> **b는 메소드**이지만, **c는 함수**이다. 그래서 다른 결과가 출력되는 것이다.<br/>

그렇다면 함수 c에서도 20을 출력하는 있는 방법은 뭘까!? 🤔

```javascript
var a = 10;
var obj = {
	a: 20,
	b: function() {
		var self = this;
		console.log(this.a);// result: 20

		function c() {
			console.log(self.a);// result: 20
		}
		c();
	}
}
obj.b();
```
위 코드처럼 this를 변수에 할당해서 우회할 수 있다!

<br/>

#### 메소드 호출 시 this 정리

함수에서 this출력 시 전역 객체(global or Window)가 출력되기 때문에 함수는 (전역 객체)의 메소드라고 생각하면 편하다!<br/>

---

### Callback에서 this

기본적으로는 함수 내부에서와 동일하다!

우선, 설명을 위한 배경지식으로 call, apply, bind 메소드를 간단히 설명하겠다!

```javascript
func.call(thisArg[, arg[, arg2[, ...]]])
func.apply(thisArg, [argsArray])
func.bind(thisArg[, arg[, arg2[, ...]]])
```
call, bind는 thisArg를 제외하고 무제한으로 인자가 올 수 있다.<br/>
apply와의 차이는 배열로 합쳐서 하나로 받느냐 아니냐의 정도로 인식하면 된다.<br/>

call과 apply는 즉시 호출, Bind는 새로운 함수를 생성할 뿐 호출을 담당하지는 않는다.

```javascript
function a(x, y, z) {
	console.log(this, x, y, z)
}
var b = {
	c: 'binary01.me'
};

a.call(b, 1, 2, 3);
a.apply(b, [1, 2, 3]);

var c = a.bind(b);
c(1, 2, 3);

var d = a.bind(b, 1, 2);
d(3);
```

#### Result
```shell
{ c: 'binary01.me' } 1 2 3
{ c: 'binary01.me' } 1 2 3
{ c: 'binary01.me' } 1 2 3
{ c: 'binary01.me' } 1 2 3
```

<br/>

#### Callback Example
```javascript
var callback = function() {
	console.log(this);
};
var obj = {
	a: 1,
	b: function(cb) {
		cb();
	}
};
obj.b(callback);
```

기본적으로 함수 내부에서의 this와 같아서, Window 또는 global을 출력한다.<br/>

#### 우회 방법

```javascript
var callback = function() {
	console.log(this);
};
var obj = {
	a: 1,
	b: function(cb) {
		cb.call(this);
	}
};
obj.b(callback);
```

<br/>

```javascript
var callback = function() {
	console.log(this);
};
var obj = {
	a: 1
};
setTimeout(callback.bind(obj), 100);
```
예시 코드와 같이 call, bind, apply등을 활용하여 this를 원하는 객체로 지정할 수 있다.<br/>

<br/>

#### Callback에서 this 정리
* 기본적으로는 함수의 this와 같다.
* 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.
* 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.

---

### 각 영역에서의 this 호출

<img src= "/categoryImage/JavaScript/this_table.png" width="600px"><br/>

---

### 마무리

<br/>

입사를 한 지 얼마 되지 않아 정신이 없어 오랜만에 포스팅이다 😥<br/>
closure도 정리하려 했지만, 포스팅이 길어져서 다음 포스팅에 작성하기로 했다.<br/>
시간이 날 때마다 틈틈이 작성해야겠당!<br/>

---

본 포스팅은 인프런 강의 **Javascript 핵심 개념 알아보기 - JS Flow**를 공부하며 정리한 포스팅입니다!
