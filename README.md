# Connectly 소셜 로그인 구현

## Introduction

커넥틀리 소셜 로그인 구현 화면의 백엔드 db와 api를 따로 구축해 봤습니다.  

- 기간 : 22.04.05 ~ 22.04.11 (총 6일)

## 레포지토리 주소

- [Front-end Github](https://github.com/minchodang/Connectly-socialLogin-frontend)
- [Back-end Github](https://github.com/minchodang/Connectly-socialLogin-backend)

## CLONE 후 해당 프로젝트 실행 방법.
1. git clone후, npm install을 통해 pakage.json 패키지 설치. 
2. npm run dev를 통해 서버 시작 스크립트 실행. 

## Technologies

- Back-end

<img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">


## 구현 기능.

[ Back-end ]

1. 회원가입/로그인 API 구현

- 소셜 로그인(카카오)를 이용한 회원가입/로그인 API 구현

- 1) model 단 구성. 

![image](https://user-images.githubusercontent.com/90169703/162672929-ae659b3f-6adf-4d12-8bd9-19441def4ddd.png)

- 2) service 단 구성. 

- 1. 카카오 
![image](https://user-images.githubusercontent.com/90169703/162673160-bc54794e-3350-4fa7-9632-4645a24507bb.png)

- 2. 네이버
![image](https://user-images.githubusercontent.com/90169703/162673280-179c26cf-63f8-4037-a75d-1a44d54002f6.png)

- 3)controller 단 구성. 

![image](https://user-images.githubusercontent.com/90169703/162673344-24f6132d-6f1d-4631-9910-d0e8f1c5a921.png)


2. mysql을 통한 커넥틀리 db 구축. 

![image](https://user-images.githubusercontent.com/90169703/162672529-bd89b2be-beed-4776-967c-7348ef4f248f.png)
![image](https://user-images.githubusercontent.com/90169703/162672592-5007bba9-1de2-4abe-99db-cdc9f203da84.png)

3. 스키마 파일.
![image](https://user-images.githubusercontent.com/90169703/162673507-879fb353-895a-410f-a016-0e3168be339e.png)

4. 라우터로 endpoint 설정. 

![image](https://user-images.githubusercontent.com/90169703/162673651-213e6b98-8925-4321-afbb-f95b38618443.png)



### Contact Me

- 강민수 minsu910725@gmail.com

