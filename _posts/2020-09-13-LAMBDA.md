---
title:  "LAMBDA"

categories:
  - JAVA
tags:
  - LAMBDA
  - 익명함수
  - 1급객체
  - FunctionalInterface
---

## 람다식(LAMBDA)이란
람다식은 수학의 `람다대수`에서 파생된것으로 메서드를 하나의 식으로 표현한 것.
메서드를 람다식으로 표현하면 메서드의 이름과 반환값이 없어지므로 람다식을 `익명함수`라고도 한다.
JAVA도 Javascript처럼 함수지향적인 문법이 필요하다고 생각하여 추가 된 듯 싶다.
`익명함수`는 `1급객체`의 특성을 가지므로 변수나 파라미터로도 사용가능하다.
JAVA 8부터 지원.

## 기존 인터페이스 사용법
```java
//인터페이스 작성
public interface LambdaExample {
    public int sum(int a, int b);
}
```
```java
//구현부
public class LambdaExampleImpl implements LambdaExample{
    public int sum(int a, int b){
      return a+b;
  }
}
```
```java
//실행부
public class Main {
    public static void main(String[] args){
        LambdaExample r1 = new LambdaExampleImpl();
        System.out.println(r1.sum(1,2));
    }
}
```

## 람다 사용법
```java
//인터페이스 작성
@FunctionalInterface
public interface LambdaExample {
    public int sum(int a, int b);
}
```
```java
public class Main {
    public static void main(String[] args){
        LambdaExample r2 = (int a, int b) -> {return a+b;};
        System.out.println(r2.sum(1,2));
    }
}
```
위와같이 코드도 간결해지고 가독성이 좋아진다.  
(아직 안익숙해서 나는 가독성이 구리다.)

####  @FunctionalInterface

구현해야 할 추상 메소드가 하나인 인터페이스를 `함수적 인터페이스` 라고 한다.
이 인터페이스는 '함수구현 전용임!'을 나타내는 어노테이션.
람다는 `함수적 인터페이스` 만 구현 가능함.
구현할 추상메소드가 두개 이상일 경우 에러를 뱉는다.
