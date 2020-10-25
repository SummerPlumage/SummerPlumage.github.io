---
title:  "jQuery unique, grep, inArray"

categories:
  - jQuery
tags:
  - jQuery
  - unique
  - javascript
  - grep
  - inArray
---


## jQuery.unique()

HTML에서 셀렉트박스 option 중복처리를 하려고 option들을 배열에 담아서 jQuery.unique()를 사용했는데 원하는 값이 나오지 않았다.

```javascript
var yearArr = ["A","B","B","A"];
var yearRtn = $.unique(yearArr);
console.log(yearRtn);

//원하는값 -> yearArr = ["A","B"];
//실제값 -> yearArr = ["A","B","A"];
```

왜 안되는지 헤매다가 이 메소드는 DOM elements array 중복처리에만 작동하고 numbers나 Strings은 작동하지 않는것을 발견.

```
Description: Sorts an array of DOM elements, in place, with the duplicates removed.
Note that this only works on arrays of DOM elements, not strings or numbers.
```
해당 Description과 자세한 스펙은 <https://api.jquery.com/jquery.unique/> 에서 확인가능.

따라서 문자나 숫자 배열 중복제거를 하고싶으면 따로 메소드를 만들어야 한다.
grep과 inArray 메소드를 이용하여 원하는 결과를 얻을 수 있다.  
```javascript
function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
```
#### jQuery grep()
`jQuery.grep( array, function(elementOfArray, indexInArray) [, invert] )
Returns : Array`  
배열의 값 중에 조건에 맞는 값만 저장한다.

array : 배열명  
function(elementOfArray, indexInArray) : 배열 아이템 수 만큼 반복. 첫번째 인자는 배열 요소, 두번째 인자는 index. 이 함수는 Boolean 값을 반환.  
invert : 이 값이 false거나 세팅하지 않으면, 콜백 함수에서 true를 반환하는 결과를 반환하고, true 라면 콜백 함수에서 false를 반환하는 결과를 반환.  

#### jQuery inArray()
`jQuery.inArray( value, array [, fromIndex] )
Returns : Number`  
javascript의 indexOf()와 비슷한 메소드. 해당 값과 배열의 값이 일치하면 해당 index를 반환하고 일치하는 값이 없으면 -1을 반환한다.

value : 검색할 값  
array : 검색할 배열  
fromIndex : 검색이 시작될 배열의 인덱스. 기본값은 0이고 배열 전체를 검색.  


```javascript
function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
var yearArr = ["A","B","B","A"];
var yearRtn = unique(yearArr);
console.log(yearRtn);

//원하는값 -> yearArr = ["A","B"]; 정상출력
```
