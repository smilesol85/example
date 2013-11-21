#객체
1. [객체 구성](#object_constructor)  
1. [객체 생성하기](#create_object)  
1. [프로토타입 기반 프로그래밍](#prototype_based_programming)  
1. [자바스크립트의 프로토타입](#prototype_of_javascript)

> Number, String, Boolean, null, undefined를 제외한 나머지 값들은 모두 객체이다.  

##<a href="#" name="object_constructor">객체 구성</a>  
* 자바스크립트 내장 객체(Built-in Object)  
	자바스크립트 엔진이 구동되는 시점에 제공된다.  
	`Object`, `String`, `Number`, `Boolean`, `Date`, `Array`, `Math` 등 내장 객체들이 많다.  
* 브라우저 내장 객체(Native Object)  
	브라우저 자바스크립트 엔진을 구동하는 곳에서 제공하는 객체이다.  
	`브라우저객체모델(BOM)`, `문서객체모델(DOM)`이 있다.  
* 사용자 정의 객체(Host Object)  
	사용자가 객체를 정의하고 확장시킨 객체이다.  

> 모든 객체는 내장 객체의 최상위 레벨인 Object 객체에서 파생된 것이다.  

##<a href="#" name="create_object">객체 생성하기</a>  
* constructor 이용 - 동일한 구성을 가진 여러 객체 생성 가능  
		
```javascript
var oObject = new function();
oObject.name = 'smilesol';
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

##<a href="#" name="prototype_based_programming">프로토타입 기반 프로그래밍</a>  

> 객체의 원형인 프로토타입을 이용하여 새로운 객체를 만드는 프로그래밍 기법이다.  
> 새로 생성된 객체도 자신의 프로토타입을 가지고 있다.  
> 또 다른 객체를 새롭게 만들어 낼 수 있으며, 이렇게 확장하는 방식을 프로토타입 기반 프로그래밍이라고 한다.  

##<a href="#" name="prototype_of_javascript">자바스크립트의 프로토타입</a>  

* 객체가 생성되면 그 객체의 모태를 프로토타입이라고 한다.  
* 프로토타입으로 생성된 객체를 변경하더라도 객체의 프로토타입에는 영향을 주지 않는다.  
* 객체의 속성 값을 찾고자 할 때 속성이 없는 경우 프로토타입 체인을 따라 올라가 프로토타입 객체에서 찾으려고 한다.  
	프로토타입 체인을 계속 따라 올라가도 속성이 존재하지 않는다면 `undefined`를 반환한다.  