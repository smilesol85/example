#자바스크립트  
1. [자바스크립트 특징](#javascript)  
1. [기본문법](#basic)  
1. [함수, 객체](#function_object)  
1. [상속](#inheritance)
1. [이벤트](#event)  

##<a href="#" name="javascript">자바스크립트 특징</a>
* function 중심의 절차적 프로그래밍(producedural programing)이다.  
* object 중심의 객체 지향 프로그래밍(object-oriented programing)이다.  
* 느슨한 타입 체크 - 타입 캐스팅을 고려하지 않아도 된다.  
	(강력한 타입의 언어에서는 변수를 선언할 때 변수 타입을 선언하며,  
	값의 타입과 선언된 타입이 일치해야 한다.)  
* 람다(lamda) 언어이다. 람다는 익명함수, 클로저 등을 정의하기 위한 표현식이다.  
* ECMAScript 표준을 따른다.  
* 제약에 자유로운 first-class object(일급 객체) 이다.  

**일급 객체란?**  
* 변수나 데이터 구조안에 담을 수 있다.  
* 파라미터로 전달 할 수 있다.  
* 반환값이 될 수 있다.  
* 비동기적인 처리 등의 구현이 간편하다.  

##<a href="#" name="basic">기본문법</a>  

* 공백은 문자를 구분하는 형태이다.  
* 주석도 공백으로 취급한다.  
* 영문자, $, _ 로만 시작할 수 있으며, 숫자, 문장 부호, 예약어(키워드)로 시작할 수 없다.  
* 문자, 숫자, $, _ 만 포함할 수 있다.  
* 대소문자를 구분한다.  

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

###<a href="#" name="literal">리터럴</a>
특별한 생성자 없이 코드 상에서 데이터 값을 표햔하는 방식이다.  

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

###<a href="#" name="variable">변수</a>
* 특정 값을 임시로 저장할 수 있는 공간이다.  
* 메모리에 공간을 차지한다.(테이터 타입에 따라 차지하는 공간이 결정된다.)  
* 변수 선언시 var를 사용한다.  
* 세미콜론(;)으로 마무리 짓는 것은 오류를 줄이는데 아주 좋은 습관이다.  
* 변수에 값을 할당하는 이유는 나중에 다시 사용하기 위해서다.  
	
```javascript
var nNum = 1;
var sString1 = 'string1', sString2 = 'string2';

console.log(window.nNum);  // 1
console.log(nNum);  // 1, window 생략 가능
console.log(this === window);  // true
```

> 파싱 단계에서 var로 선언된 변수는  
	`호이스팅`(제일 상단으로 올라가는 undefined로 정의 되는것을 말한다.) 되어  
	undefined 상태에서 변수 선언된 곳을 만나게 되면 그 때 초기값이 할당된다.  
	
```javascript
alert(nNum);  // undefined
var nNum = 1;
alert(nNum);  // 1
```

###<a href="#" name="program_process">프로그램 실행 단계</a>
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
> 따라서 `네임스페이스`가 필요하다.  

###<a href="#" name="data-type">데이터 타입</a>
* 데이터 타입으로는 number, string, boolean, null, undefined 가 있다.  
* 객체, 배열 함수 테이터 타입을 지원한다.  
* 날짜, 정규식 등의 데이터 타입을 지원한다.  

###<a href="#" name="number">숫자</a>
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

####Math
> 복잡한 수학 연산을 위해 제공되는 객체이다.  
> [w3schools](http://www.w3schools.com/jsref/jsref_obj_math.asp "Math")  
		
```javascript
var a = Math.PI;  // 3.141592653589793 (원주율값 : 약 3.14)
var b = Math.SQRT2;  // 1.4142135623730951 (2의 제곱근값 : 약 1.414)
var c = Math.abs(-1.2);  // 1.2 (절대값 반환)
var d = Math.ceil(1.4);  // 2 (근접한 정수로 올림한 값 반환)
var e = Math.randow();  // 0초과 1미만의 숫자를 랜덤으로 생성
var f = Math.floor(1.4);  // 1 (소수점 버림)
var g = Math.random() * 10;  // 0초과 10미만의 숫자를 랜덤으로 생성

var max = 10;
var min = 5;
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;  // 5 ~ 10 사이의 랜덤 추출

var h = Math.floor(Math.random() * 10);  // 0초과 10미만의 숫자중 소수점 버리고 랜덤으로 생성
```

####Number
> 데이터 타입의 숫자를 객체로 만들 수 있다.  
> [w3schools](http://www.w3schools.com/jsref/jsref_obj_number.asp "Number")
		
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

###<a href="#" name="string">문자열</a>
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

// trim 함수 생성
String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, "");
};
```

###<a href="#" name="boolean">불리언</a>
* true(참), false(거짓) 로 값을 표현할 때 사용한다.  
* true는 1, false는 0을 반환한다.  
* 0, null, ""(빈 문자열), false, undefined, NaN 외의 값으로 평가되면 항상 true이다.  
		
```javascript
console.log(true > false);  // true
```

###<a href="#" name="undefined">undefined</a>
> 값이 할당되지 않음을 나타낸다.  
		
```javascript
var foo;  // undefined

console.log(null == undefined)  // true
console.log(null === undefined)  // false
```

###<a href="#" name="null">null</a>
* 객체가 없음을 나타낸다.  
* 아무런 값도 나타내지 않는다.  
* 어떠한 유효한 값도 아니다. (값 자체가 없다는 의미는 아니다.)  
		
```javascript
var foo = null;  // null
var foo2 = null + 6;  // 6
```

###<a href="#" name="operator">연산자</a>
####증가, 감소 연산자
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

####비교 연산자
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

####OR 연산자(||)
> 좌측 || 우측 연산시 좌측이 참이면 우측은 평가하지 않는다. 즉, 좌측 값만 반환한다.  

####AND 연산자(&&)
> 좌측 && 우측 연산시 좌측이 거짓이면 우측은 평가하지 않고 좌측 값만 반환한다.  
> 좌측이 참이면 우측 값을 반환한다.  

####부정 연산자(!)
> 항상 true, false만 반환된다.  
		
```javascript
var booleans != false;  // true
```

###<a href="#" name="if">조건문 if</a>
		
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

###<a href="#" name="switch">조건문 switch</a>
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

###<a href="#" name="for">반복문 for / for in</a>
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

###<a href="#" name="while">반복문 while / do while</a>
		
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

###<a href="#" name="try">예외 처리 try / catch / finally / throw</a>
		
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

###<a href="#" name="break">break</a>
> `조건문`, `반복문`에서 벗어날 때 사용한다.  

###<a href="#" name="continue">continue</a>
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

###<a href="#" name="array">배열</a>
		
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

var items = ['a', 'b', 'c', 'd'];
var randomItems = items[Math.floor(Math.random() * items.length)];

// 배열의 숫자를 랜덤으로 정렬하고자 할 때
// sort 메서내 내의 함수는 선택사항이며, 생략하면 오름차순, 아스키 문자 순서로 정령된다.
var numbers = [10, 333, 2, 345, 85674, 23];
numbers = numbers.sort(function(){return Math.random() - 0.5});

var a = [5, 3, 6, 1, 2, 10];
var b = a.sort();  //  1, 10, 2, 3, 5, 6
b = a.sort(CompareForSort);  // 1, 2, 3, 5, 6, 10
function CompareForSort(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}
```

##<a href="#" name="function_object">함수, 객체</a>  

* 자바스크립트에서 함수는 객체이다.  
* 변수에 할당될 수 있고, 다른 함수의 인자로 전달 되거나 함수의 결과로써 반환될 수도 있는 `일급 객체(first-class object)`로서의 특징을 가지고 있다.  
* 함수를 정의하면 모든 함수에는 프로토타입 객체라는 것이 함께 정의된다.  
  

1. [함수 정의](#function)  
1. [함수 리터럴 이용](#function_literal)  
1. [프로토타입](#prototype)  
1. [Function 생성자 사용](#new_function)  
1. [Function](#Function)  
1. [자기 호출 함수](#self-invoking)  
1. [콜백 함수](#callback)  
1. [클로저](#closer)  
1. [클래스 기반의 객체지향](#class_object)  
1. [객체 구성](#object_constructor)  
1. [객체 생성하기](#create_object)  
1. [객체 멤버 관리](#member_object)  


###<a href="#" name="function">함수 정의</a>
* 함수를 정의하는 것만으로 함수 객체가 생성된다.  
* 일반 객체와 다르게 `실행 코드 블록`을 가지고 있다.  
* 일반 객체와 같이 동적으로 멤버를 가질 수 있다.
* 파싱 단계에서는 함수명이 정의된다.  
* 함수를 호출하면 런타임에 함수 내부가 실행된다.  
* 함수를 다른 변수에 할당할 수 있다.  
		
```javascript
function f(){
	alert('function');
}
f.prop = 'property';
f.method = function(){};

function add(x,y){
	alert(add.Des);  // Hello
	return x + y;
}
add.Des = 'Hello';
add(1,2);

// 함수를 다른 변수에 할당할 수 있다.
var f2 = add;
var r = f2(3,3);  // 6

// 렉시컬 특성
var x = 'global';
function f(){
	alert(x);  // undefined
	var x = 'local';
	alert(x);  // local
}
```

####arguments
> 함수를 호출할 때 정의된 매개변수(parameter)의 개수와 함수로 넘겨주는 인자(argument)의 개수가 달라도 된다.  
> 매개변수(oarameter) 개수보다 넘어온 인자(argument)의 개수가 적으면 차례로 값이 채워지고 나머지는 `undefined`가 된다.  

* arguments 타입의 객체는 함수가 호출되면 자바스크립에서 `자동으로 생성하는 객체`이다.  
* arguments 객체는 배열이 아니지만, 배열과 유사하다.  
* arguments는 `length`, `callee` 라는 속성 사용이 가능하다.  
		
```javascript
function f(){
	var total = 0;
	for(var i = 0; i < arguments.length; i++){
		total += arguments[i];
	}
	return total;
}
// f(2,3,4);  // 9
// f(8,7);  // 15
```
####arguments.callee
* this와 유사하나 arguments.callee는 함수를 가르키고, this는 객체를 가르킨다.  
* 재귀 호출 함수와 같이 구현할 때 유용하다.  
		
```javascript
function f(){
	return function(x){
		if(x <= 1){
			return 1;
		}
		return x * arguments.callee(x - 1);  // return function(x)를 가르킨다.
	}
}

var result = f()(5);  // 5*4*3*2*1 = 120
``` 
arguments를 배열의 객체로 변환하기
		
```javascript
var argArray = Array.prototype.slice.call(arguments);
```

arguments가 숫자인지 판별하기
		
```javascript
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
```

###<a href="#" name="function_literal">함수 리터럴 이용</a>
* 인자로 전달 가능  
* 변수에 할당  
* 다른 함수의 반환값으로 사용
		
```javascript
var f = function(x,y){
	return x + y;
};

//
var cont = function(){
	this.a = 10;
	this.b = 20;
}

cont.prototype = {
	Plus : function(){
		return this.a + this.b;
	}
}

var Cont = new cont();

cont.a;  // undefined
Cont.a;  // 10
Cont.Plus();  // 30

Cont.Plus = function(){
	return 50;
}

Cont.Plus();  // 50

// arguments 활용하는 방법
var cont = function(){this.init.apply(this, arguments)};
cont.prototype = {
	init : function(a, b){
		this.a = a;
		this.b = b;
	},

	Plus : function(){
		return this.a + this.b;
	}
};

var Cont = new cont(10, 20);
```

###<a href="#" name="prototype">프로토타입</a>  

**프로토타입 기반 프로그래밍** 

> 객체의 원형인 프로토타입을 이용하여 새로운 객체를 만드는 프로그래밍 기법이다.  
> 새로 생성된 객체도 자신의 프로토타입을 가지고 있다.  
> 또 다른 객체를 새롭게 만들어 낼 수 있으며, 이렇게 확장하는 방식을 프로토타입 기반 프로그래밍이라고 한다.  

* 객체가 생성되면 그 객체의 모태를 프로토타입이라고 한다.  
* 모든 함수는 prototype 속성을 갖는다.  
* 프로토타입 연결은 값의 갱신에 영향을 받지 않는다. 즉, 객체를 변경하더라도 객체의 프로토타입에는 영향을 미치지 않는다.  
* 함수는 new 연산자와 함께 쓰이면 생성자가 된다.  
* 생성중인 인스턴스 객체에 생성자 함수의 prototype이 참조된다.  
* 모든 객체는 속성을 참조할 때 해당 객체에서 우선 검색하고, 존재하지 않는다면 참조하고 있는 prototype에서 찾는다. 
	프로토타입 체인을 계속 따라 올라가도 속성이 존재하지 않는다면 `undefined`를 반환한다.  

###<a href="#" name="new_function">Function 생성자 사용</a>
* new와 함께 사용된다.  
* 다른 인스턴스를 생성할 수 있는 요소이다.  
* `메모리 사용이 비효율적`이다.  
		
```javascript
var f = new Function('x','y','return x+y');
```

###<a href="#" name="Function">Function</a>
* Function 이라는 함수는 `함수 인스턴스(instance)를 생성하는 함수`이다.  
* Object, Array도 Function의 인스턴스이다.  
* 모든 함수는 Function 멤버를 공유한다.  


*인스턴스(instance) - 현재 바로 생성된 그 객체*  
*인스턴스(instance)를 생성하는 데 사용된 함수를 생성자(constructor)라고 한다.*  

		
```javascript
// f라는 함수 인스턴스를 생성하는 표현이다.
// 마지막을 제외한 앞의 인자는 함수를 호출하는데 사용되는 인자다.
var f = new Function('x','y','return x+y');

// 위의 코드와 동일하다.
// f라는 인스턴스가 생성된다.
function f(x,y){
	return x+y;
}
```

> Function ->(생성) Object(Function 인스턴스) ->(생성) Object 객체(Object 인스턴스)  

![Alt text](http://smilesol85.github.io/image/Function_prototype.png "Function prototype")

###<a href="#" name="self-invoking">자기 호출 함수</a>
		
```javascript
// 자기 호출 함수
/*
    자기 호출 함수는 재귀 함수와 다른 개념이다.
    재귀 함수는 함수 내에서 자신을 한번 더 호출 하는 것이다.
*/
(function(){
    alert('function');
}();

!function(){  // ! 대신 +, - 붙여도 상관없음.
    alert('function');
}();

0,function(){
    alert('function');
}();

1&function(){
    alert('function');
}();

2*function(){
    alert('function');
}();
```

###<a href="#" name="callback">콜백 함수</a>
> 호출 함수 ->(호출) 라이브러리 함수 ->(콜백 호출) 콜백 함수  
		
```javascript
// 메인 함수
function Main(){
	var arg;
	LibrayFunction(arg, CallbackFunction);
}

// 콜백 함수
function CallbackFunction(result){
	
}

// 라이브러리 함수
function LibrayFunction(arg, callback){
	var data;
	callback(data)
}
```

**위의 코드를 익명 함수를 이용하여 표현할 수 있다**
		
```javascript
// 메인 함수
function Main(){
	var arg;
	LibrayFunction(arg, function(result){

	});
}

// 라이브러리 함수
function LibrayFunction(arg, callback){
	var data;
	callback(data);
}
```

###<a href="#" name="closer">클로저</a>
* 클로저를 사용하는 이유는 대부분 함수 상태를 기억하기 위해서이다.  
* jQuery와 같은 대형 라이브러리에서 흔히 채용되는 패턴이다.  
* 내부 함수에서 외부 함수의 변수에 접근할 수 있는 것을 클로저라고 한다.  
* 내부 함수가 외부 함수의 메모리를 참조하고 있기 때문에 가비지 컬렉터는 외부 함수 생명 주기가 다 되었음에도 메모리를 해제하지 않는다. 따라서 클로저에로 인한 메모리 누수가 생길 수 있다.  
		
```javascript
function out(){
	var x = 0;
	return function (){
		return ++x;
	}
}

var x = -1;
var f = out();
f();  // 1
f();  // 2
f();  // 3
f();  // 4
```

**Function으로 생성한 함수는 클로저를 만들지 못한다. 전역 영역에 생선된 것처럼 컴파일 되기 때문이다.**  
		
```javascript
var x = 'g';
function f(){
	var x = '1';
	return new Function('return x');
}
var global = f();
alert(global());  // g
```

####클로저 인스턴스
* 클로저를 호출하는 것은 `클로저 인스턴스를 생성`하는 것이다.
		
```javascript
function out(){
	var x = 0;
	return function (){
		return ++x;
	}
}

var f = out();  // out의 인스턴스 생성
f();  // 1
f();  // 2

var g = out();
g();  // 3
g();  // 4
```

###<a href="#" name="class_object">클래스 기반의 객체지향</a>
객체 : 세상의 모든 것은 객체로 객체지향 언어느는 이러한 객체를 표현할 수 있다.  
클래스 : 비슷한 객체끼리 그룹핑 한 것을 말한다.  

###<a href="#" name="object_constructor">객체 구성</a>  
* 자바스크립트 내장 객체(Built-in Object)  
	자바스크립트 엔진이 구동되는 시점에 제공된다.  
	`Object`, `String`, `Number`, `Boolean`, `Date`, `Array`, `Math` 등 내장 객체들이 많다.  
* 브라우저 내장 객체(Native Object)  
	브라우저 자바스크립트 엔진을 구동하는 곳에서 제공하는 객체이다.  
	`브라우저객체모델(BOM)`, `문서객체모델(DOM)`이 있다.  
	* 문서 객체 모델(DOM - Document Object Model)  
		HTML과 XML 문서를 조작하고 나타내는 문서이다.  
		노드(부모, 자식, 형제 등)별로 계층을 이루고 있다.  
	* 브라우저 객체 모델(BOM - Browser Object Model)  
		브라우저에서 제공하는 객체의 집합이다.  
		window. location, navigator, history, screen, docuemnt 등이 있다.  
* 사용자 정의 객체(Host Object)  
	사용자가 객체를 정의하고 확장시킨 객체이다.  

> 모든 객체는 내장 객체의 최상위 레벨인 Object 객체에서 파생된 것이다.  

###<a href="#" name="create_object">객체 생성하기</a>  
* constructor 이용 - 동일한 구성을 가진 여러 객체 생성 가능  
		
```javascript
// new와 Object 생성자 이용
new Object();

// 객체 리터럴 이용
{};

// new와 사용자 정의 생성자 이용
new Person();

var oObject = new function();
oObject.name = 'smilesol';
oObject['name'] = 'smilesol';

// new 선언시 일어나는 일들
// 첫번째
var oObject = {};

// 두번째
oObject.__proto__ = function.prototype;

// 세번째
function.call(oObject);
```  

* 객체 리터럴 이용 - 단일 객체로만 활용  
		
```javascript
var oObject = {
	name : 'smilesol'
};
```

**객체의 속성을 삭제하고자 할 때 `delete` 연산자를 사용한다.**  
		
```javascript
var oObject = new object();
oObject.name = 'sol';
delete oObject.name;
```

###<a href="#" name="member_object">객체 멤버 관리</a>  

####hasOwnProperty 메서드  
Object 객체에 멤버가 있는지 확인할 수 있다.  
단, toString과 같이 원래 멤버에 대해서는 작동하지 않는다.  
		
```javascript
var food = {
	apple : 5
};
hasProperty = food.hasOwnProperty('apple');  // true
hasProperty2 = food.hasOwnProperty('toString');  // false
```

###in 연산자  
Object 객체에 멤버가 있는지 확인할 수 있다.  
단, toString과 같이 원래 멤버에 대해서는 작동한다.  
		
```javascript
var food = {
	banana : 10
}

'banana' in food;  // true
// 숫자는 인덱스로 판단하여 인덱스에 해당 요소를 검사한다.
0 in food;  // true
1 in food;  // false
'toString' in food;  // true
```

####비공개 멤버
		
```javascript
function f(){
	// 비공개 속성
	var nNum = 0;

	// 비공개 메소드
	function getProfile(){}
}
```

####인스턴스 멤버
		
```javascript
function f(name, age){
	// 인스턴스 속성
	this.name = name;
	this.age = age;

	// 인스턴스 메소드
	this.profile = function(){
		return this.name + this.age;
	};
}

var F = new f('sol', '30');

// F.name = 'smilesol85';
// F.age = '29';
F.profile();
```

####프로토타입 멤버
		
```javascript
function f(a, b){
	this.a = 10;
	this.b = 20;
}

f.prototype = {
	// 프로토타입 속성
	c : 40,

	// 프로토타입 멤버
	sum : function(){
		return this.c;
	},

	sum2 : function(){
		return this.a + this.b;
	}
};

f.prototype.c;  // 40
f.prototype.sum();  // 40

var sum = new f();

sum.sum2();  // 30

// 프로토타입 체인 끊기
A.prototype = null;
```

####생성자 멤버  
		
```javascript
function f(){
		
}

f.a = 10;
f.c = function(){};
```

##<a href="#" name="inheritance">상속</a>  
		
```javascript
function human(name, age){
	this.name = name;
	this.age = age;
}

human.prototype.speak = function(contents){
	console.log(this.name + ': ' + contents);
}

player.prototype = new human();
function player(name, age, salary, record){
	human.call(this, name, age);

	this.salary = salary;
	this.record = record;
}

player.prototype.run = function(){
	console.log(this.name + ': run!');
}

var sol = new player('Sol', 30, 999999999999, {win:6, lose:3});
sol.speak('YEAH~~');  // Sol: YEAH~~
sol.run();

var boy = new human('boy', 33);
boy.run();  // Syntax Error

console.log(boy.__proto__);
console.log(sol.__proto__);
```

##<a href="#" name="event">이벤트</a>  

###이벤트 핸들러 등록 방법
		
* html에 직접 작성  
* 간단하지만 화면을 구성하는 마크업과 분리되지 않아 권장하지 않는다.  
		
```javascript
/*
<div onclick="f();">클릭!</div>
*/
```

* 프로퍼티 지정을 통해 작성  
* 다른 곳에서 등록한 이벤트 핸들러를 덮어 쓸 수 있기 때문에 잘 사용하지 않는다.  
		
```javascript	
/*
<div id="event">클릭!</div>
*/
$('.event').onclick = function(){};
```

* 이벤트 핸들러를 목록에 추가하고 제거하는 방법  
* 여러가지 이벤트를 등록할 수 있어 가장 많이 사용된다.  
		
```javascript
/*
<div id="event">클릭!</div>
*/

$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
```

###이벤트
		
	<body onload="console.log('one');">
		<script>
			window.onload = function(){
				console.log('two');
			};

			window.addEventListener('load',functiob(){
				console.log('three');
			});
		</script>
	</body>

	<!-- one은 출력되지 않는다. window.onload 가 덮어쓰기 때문이다. 덮어쓰지 않도록 하기 위해서는 addEventListener를 이용하면 된다.  
	two
	three
	-->
