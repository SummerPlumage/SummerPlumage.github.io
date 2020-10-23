---
title:  "jQuery unique메소드"

categories:
  - jQuery
tags:
  - jQuery
  - unique
  - javascript
---


## jQuery.unique()

HTML에서 셀렉트박스 option 중복처리를 하려고 option들을 배열에 담아서 jQuery.unique()를 사용했는데 원하는 값이 나오지 않았다.

```
var yearArr = ["A","B","B","A"];
var yearRtn = $.unique(yearArr);

//원하는값 -> yearArr = ["A","B"];
//실제값 -> yearArr = ["A","B","A"];
```

왜 안되는지 헤매다가 이 메소드는 DOM elements array 중복처리에만 작동하고 numbers나 Strings은 작동하지 않는것을 발견.

```
Description: Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
```
해당 Description과 자세한 스펙은 https://api.jquery.com/jquery.unique/ 에서 확인가능.

따라서 문자나 숫자 배열 중복제거를 하고싶으면 따로 메소드를 만들어야함

ex)
```javascript
function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
```
