---
title:  "중복되지 않는 SEQUENCE 추출 하기"

categories:
  - ORACLE
tags:
  - ORACLE
  - SQL
  - SEQUENCE
---


해당 테이블의 sequence를 조회해서
특정 sequence보다 빠른번호으로 데이터를 삽입/수정하기위한 sequence추출 쿼리.

```
SELECT MIN(시퀀스) FROM 테이블A; -- 해당 테이블의 시퀀스 최소값 조회

SELECT ROWNUM AS R_NUM,  SEQ_KEY
  FROM
  (
    SELECT
    LEVEL+1000 AS SEQ_KEY --적당한값으로 시작
    FROM DUAL
    CONNECT BY LEVEL <= 100000 --테이블A의 MIN(시퀀스)이하까지 LEVEL생성
    ) T
 WHERE NOT EXISTS (
   SELECT 1
   FROM 테이블A
   WHERE 시퀀스 = T.SEQ_KEY -- 중복된 시퀀스가 있으면 건너뛴다.
   )
;
```
