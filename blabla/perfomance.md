---
layout: post
title: performance
categories: [etc]
tags: [performance]
fullview: false
---

## performance
1. [image_request](#image_request)  
1. [data-uri](#data-uri)  

### <a href="#" name="image_request">image_request</a>  
- image tag  
    이미지 태그에 지정된 src의 파일은 display:none 이더라도 `request 발생한다.`  

- background-image  
    CSS의 background-image가 지정되고 display:none 이라면 `request 발생하지 않는다.`  
    하지만, inline style로 지정했을 경우 FF(파이어폭스)를 제외한 브라우저에서 `request 발생한다.`  

- iframe src=""  
    iframe만으로는 `request가 발생하지 않는다.`  
    빈 src는 about:blank를 가르키므로 `request가 발생하지 않는다.`  

- font-face  
    font-face선언된 것만으로는 `request 발생하지 않는다.`  
    내부의 텍스트가 존재해야만 `request 발생한다.`  

### <a href="#" name="data-uri">data-uri</a>  
구글링으로 조금 알아보니 이미지, 동영상 등의 외부 데이터를 `uri로 표현`하는 방법이라고 한다.  
`데이터 없이 이미지, 동영상 등을 표현`할 수 있는 것이다.  
이렇게 처리할 경우 `리퀘스트를 줄일 수 있어 빠른 전송`을 할 수 있다고 한다.  
하지만, 캐시가 되지 않으며 base-64로 인코딩 되면서 크기가 증가하게 되어서  
이미지가 약 600바이트를 넘기면 용량면에서 효율적이지 못하다고 한다.  
또한 지원하는 브라우저가 많지 않으며(IE7 이하 등) 제약적인 환경이 많다고 한다.  
data-uri가 성능 개선에 꼭 적합하다고는 말할 수 없겠지만,  
제약된 환경(?)에서 활용하게 되면 장점이 있는 것은 확실하다.  
아래 사용 예는 src 속성값에 base-64로 인코딩된 이미지 데이터로 사용한 것을 확인할 수 있다.  
data-uri는 <a href="http://dopiaza.org/tools/datauri/index.php">converter</a>를 이용할 수 있다.  

> 사용 예
	
		<img src="http://farm5.static.flickr.com/4001/4574942952_5bdb52d455_z.jpg">
		<img src="data:text/plain;charset=utf-8;base64,aHR0cDovL2Zhcm01LnN0YXRpYy5mbGlja3IuY29tLzQwMDEvNDU3NDk0Mjk1Ml81YmRiNTJkNDU1X3ouanBn">