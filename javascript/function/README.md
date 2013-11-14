# 함수
1. [함수?](#function)

## <a href="#" name="function">함수?</a>
* 자바스크립트에서 함수는 객체이다.  
* 변수에 할당될 수 있고, 다른 함수의 인자로 전달 되거나 함수의 결과로써 반환될 수도 있는 일급 객체(first-class object)로서의 특징을 가지고 있다.  
* 함수를 정의하면 모든 함수에는 프로토타입 객체라는 것이 함께 정의된다.  

### 함수 정의
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

### 함수 리터럴 이용
* 인자로 전달  
* 변수에 할당  
* 다른 함수의 반환값으로 사용
		
```javascript
var f = function(x,y){
	return x + y;
};
```

### Function 생성자 사용
* new와 함께 사용된다.  
* 다른 인스턴스를 생성할 수 있는 요소  
* 메모리 사용이 비효율 적이다.  
		
```javascript
var f = new Function('x','y','return x+y');
```