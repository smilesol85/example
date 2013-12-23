#appendix

1. [인터넷](#internet)  
1. [웹](#web)  
1. [DTD - Document Type Definition](#dtd)  
1. [객체 지향 프로그래밍](#OOP)  
1. [타입 캐스팅](#type-casting)  
1. [테스트 주도 개발(TDD, Test Driven Development)](#tdd)  
1. [MVC](#mvc)  
1. [web MVC](#web_mvc)  
1. [MVP](#mvp)  
1. [MVVM](#mvvm)  

##<a href="#" name="internet">인터넷</a>  
인터넷 : 전 세계의 컴퓨터가 연결되어 정보를 주고 받는 컴퓨터 네트워크이다.  

##<a href="#" name="web">웹</a>  
웹 : World Wid Web의 약자로 1991년에 처음 등장했다.  
	인터넷 위에서 서비스되며 정보를 주고 받는 공간이다.  

##<a href="#" name="dtd">DTD - Document Type Definition</a>  
* HTML 3.2  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">  
* HTML 4.01  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">  
* HTML 4.01 Transitional  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd">  
* HTML 4.01 Frameset  
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"    "http://www.w3.org/TR/html4/frameset.dtd">  
* HTML 1.0 Strict  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  
* XHTML 1.0 Transitional  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
* XHTML 1.0 Frameset  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">  
* XHTML 1.1  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">  
* XHTML Basic 1.0  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN"  "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd">  
* XHTML Basic 1.1  
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN">  
* HTML5  
	<!DOCTYPE html>  

##<a href="#" name="OOP">객체 지향 프로그래밍</a>  
# 사물 추상화(Abstraction)  
# 캡슐화(Encapsulation)  
# 계층구조는 상속(Inheritance)  
# 부모와 다른 자식들의 특성 및 행위는 다양성(Polymorphism)  

> 캡슐화, 다양성, 상속을 이용하여 코드 재사용을 높이고, 유지보수를 줄이는 장점을 얻기 위해  
	객체들을 연결하여 프로그래밍 하는 것이다.  

##<a href="#" name="type-casting">타입 캐스팅</a>  
타입 캐스팅이란 특정 데이터타입을 다른 데이터타입으로 변환하는 것이다.  

##<a href="#" name="tdd">테스트 주도 개발(TDD, Test Driven Development)</a>  
문제를 정의(사용자 중심의 스펙)하고 해답을 찾아가는 과정이다.  

##<a href="#" name="mvc">MVC</a>  
Model(data), View, Controller  
* Model : 데이터 구조를 표현한다. 데이터를 추출, 입력, 갱신 등의 일을 한다.  
* View : 사용자에게 보여질 부분을 표현한다.  
* Controller : Model과 View 중간에서 동작을 수행한다.  

##<a href="#" name="web_mvc">web MVC</a>  
* spring (java)  
* codeigniter (php)  

> input -> C / C -> V / C -> M / M -> V

##<a href="#" name="mvp">MVP</a>  
Mpdel, View, Presenter  

> input -> V -> P -> M -> P -> V -> P  

##<a href="#" name="mvvm">MVVM</a>  

> input -> V -> VM -> M -> VM  

