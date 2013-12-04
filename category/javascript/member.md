#멤버 관리

1. [비공개 멤버](#private)  
1. [인스턴스 멤버](#instance)  
1. [프로토타입 멤버](#prototype)  
1. [생성자 멤버](#constructor)  

##<a href="#" name="private">비공개 멤버</a>
		
```javascript
function f(){
	// 비공개 속성
	var nNum = 0;

	// 비공개 메소드
	function getProfile(){}
}
```

##<a href="#" name="instance">인스턴스 멤버</a>
		
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

##<a href="#" name="prototype">프로토타입 멤버</a>
		
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
```

##<a href="#" name="constructor">생성자 멤버</a>
		
```javascript
function f(){
		
}

f.a = 10;
f.c = function(){};
```