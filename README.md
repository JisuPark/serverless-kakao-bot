# Serverless Kakao Bot

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://travis-ci.org/JisuPark/serverless-kakao-bot.svg?branch=master)](https://travis-ci.org/JisuPark/serverless-kakao-bot)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**질문이 있으신가요?** <a href="mailto:jisu_park@korea.ac.kr">메일</a>을 보내주세요!

## 소개

**Serverless Kakao Bot**은 손쉽게 [플러스친구 자동응답](https://github.com/plusfriend/auto_reply) 기능을 가진 카카오톡 봇을 만들기 위해 만들어졌습니다.

만들어질 봇은 다음의 특징을 가지고 있습니다.

1. **확장성**: 유저가 늘어나더라도 성능은 유지됩니다.
2. **경제적**: 유저의 요청 수에 따라 과금이 됩니다.
3. **쉬운 유지보수**: 로직에만 집중하면 됩니다.

## 목차

* [준비사항](#준비사항)
* [개발](#개발)
  * [실행하기](#실행하기)
  * [테스트하기](#테스트하기)
  * [배포하기](#배포하기)
* [라이센스](#라이센스)
* [소개](#소개)

## 준비사항

* [AWS Route53 에서 구입한 도메인](https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/domain-register.html)
* [AWS Certificate 에서 발급받은 인증서](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-request.html)
* [AWS Credentials](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com)
* [Serverless](https://github.com/serverless/serverless#quick-start)

## 개발

### 설치하기

```bash
$ serverless install --url https://github.com/JisuPark/serverless-kakao-bot
$ yarn install
$ vi serverless.yml # profile과 domainName을 수정해주세요
$ sls create_domain
```

### 실행하기

```bash
$ sls invoke local -f keyboard -l
```

### 테스트하기

```bash
$ yarn run test
```

### 배포하기

```bash
$ sls deploy
```

## 라이센스

Copyright (c) 2018 JisuPark. It is free software and maybe redistributed under the terms specified in the LICENSE file.

## 소개

**Jisu Park**에 의하여 작성되었으며 유지 보수되고 있습니다.

> Github [@JisuPark](https://github.com/JisuPark)
