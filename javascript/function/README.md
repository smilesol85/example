# 함수
1. [함수 정의](#function)  
1. [함수 리터럴 이용](#function_literal)  
1. [Function 생성자 사용](#new_function)  
1. [Function](#Function)

---
---
---

* 자바스크립트에서 함수는 객체이다.  
* 변수에 할당될 수 있고, 다른 함수의 인자로 전달 되거나 함수의 결과로써 반환될 수도 있는 일급 객체(first-class object)로서의 특징을 가지고 있다.  
* 함수를 정의하면 모든 함수에는 프로토타입 객체라는 것이 함께 정의된다.  

## <a href="#" name="function">함수 정의</a>
* 함수를 정의하는 것만으로 함수 객체가 생성된다.  
* 일반 객체와 다르게 `실행 코드 블록`을 가지고 있다.  
* 일반 객체와 같이 동적으로 멤버를 가질 수 있다.
* 파싱 단계에서는 함수명인 add가 정의된다.  
* 함수를 호출하면 런타임에 함수 내부가 실행된다.  
		
```javascript
function f(){
	alert('function');
}
f.prop = 'property';
f.method = function(){};
```

### arguments
* 함수를 호출할 때 정희된 매개변수(parameter)의 개수와 함수로 넘겨주는 인자(argument)의 개수가 다른 경우가 있다.  
* 매개변수(oarameter) 개수보다 넘어온 인자(argument)의 개수가 적으면 차례로 값이 채워지고 나머지는 `undefined`가 된다.  
* arguments 타입의 객체는 함수가 호출되면 자바스크립에서 자동으로 생성하는 객체이다.  
* arguments 객체는 배열이 아니지만, 배열과 유사하다.  
		
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
### arguments.callee
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

## <a href="#" name="function_literal">함수 리터럴 이용</a>
* 인자로 전달  
* 변수에 할당  
* 다른 함수의 반환값으로 사용
		
```javascript
var f = function(x,y){
	return x + y;
};
```

## <a href="#" name="new_function">Function 생성자 사용</a>
* new와 함께 사용된다.  
* 다른 인스턴스를 생성할 수 있는 요소  
* 메모리 사용이 비효율 적이다.  
		
```javascript
var f = new Function('x','y','return x+y');
```

## <a href="#" name="Function">Function</a>
> Function 이라는 함수는 `함수 인스턴스(instance)`를 생성하는 함수이다.  


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