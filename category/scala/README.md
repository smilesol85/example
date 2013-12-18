#scala  

> `쉽게 배워서 빨리 써먹는 스칼라 프로그래밍` 스터디 하면서 정리한 문서입니다.  

##특징  
객체 지향 프로그래밍 언어와 함수형 프로그래밍이 결합된 프로그램 언어이다.  
스칼라의 특징은 적은 코드로 방대한 규모의 시스템을 작성할 수 있다는 것이다.  
루비와 파이썬과 같은 스크립트 언어의 장점을 사용할 수 있으며, 자바와 연동이 가능하다.  
JVM에서 동작하며 스칼라 인터프리터를 사용할 수 있다.  

스칼라의 스크립트를 컴파일하면 자바와 같이 `.class 바이너리 코드`를 만들어 낸다.  
따라서 자바에서도 스칼라로 만들어진 객체를 그대로 사용 가능하다.  
`자바의 코드와 기술을 모두 재사용할 수 있다고 한다.`  

##스칼라 path  
	
	$ vi .profile
	$ export SCALA_HOME=/User/user/scala-2.10.3
	$ export PATH=$SCALA_HOME/bin:$PATH
	$ :wq
	$ source .profile
	$ scala
	scala> println("Hello World")
	scala> :quit

