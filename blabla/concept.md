---
layout: post
title: concept
categories: [etc]
tags: [concept]
fullview: false
---

1. [web](#web)  
1. [internet](#internet)  
1. [통신 프로토콜](#protocol)  
1. [DTD(Document Type Definition)](#dtd)  
1. [객체 지향 프로그램](#oop)  
1. [타입 캐스팅](#type-casting)  
1. [테스트 주도 개발(TDD, Test Driven Development)](#tdd)  
1. [MVC](#mvc)  
1. [MVP](#mvp)  
1. [MVVM](#mvvm)  
1. [escape sequence](#escape-sequence)  
1. [알고리즘](#algorism)  
1. [html](#html)  
1. [CSS 또는 캐스케이딩 스타일 시트(Cascading Style Sheet)](#css)  
1. [문서 객체 모델(DOM; Document Object Model)](#dom)  
1. [CDN(Contents Delivery Network)](#cdn)  

## <a href="#" name="web">web</a>  
World Wid Web의 약자로 1991년에 처음 등장했다.  
인터넷 위에서 서비스되며 정보를 주고 받는 공간이다.  
    
## <a href="#" name="internet">internet</a>   
전 세계의 컴퓨터가 연결되어 정보를 주고 받는 컴퓨터 네트워크이다.  

## <a href="#" name="protocol">통신 프로토콜</a>  
통신 프로토콜 또는 통신 규약은 컴퓨터나 원거리 통신 장비 사이에서 메시지를 주고 받는 양식과 규칙의 체계이다.  
통신 프로토콜은 신호 체계, 인증, 그리고 오류 감지 및 수정 기능을 포함할 수 있다.  
프로토콜은 형식, 의미론, 그리고 통신의 동기 과정 등을 정의하기는 하지만 구현되는 방법과는 독립적이다.  
따라서 프로토콜은 하드웨어 또는 소프트웨어 그리고 때로는 모두를 사용하여 구현되기도 한다.  

예시)  
HTTP: Hyper Text Transfer Protocol  
HTTPS: Secure Hyper Text Transfer Protocol  
FTP: File Transfer Protocol  
SFTP: Secure File Transfer Protocol  
Telnet: Telephone Network  
POP3: Post Office Protocol version 3  
SMTP: Simple Mail Transfer Protocol  
SSH: Secure Shell  
SSL: Secure Socket Layer  
SOAP: Simple Object Access Protocol  

특히 인터넷에서는 TCP/IP라는 프로토콜을 사용하는데 그 내용은 다음과 같다.  

TCP는 정보 패킷 차원에서 다른 인터넷 노드와 메시지를 상호 교환하는데 필요한 규칙을 사용한다.  
IP는 인터넷 주소 차원에서 메시지를 보내고, 받는데 필요한 규칙을 사용한다.  
    
## <a href="#" name="dtd">DTD - Document Type Definition</a>  
- HTML 3.2  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">  
- HTML 4.01  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">  
- HTML 4.01 Transitional  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd">  
- HTML 4.01 Frameset  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"    "http://www.w3.org/TR/html4/frameset.dtd">  
- HTML 1.0 Strict  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  
- XHTML 1.0 Transitional  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
- XHTML 1.0 Frameset  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">  
- XHTML 1.1  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">  
- XHTML Basic 1.0  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN"  "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd">  
- XHTML Basic 1.1  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN">  
- HTML5  
	<!DOCTYPE html>  

## <a href="#" name="oop">객체 지향 프로그램</a>  
- 사물 추상화(Abstraction)  
- 캡슐화(Encapsulation)  
- 계층구조는 상속(Inheritance)  
- 부모와 다른 자식들의 특성 및 행위는 다양성(Polymorphism)  

> 캡슐화, 다양성, 상속을 이용하여 코드 재사용을 높이고, 유지보수를 줄이는 장점을 얻기 위해  
객체들을 연결하여 프로그래밍 하는 것이다.  

## <a href="#" name="type-casting">타입 캐스팅</a>  
타입 캐스팅이란 특정 데이터타입을 다른 데이터타입으로 변환하는 것이다.  

## <a href="#" name="tdd">테스트 주도 개발(TDD, Test Driven Development)</a>  
문제를 정의(사용자 중심의 스펙)하고 해답을 찾아가는 과정이다.  

## <a href="#" name="mvc">MVC</a>  
Model(data), View, Controller  
- Model : 데이터 구조를 표현한다. 데이터를 추출, 입력, 갱신 등의 일을 한다.  
- View : 사용자에게 보여질 부분을 표현한다.  
- Controller : Model과 View 중간에서 동작을 수행한다.  

web MVC
- spring (java)  
- codeigniter (php)  

> input -> C / C -> V / C -> M / M -> V  

## <a href="#" name="mvp">MVP</a>  
Mpdel, View, Presenter  

> input -> V -> P -> M -> P -> V -> P  

## <a href="#" name="mvvm">MVVM</a>  

> input -> V -> VM -> M -> VM  

## <a href="#" name="escape-sequence">escape sequence</a>  
escape : 달아나다, 탈출하다, (나쁜 상황에서) 벗어나다, (불쾌하거나 위험한 것을) 피하다. 라는 의미가 있다.  
sequence : 연속적인 사건들, 순서, 장면 등의 의미가 있다.  

escape sequence는 특수 문자로 컴퓨터의 상태를 변경하는데 사용되는 문자열이다.  
예를 들면, 자바스크립트에서 줄바꿈을 위해 `\n`을 사용하는 것과 같다.  

## <a href="#" name="algorism">algorism</a>  
어떠한 문제를 해결하기 위한 여러 동작들의 유한한 모임이다.  

## <a href="#" name="html">HTML</a>  
하이퍼텍스트 마크업 언어(HyperText Markup Language)는 웹 페이지를 위한 마크업 언어다.  

hyper: 들뜬, 흥분한, [과도·초과·최고도]의 뜻  

## <a href="#" name="css">CSS 또는 캐스케이딩 스타일 시트(Cascading Style Sheet)</a>  
마크업 언어가 실제 표시되는 방법을 기술하는 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다.  
W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다.  

cascading: 폭포같은, 계속되는, 연속적인  

## <a href="#" name="dom">문서 객체 모델(DOM; Document Object Model)</a>
객체 지향 모델로써 구조화된 문서를 표현하는 형식이다. DOM은 플랫폼/언어 중립적으로 구조화된 문서를 표현하는 W3C의 공식 표준이다.  
DOM은 또한 W3C가 표준화한 여러 개의 API의 기반이 된다.  


## <a href="#" name="cdn">CDN (Contents Delivery Network)</a>  
CDN 은 Contents Delivery Network 의 약자로 컨텐츠 전송 네트워크이다.  
CDN은 ISP(Internet Service Provider)의 네트워크 하단에 여러 대의 '캐시서버(임시저장장치)'를 설치,  
CP(Contents Provider)가 제공하는 콘텐츠를 이 캐시 서버에 미리 옮겨놓고 수요가 있을 때 그 콘텐츠를 사용자에게 전달해 줍니다.  

CDN서비스는 수많은 네트워크가 연결된 인터넷에서 콘텐츠 공급의 포화로 적체현상이 발생하거나 테이터가 손실됨에 따라  
콘텐츠를 재전송해야 하는 현상을 극복하기 위해 떠오른 신(新)기술입니다.  
CDN은 인터넷 통신망의 용량 확장없이 캐싱서버와 웹스위치 등을 이용해 콘텐츠를 최대한 사용자 가까이에 옮겨  
전송속도를 획기적으로 향상시키는데 캐싱서버와 웹스위치를 동시에 적용하면 동영상 등 대용량 콘텐츠를 10배 이상의 속도로 전송할 수 있습니다.  
CDN을 통해 콘텐츠를 사용자 가까이에 미리 옮겨놓음으로써 전송속도를 향상시키고,  
데이터 전송시 중간과정에서 발생할 수 있는 속도 저하와 데이터손실을 막을 수 있습니다.  