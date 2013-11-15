# 자바스크립트 기본 문법
1. [리터럴](#literal)  
1. [변수](#variable)  
1. [프로그램 실행 단계](#program_process)  
1. [데이터 타입](#data-type)  
1. [숫자](#number)  
1. [문자열](#string)  
1. [불리언](#boolean)  
1. [undefined](#undefined)  
1. [null](#null)  
1. [연산자](#operator)  
1. [조건문 if](#if)  
1. [조건문 switch](#switch)  
1. [반복문 for / for in](#for)  
1. [반복문 while / do while](#while)  
1. [예외 처리 try / catch / finally / throw](#try)  
1. [break](#break)  
1. [continue](#continue)  
1. [배열](#array)  

---
---
---

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

console.log(window.nNum);  // 1
console.log(nNum);  // 1 - window 생략 가능
console.log(this === window);  // true
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
var n3 = 0377;  // 8진수 표현, 3x64 + 7x8 + 7 = 255(10진수) - 0으로 시작
var n4 = 0xff;  // 16진수 표현, 15x16 + 15 = 255(10진수) - 0x로 시작
var n5 = 0377 * 2;  // 510

console.log(n3);  // 255
console.log(n4);  // 255
console.log(n5);  // 510

console.log(0327);  // 8진수로 215
console.log(0328);  // 8이 들어갔으니 10진수로 328

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

// parseInt()
var a = '5a';
console.log(parseInt(a, 10));  // 5 - 10진수로 반환
```

### Math
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

### Number
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

// Number
var testNum = new Number('10.8842');

document.write(Number.MAX_VALUE);  //표현 가능한 가장 큰 수
document.write('<br/>');
document.write(Number.MIN_VALUE);  //표현 가능한 가장 작은 수
document.write('<br/>');
document.write(Number.NEGATIVE_INFINITY);
document.write('<br/>');
document.write(Number.POSITIVE_INFINITY);
document.write('<br/>');
document.write(testNum.toExponential(3));
document.write('<br/>');
document.write(testNum.toPrecision(3));  //총 세 자리 표시! 이하의 자리수에서 반올림
document.write('<br/>');
document.write(testNum.toFixed(3));  //소수점 이하 세 자리까지 표시하고 그 이하의 자리수에서 반올림
```

## <a href="#" name="string">문자열</a>
* 작은 따옴표(' '), 큰 따옴표(" ")로 묶어서 표현한다.  
* 자바스크립트 내에서 모든 문자는 16비트 유니코드(UTF-16) 이다.  
* 자신의 길이를 나타내는 length라는 속성을 갖는다.  
* 이스케이프로는 백슬러쉬를 사용한다.  
* 문자열은 +를 사용해서 결합 할 수 있다.  
		
```javascript
// new String()으로 반환된 값은 문자열이 아니라 객체이다.
// new 없이 String()만 사용하면 toString()과 같이 문자열로 변환하는데 사용된다.
var sString = new String('hello');
String(1);  // '1' 반환

// 문자열 리터럴
var sString2 = 'world';

console.log('i\'m...');  // i'm...

// String
var a = new String('This is abcdefg');
var test = "test";

document.write(a);  //This is abcdefg
document.write('<br/>'); 
document.write(a.charAt(0));  //T
document.write(a.charAt(1));  //h
document.write('<br/>');
document.write(a.concat(test));  //This is abcdefgtest
document.write('<br/>');
document.write(a.indexOf('i'));  //2
document.write('<br/>');
document.write(a.lastIndexOf('i'));  //5
document.write('<br/>');
document.write(a.slice(2));  //is is abcdefg
document.write('<br/>');
document.write(a.slice(2,10));  //is is ab
document.write('<br/>');
document.write(a.substr(2));  //is is abcdefg
document.write('<br/>');
document.write(a.substr(2,10));  //is is abcd
document.write('<br/>');
document.write(a.substring(2,10));  //is is ab
document.write('<br/>');
document.write(a.toUpperCase());  //THIS IS ABCDEFG
document.write('<br/>');
document.write(a.toLowerCase());  //this is abcdefg
document.write('<br/>');
document.write(a.replace('a','aa'));  //This is aabcdefg
document.write('<br/>');

var strSplit = a.split(" ");
document.write(strSplit[0]); //This
document.write('<br/>');
document.write(strSplit[1]);  //is
document.write('<br/>');
document.write(strSplit[2]);  //abcdefg

// substring()
// substring(x,y) => x : 0부터 x번째 부터, y : 0부터 y번째 이전의 값
var a = '1234567890';
a.substring(0,4);  // 1234
a.substring(4,6);  // 56
a.substring(6,8);  // 78

// substr()
// substr(x,y) => x : 0부터 x번째 부터, y : x번째 부터 y번째 이전의 값
var b = '1234567890';
b.substr(0,4);  // 1234
b.substr(4,6);  // 56789
b.substr(6,8);  // 7890

// concat()
var a = 'aaa';
var b = 'bbb';
console.log(a.concat(b));  // aaabbb
console.log(a+b);  // aaabbb

// concat()
// 2개 이상의 배열을 결합하는데 사용 될 수 있다.
var arrA = ['a','b'];
var arrB = ['c','d'];
console.log(arrA.concat(arrB));  // ['a','b','c','d']
console.log(arrA);  // ['a','b']
console.log(arrB);  // ['c','d']

// join()
// 문자열로 배열 요소를 결합하고 문자열을 반환한다.
var fruits = ['apple','banana','orange']
var arrFruits = fruits.join('*');
console.log(arrFruits);  // apple*banana*orange

// search()
// 정규 표현식을 전달 인자로 받아서 가장 처음에 매칭되는 부분의 문자열의 위치를 반환하고,
// 매칭되는 문자열이 없다면 -1을 반환한다. (정규 표현식에서 g 플래그가 있다면 무시한다.)
var a = 'abc abc';
var b = a.search('b');
var c = a.search('e');
console.log(b);  // 1
console.log(c);  // -1

// match()
// 정규 표현식을 유일한 전달 인자로 받고 매칭된 결과를 배열로 만들어 반환한다.
// 매칭되는 문자열이 없다면 null을 반환한다.
var a = 'abc abc';
var b = a.match(/a/g);
var c = a.match(/e/g);
console.log(b);  // ['a','a'] 
console.log(c);  // null

// replace()
/*
찾아서 바꾸기 작업을 수행한다.
정규 표현식에 g 플래그가 설정되어 있으면 문자열 내에서
패턴에 매치되는 모든 부분 문자열을 교체할 문자열로 바꾼다.
정규 표현식에서 괄호로 묶인 부분 표현식은 왼쪽에서 오른쪽으로 번호가 매겨지고,
각 부분 표현식과 매치된 텍스트를 기억한다.
*/
```

## <a href="#" name="boolean">불리언</a>
* true(참), false(거짓) 로 값을 표현할 때 사용한다.  
* true는 1, false는 0을 반환한다.  
* 0, null, ""(빈 문자열), false, undefined, NaN 외의 값으로 평가되면 항상 true이다.  
		
```javascript
console.log(true > false);  // true
```

## <a href="#" name="undefined">undefined</a>
> 값이 할당되지 않음을 나타낸다.  
		
```javascript
var foo;  // undefined

console.log(null == undefined)  // true
console.log(null === undefined)  // false
```

## <a href="#" name="null">null</a>
* 객체가 없음을 나타낸다.  
* 아무런 값도 나타내지 않는다.  
* 어떠한 유효한 값도 아니다. (값 자체가 없다는 의미는 아니다.)  
		
```javascript
var foo = null;  // null
var foo2 = null + 6;  // 6
```

## <a href="#" name="operator">연산자</a>
### 증가, 감소 연산자
* ++변수 이면 먼저 증가 후 최종값으로 평가한다.  
* 변수++ 이면 평가 끝난 후 증가한다.
		
```javascript
i = 1;
j = ++i;  // 2

i = 1;
j = i++;
console.log(j);  // 1
console.log(i);  // 2
```

### 비교 연산자
* '=='(equal)은 타입이 다른 경우 타입을 일치 시킨 후 비교한다.  
* '==='(identical)은 타입 비교까지 한다.  
		
```javascript
console.log(1 == '1');  // true
console.log(1 === '1');  // false
console.log(1 != '1');  // false
console.log(1 !== '1');  // true

// 피연산가 둘 다 객체라면 두 객체의 참조값을 비교한다.
// 즉, 두 참조값이 가리키는 메모리 위치가 다르므로 false이다.
var o1 = new String('hello');
var o2 = new Object('world');
console.log(o1 == o2);  // false

console.log(undefined == null);  // true
```

### OR 연산자(||)
> 좌측 || 우측 연산시 좌측이 참이면 우측은 평가하지 않는다. 즉, 좌측 값만 반환한다.  

### AND 연산자(&&)
> 좌측 && 우측 연산시 좌측이 거짓이면 우측은 평가하지 않고 좌측 값만 반환한다.  
> 좌측이 참이면 우측 값을 반환한다.  

### 부정 연산자(!)
> 항상 true, false만 반환된다.  
		
```javascript
var booleans != false;  // true
```

## <a href="#" name="if">조건문 if</a>
		
```javascript
if(a > 2){
	alert('a');
}else{
	alert('else');
}

// 삼항 연산자
nNum > 0 ? alert('plue') : alert('minus');

// 삼항 연산자를 콤마로 분리하여 사용 가능하다.
var nAge = 30;
var sURL = nAge > 20 ? (
	alert('ok'),
	'ok.html'
) : (
	alert('oooops'),
	'oooops.html'
);
location.assign(sURL);
```

## <a href="#" name="switch">조건문 switch</a>
> 너무 많은 else if문을 사용하게 된다면 switch 문으로 코드를 줄일 수 있을 것이다.
		
```javascript
var nNum = '', nAge = '20';
switch(nAge){
	case a > 10 :
		nNum = 'a는 10살 보다 많다';
		break;
	case a > 20 :
		nNum = 'a는 20살 보다 많다';
		break;
	default :
		nNum = 'a는 몇살이야?';
		break;
}
```

## <a href="#" name="for">반복문 for / for in</a>
> for문 안에서 사용된 변수 i는 for 밖에서도 사용 가능하다.  
> 변수 스코프는 함수 단위로 결정된다.
		
```javascript
for(var i = 0; i < 10; i++){
	
}

// 배열 초기화
for(i = 0; i < a.length; a[i++] = 0);

// for in
var oAge = {a : '10', b : '20'};
var result = '\n';
for(var prop in oAge){
	result += '속성명 : '+ prop +', 값 : '+ oAge[prop] +'\n';
}

// for in
var oAge = ['1', '2'];
var result = '\n';
for(var prop in oAge){
	result += '인덱스 : '+ prop +', 값 : '+ oAge[prop] +'\n';
}

// for in
var oAge = {a : '10', b : '20'};
var arrAge = [];
var i = 0;
for(arrAge[i++] in oAge);  // arrAge = ['a', 'b'];
```

## <a href="#" name="while">반복문 while / do while</a>
		
```javascript
// while
var i = 0;
while(i < 10){
	i++;
}

// do while
var i = 0;
do {
	i++;
}while(i < 10);
```

## <a href="#" name="try">예외 처리 try / catch / finally / throw</a>
		
```javascript
try{
	// 실행 코드
}catch(err){  // (생략 가능)
	// 예외 처리
}finally{  // (생략 가능)
	// try 블록에서 예외가 발생하든 안하든 실행되는 코드
	// try 블록에서 return 이 사용 되어도 반드시 실행된다.
}

var txt = '';
function message(){
	try{
		aalert('try');
	}  // try문 에러나면 catch 문에서 에러 체크
	catch(err){
		txt += 'error message : ' + err.message +'';
		alert(txt);
	}
}
message();

// throw (예외 발생)
var a = 5;
try{
	if(a == 5){
		throw 'a1';  // catch 문에 전달
	}
}catch(err){
	if(err == 'a1'){
		alert('a1');
	}
}
// => a1 경고창이 실행된다.
```

## <a href="#" name="break">break</a>
> `조건문`, `반복문`에서 벗어날 때 사용한다.  

## <a href="#" name="continue">continue</a>
> `반복문`에서 현재 반복을 중지하고 다음 반복을 수행한다.  

		
```javascript
for(var i = 0; i < 10; i++){
	continue;
	alert(i);  // 경고창이 출력되지 않는다.
}

// 짝수의 합만 구한다.
var output = 0;
for(var i = 0; i < 10; i++){
	if(i % 2 == 1){
		continue;
	}
	output += i;
}
alert(output);
```

## <a href="#" name="array">배열</a>
		
```javascript
/*
push() 배열 맨 뒤 요소 추가
pop() 배열 맨 뒤 요소 제거
unshift() 배열 앞 요소 추가 
shift() 배열 앞 요소 제거
*/

var aFruit = [];
aFruit.push('apple');
document.write(aFruit+'<br>');  //apple
aFruit.push('banana');
document.write(aFruit+'<br>');  //apple,banana
aFruit.shift();
document.write(aFruit+'<br>');  //banana
aFruit.unshift('orange');
document.write(aFruit+'<br>');  //orange,banana
aFruit.pop();
document.write(aFruit+'<br>');  //orange

document.write(aFruit.length+'<br>');  //1
aFruit.push('apple', 'banana');
document.write(aFruit+'<br>');  //orange,apple,banana

aFruit.splice(1,2);
document.write(aFruit+'<br>');  //orange
aFruit.push('apple', 'banana');
aFruit.splice(1,0,'aaa','bbb');  //1:첫번째 배열 이후, 0:삭제 없음
document.write(aFruit+'<br>');  //orange,aaa,bbb,apple,banana
```