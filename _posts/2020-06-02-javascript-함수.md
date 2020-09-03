---
title:  "함수"

categories:
  - JAVASCRIPT
tags:
  - javascript
  - function
  - 콜백
  - 함수
---

#### 함수 특성
자바스크립트는 함수를 값으로 취급한다.
따라서 함수를 생성하고 변수에 할당가능하다.
```javascript
let hello = function(){
  alert("hello");
}
alert(hello);
```
이렇게 함수를 변수에 할당도 할수있고 alert로 출력도 가능하다.


#### 콜백함수

```javascript
function askAge(question, kid, adult) {
  if (confirm(question)) kid()
  else adult();
}
function isKid() {
  console.log("어린이");
}
function isAdult() {
  console.log("어른이");
}
askAge("어린이니?", isKid, isAdult);
```

함수 `askAge` 인수, `isKid`와 `isAdult`은 콜백 함수라고한다.
함수를 함수의 인수로 전달하고 전달한 그 함수를 필요할때 `호출(called back)`하는 것이 콜백 함수의 개념.

아래와 같이 함수 표현식으로도 사용가능
```javascript
function askAge(question, kid, adult) {
  if (confirm(question)) kid()
  else adult();
}
askAge(
  "어린이니?",
  function() { alert("어린이"); },
  function() { alert("어른이"); }
);
```
