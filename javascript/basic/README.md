# 자바스크립트 기본 문법

## 리터럴  
> 특별한 생성자 없이 코드 상에서 데이터 값을 표햔하는 방식
	
	```javascript
	/*
	10,  // 숫자 리터럴
	"string",  // 문자열 리터럴
	true,  // 불린 리터럴
	false,  // 불린 리터럴
	/reg/gi,  // 정규식 리터럴
	null,  // null 리터럴
	{},  // 객체 리터럴
	[].  // 배열 리터럴
	function(){}  // 함수 리터럴
	*/
	```

## 변수
> 특정 값을 임시로 저장할 수 있는 공간  
> 메모리에 공간 차지  
	
	```javascript
	var nNum = 1;
	```

> 파싱 단계에서 var로 선언된 변수는 호이스팅(제일 상단으로 올라간다.)이 되어 undefined 상태에서  
> 변수 선언된 곳을 만나게 되면 그 때 할당된다.
	
	```javascript
	alert(nNum);  // undefined
	var nNum = 1;
	alert(nNum);  // 1
	```