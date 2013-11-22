#함수
1. [함수 정의](#function)  
1. [함수의 prototype](#prototype)  
1. [함수 리터럴 이용](#function_literal)  
1. [Function 생성자 사용](#new_function)  
1. [Function](#Function)  
1. [자기 호출 함수](#self-invoking)  
1. [콜백 함수](#callback)  
1. [클로저](#closer)

---
---
---

* 자바스크립트에서 함수는 객체이다.  
* 변수에 할당될 수 있고, 다른 함수의 인자로 전달 되거나 함수의 결과로써 반환될 수도 있는 `일급 객체(first-class object)`로서의 특징을 가지고 있다.  
* 함수를 정의하면 모든 함수에는 프로토타입 객체라는 것이 함께 정의된다.  

**일급 객체란?**  
* 변수나 데이터 구조안에 담을 수 있다.  
* 파라미터로 전달 할 수 있다.  
* 반환값이 될 수 있다.  
* 할당에 사용된 변수명과 과계없이 고유한 구별이 가능하다.  
* 비동기적인 처리 등의 구현이 간편하다.  

##<a href="#" name="function">함수 정의</a>
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

###arguments
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
###arguments.callee
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

##<a href="#" name="prototype">prototype</a>
* 모든 함수는 prototype 속성을 갖는다.  
* 프로토타입 연결은 값의 갱신에 영향을 받지 않는다. 즉, 객체를 변경하더라도 객체의 프로토타입에는 영향을 미치지 않는다.  
* 함수는 new 연산자와 함께 쓰이면 생성자가 된다.  
* 생성중인 인스턴스 객체에 생성자 함수의 prototype이 참조된다.  
* 모든 객체는 속성을 참조할 때 해당 객체에서 우선 검색하고, 존재하지 않는다면 참조하고 있는 prototype에서 찾는다.  

##<a href="#" name="function_literal">함수 리터럴 이용</a>
* 인자로 전달 가능  
* 변수에 할당  
* 다른 함수의 반환값으로 사용
		
```javascript
var f = function(x,y){
	return x + y;
};
```

##<a href="#" name="new_function">Function 생성자 사용</a>
* new와 함께 사용된다.  
* 다른 인스턴스를 생성할 수 있는 요소  
* `메모리 사용이 비효율적`이다.  
		
```javascript
var f = new Function('x','y','return x+y');
```

##<a href="#" name="Function">Function</a>
* Function 이라는 함수는 `함수 인스턴스(instance)`를 생성하는 함수이다.  
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

##<a href="#" name="self-invoking">자기 호출 함수</a>
		
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

##<a href="#" name="callback">콜백 함수</a>
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

##<a href="#" name="closer">클로저</a>
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

###클로저 인스턴스
* 클로저를 호출하는 것은 `클로저 인스턴스를 생성`하는 것이다.
		
```javascript
var f = out();  // out의 인스턴스 생성
f();  // 1
f();  // 2

var g = out();
g();  // 3
g();  // 4
```