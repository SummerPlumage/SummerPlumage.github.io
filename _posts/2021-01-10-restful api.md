---
title:  "REST API"

categories:
  -
tags:
  - REST
  - RESTful
  - REST API
---
## REST란

`Representational State Transfer`의 약자로, 웹에 존재하는 자원을 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 방법을 의미.
REST는
- 자원(Resource): URI
- 행위(Verb): HTTP Method
- 표현(Representation of Resource)
로 구성되어있음.
HTTP URI 를 통해 자원을 명시하고 HTTP Method를 통해 해당 자원의 대한 행위(CRUD Operation)을 적용한다.
주로 XML, JSON 등으로 정보를 주고받는다.

## REST의 특징

1. Uniform Interface (인터페이스 일관성)
HTTP 표준만 따른다면 특정 언어나 플랫폼에 종속되지 않고 사용 가능.

2. Stateless (무상태성)
Rest는 상태 정보를 저장, 관리하지 않는다.
서버는 세션,쿠키정보를 관리하지 않아서 들어오는 요청을 단순히 처리하기만 하면 된다.
이전 요청이 다음 요청 처리에 연관이 되면 안되고 이에따라 자유도가 높아지고 구현이 단순해짐.
3. Cacheable (캐시 가능)
HTTP의 기존 웹 표준을 그대로 사용하기 때문에 HTTP가 가진 캐싱 기능 적용가능.
4. Self-descriptiveness (자체 표현 구조)
Rest API 메시지만 보고도 쉽게 이해할 수 있는 자체 표현 구조로 되어있다.
5. Client-Server 구조
REST 서버와, 클라이언트는 서로간의 역할이 확실하게 구분되어 의존성이 줄어들기 때문에 개발해야 할 내용들이 명확해짐.
6. Layerd System (계층형 구조)
Rest 서버는 다중 계층으로 구성될 수 있으며 로드 밸런싱, 암호화, 사용자 인증 등을 추가하여 구조상의 유연성을 둘 수 있다.


## REST? REST API? RESTful?
용어가 헷갈려서 정리하자면,
Rest 기반의 규칙들을 지켜서 설계된 API를 Rest API라 한다.  
Restful은 말그대로 REST하다 라고 볼 수 있고, REST API는 RESTful 하다 라고 할 수 있겠다.
결국 다 같은말이면서 같은말이 아니다.

## REST API 설계규칙
REST에서 가장 중요한 기본적인 규칙은 두 가지이다.
URI는 자원을 표현하는 데에 집중하고 행위에 대한 정의는 HTTP Method를 통해 하는 것이 REST한 API를 설계하는 중심 규칙이다.
1. URI는 정보의 자원을 표현해야한다.
URI는 자원을 표현하는데 중점을 두어야 하기 때문에 리소스 명은 동사보다는 명사를 사용한다.
```
GET /members/delete/1   (x)
GET /members/1          (o)
```
2. 자원에 대한 행위는 HTTP Method로 표현한다.
- URI에 HTTP Method가 들어가면 안된다.
```
GET /members/delete/1   (x)
DELETE /members/1       (o)
```
- URI에 행위에 대한 동사 표현이 들어가면 안된다.
```
GET /members/show/1   (x)
GET /members/1        (o)
```

## HTTP Method
주로 5가지의 Method(GET, POST, PUT, PATCH, DELETE)를 사용하여 CRUD를 구현.

|METHOD|역할|
|:---:|:----:|
|GET	|	모든/특정 리소스를 조회	|
|POST	|	리소스를 생성	|
|PUT	|	리소스의 전체를 교체	|
|PATCH	|	리소스의 일부를 수정	|
|DELETE|	모든/특정 리소스를 삭제|

## Collection과 Document
자원을 표현할때 Collection과 Document를 이용하면 URI설계가 쉬워진다.
Collection은 문서의 집합이며 복수로 표현하고 Document는 문서나 객체를 뜻하며 단수로 표현한다.

```
http://예제.com/colors/green
```
이처럼 colors라는 Collection, green이라는 Document로 URI를 표현하고있다.

### 기타 주의할점
1. URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
```
DELETE /members/1/      (x)
DELETE /members/1       (o)
```
2. 언더바(_)는 URI에 사용하지 않는다.
3. URI는 소문자를 사용한다.
4. 파일 확장자는 URI에 포함시키지 않는다.
