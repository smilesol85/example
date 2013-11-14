# 자바스크립트 기본 문법
1. [리터럴](#literal)
1. [변수](#variable)
1. [프로그램 실행 단계](#program_process)
1. [데이터 타입](#data-type)
1. [숫자](#number)


* 공백은 문자를 구분하는 형태이다.  
* 주석도 공백으로 취급한다.  
* 영문자, $, _ 로만 시작할 수 있다.  
* 숫자, 문장 부호, 예약어(키워드)로 시작할 수 없다.  
* 문자, 숫자, $, _ 만 포함할 수 있다.  
* 대소문자를 구분한다.  

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
* 특정 값을 임시로 저장할 수 있는 공간이다.  
* 메모리에 공간 차지 - 테이터 타입에 따라 차지하는 공간이 결정된다.  
* 변수 선언시 var를 사용한다.  
* 세미콜론(;)으로 마무리 짓는 것은 오류를 줄이는데 아주 좋은 습관이다.  
* 변수에 값을 할당하는 이유는 나중에 다시 사용하기 위해서다.  
	
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

## <a href="#" name="program_process">프로그램 실행 단계</a>
> 프로그램 -> 파싱 -> 변수, 함수 정의 -> 실행 -> 함수 코드 파싱 -> 실행  

어떤 함수에도 포함하지 않은 변수, 어떤 함수에도 포함하지 않는 이름 있는 함수에 대해  
함수명과 동일한 이름의 변수를 만들고 이 변수를 실행 코드가 담긴 함수에 대한 참조로 초기화 한다.  
		
```javascript
alert(f(10));  // 100
var f = 0;

// 파싱 단계에서 변수 f와 이름이 같아 메모리에 저장될 때 덮어쓰게 된다.  
// 최종적으로는 함수를 가리키는 f만 남게 된다.
function f(x){
	return x*x;
}
alert(f);  // 0
```

> 파싱 단계에서 변수와 함수명의 이름이 같은 경우 동일한 메모리에 저장되는데  
> 저장될 때 앞에서 선언된 변수 메모리에 덮어쓰게 된다.  
> 따라서 네임스페이스가 필요하다.  

## <a href="#" name="data-type">데이터 타입</a>
* 데이터 타입으로는 number, string, boolean, null, undefined 가 있다.  
* 객체, 배열 함수 테이터 타입을 지원한다.  
* 날짜, 정규식 등의 데이터 타입을 지원한다.  

## <a href="#" name="number">숫자</a>
* 모든 숫자는 실수 값으로 해석된다.  
* 자바스크립트 해석기는 우선 실제 값으로 계산한 다음 변수에 저장한다.  
* 표현 가능 범위 : 최대 ±1.7976931348623157 x 10308 / 최소 ±5 x 10-324  
* 자료형이 없으므로 오버플로우가 발생할 일이 없다.  
* 숫자 타입에는 Infinity와 NaN(Not a Number)이라는 특수한 값이 있다.  
* isFinite() 함수는 NaN, Infinity, -Infinity이면 false를 반환한다.  
* NaN은 어떤 숫자와도 비교 연산을 할 수 없다. (자신과도 비교 연산이 되지 않는다.)  
* 숫자값이 NaN인지 확인이 필요하다면 isNaN() 함수를 사용하면 된다.  
		
```javascript
var n1 = 255;  // 정수 표현
var n2 = 255.0;  // 실수 표현
var n3 = 0377;  // 8진수 표현, 3x64 + 7x8 + 7 = 255(10진수)
var n4 = 0xff;  // 16진수 표현, 15x16 + 15 = 255(10진수)
var n5 = 0377 * 2;  // 510

console.log(n3);  // 255
console.log(n4);  // 255
console.log(n5);  // 510

console.log(1 == 1.0);  // true
console.log(1 === 1.0);  // true

// Infinity
console.log(typeof -Infinity);  // number
console.log(10 / 0);  // Infinity
console.log(10 * Infinity);  // Infinity
isFinite(NaN);  // false
isFinite(1);  // true

// NaN
console.log(typeof NaN);  // Number
console.log(3 * '3');  // NaN
console.log(NaN == NaN);  // false
isNaN(NaN);  // true
```

### <a href="#" name="Math">Math</a>
> 복잡한 수학 연산을 위해 제공되는 객체이다.  
> [w3schools](#http://www.w3schools.com/jsref/jsref_obj_math.asp, "Math")  
		
```javascript
var a = Math.PI;  // 3.141592653589793 (원주율값 : 약 3.14)
var b = Math.SQRT2;  // 1.4142135623730951 (2의 제곱근값 : 약 1.414)
var c = Math.abs(-1.2);  // 1.2 (절대값 반환)
var d = Math.ceil(1.4);  // 2 (근접한 정수로 올림한 값 반환)
var e = Math.randow();  // 0초과 1미만의 숫자를 랜덤으로 생성
var f = Math.floor(1.4);  // 1 (소수점 버림)
var g = Math.random() * 10;  // 0초과 10미만의 숫자를 랜덤으로 생성
var h = Math.floor(Math.random() * 10);  // 0초과 10미만의 숫자중 소수점 버리고 랜덤으로 생성
```

### <a href="#" name="Number">Number</a>
> 데이터 타입의 숫자를 객체로 만들 수 있다.  
> [w3schools](#http://www.w3schools.com/jsref/jsref_obj_number.asp "Number")
		
```javascript
var a = new Number(15);
a.toString();  // 15 (10 진수로 출력)
a.toString(2);  // 1111 (2진수로 출력)
a.toString(8);  // 17 (8진수로 출력)
a.toString(16);  // f (16진수로 출력)

var b = '9';
Number(b);  // 9 숫자로 변환
```