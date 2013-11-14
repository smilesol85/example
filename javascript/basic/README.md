# 자바스크립트 기본 문법
1. [리터럴](#literal)
1. [변수](#variable)
1. [데이터 타입](#data-type)

## <a href="#" name="literal">리터럴</a>
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

## <a href="#" name="variable">변수</a>
> 특정 값을 임시로 저장할 수 있는 공간  
> 메모리에 공간 차지 - 테이터 타입에 따라 차지하는 공간이 결정된다.  
> 변수 선언시 var를 사용한다.  
> 세미콜론(;)으로 마무리 짓는 것은 오류를 줄이는데 아주 좋은 습관이다.  
	
```javascript
var nNum = 1;
var sString1 = 'string1', sString2 = 'string2';
```

> 파싱 단계에서 var로 선언된 변수는 호이스팅(제일 상단으로 올라간다.)이 되어 undefined 상태에서  
> 변수 선언된 곳을 만나게 되면 그 때 초기값이 할당된다.
	
```javascript
alert(nNum);  // undefined
var nNum = 1;
alert(nNum);  // 1
```

## <a href="#" name="data-type">데이터 타입</a>
> 데이터 타입으로는 number, string, boolean, null, undefined 가 있다.  
> 객체, 배열 함수 테이터 타입을 지원한다.  
> 날짜, 정규식 등의 데이터 타입을 지원한다.  