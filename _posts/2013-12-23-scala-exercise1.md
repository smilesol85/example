---
layout: post
title: scala 1장+연습문제 (쉽게 배워서 빨리 써먹는 스칼라 프로그래밍 스터디)
categories: [scala]
tags: [scala]
fullview: false
---

## 기본기  

### 스칼라 인터프리터  
	
	scala> 8 * 5 + 2
	res0: Int = 42

	scala> "hello, " + res0
	res1: String = hello, 42

	scala> res1.toUpperCase
	res2: String = HELLO, 42

보다시피 스칼라 인터프리터는 식을 읽어(read) 계산(evaluate)하고 출력(print)한 후 다음 식을 읽는다.  
이를 REPL(read-eval-print loop) 부른다.  
엄밀히 따지면 내부적으로 입력을 재빨리 바이트코드로 컴파일 후 바이트코드를 자바 가상 머신에서 실행하기 때문에 인터프리터가 아니다.  

## 값과 변수 선언하기  
res0, res1과 같은 이름을 사용하는 대신 이름을 직접 정의할 수 있다.  

	scala> val answer = 8 * 5 + 2
	answer: Int = 42

val로 선언된 값은 상수며, 내용을 변경할 수 없다.  
	
	scala> answer = 0
	<console>:6: error: ressignment to val

내용이 변할 수 있는 변수 선언을 위해서는 아래와 같이 한다.  
	
	scala> var counter = 0
	scala> counter = 1  // OK

`스칼라에서는 내용을 변경할 필요가 없으며 val 사용을 권장`한다.  

타입을 강제로 지정할 수 있으며, 자바스크립트와 같이 여러 값을 함께 선언할 수 있다.  

	scala> val greeting: String = null
	scala> val greeting: Any = "Hello"
	scala> val xmax, ymax = 100
	scala> var greeting, message: String = null

### 자주 사용되는 타입  
Byte(8비트 정수형), Short(16비트 정수형), Char(16비트 문자형), Int(32비트 정수형), Long, Float(32비트 부동소수점형), Double(64비트) 7개의 숫자 타입과 Boolean 타입을 가진다.  
이 타입들은 `클래스`다.  

### 산술과 연산자 오버로딩  
a + b는 a.+(b)와 동일하다.  
+는 메소드 이름이다.  
어느쪽이든 읽기 편한 방법으로 사용하면 된다.  

### 함수와 메소드 호출  
수학 함수 사용을 위해서는 import 할 수 있다.  

> import scala.math._ // import math._ 와 동일하다.  

## apply 메소드  
	
	scala> "hello"(4)  // 'o' 출력
	scala> "hello".apply(4)  // "hello"(4) 의 축약형이다.

### 스칼라독(scaladoc)  
자바에서 API를 열람하기 위해서는 자바독을 사용하듯,  
스칼라에서는 스칼라독을 사용한다.  

스칼라독 입문 팁  
[http://www.scala-lang.org/api/current/#package](http://www.scala-lang.org/api/current/#package)  

> BigInt, BigDecimal 클래스는 임의의 유한한 자리 숫자를 계산하기 위해 사용된다.  

### 연습문제  
1. 스칼라 REPL에서 3을 입력하고 탭 키를 눌러라. 어떤 메소드를 부를 수 있나?  
		
		scala> 3.
		%	&	*	+	-	/	>	>=	>>	>>>	^
		asInstanceOf	isInstanceOf	toByte	toChar	toDouble	toFloat	toInt
		toLong	toShort	toString	unary_+	unary_-	unary_~

2. 스칼라 REPL에서 3의 제곱근을 계산하고 그 값을 제곱하라.  
	결과가 3과 얼마나 차이가 나는가? (힌트: res 변수를 활용하라.)  
		
		scala> import scala.math._
		scala> sqrt(3)
		res0: Double = 1.7320508075688772
		scala> sqrt(res0)
		res1: Double = 1.3160740129524924
		scala> res1 - res0
		res2: Double = 0.4159767946163848

3. res 변수들은 val인가? var인가?  
	val이다. 값을 변경할 수 없다.  

4. 스칼라에서는 문자열을 숫자로 곱할 수 있다. "crazy" * 3 을 REPL에서 해보라.  
	이 연산은 무엇을 하나? 스칼라독 어디에서 이를 찾을 수 있나?  

		scala> "crazy" * 3
		res0: String = crazycrazycrazy

	[StringOps 에서 확인할 수 있다.](http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.StringOps)  

5. 10 max 2는 무엇을 의미하나? max 메소드는 어느 클래스에 정의되어 있나?  
	
		scala> 10 max 2
		res 0: Int = 10

	둘 중에 큰 값을 리턴한다.  
	[RichInt에 정의되어 있다.](http://www.scala-lang.org/api/current/#scala.runtime.RichInt)

6. BigInt를 사용하여 2^1024를 계산하라.  
	
		scala> BigInt(2).pow(1024)
		res0: scala.math.BigInt = ...

7. probablePrime과 Random에 아무런 식별자 없이 probablePrime(100, Random)으로  
	임의의 소수를 얻으려면 무엇을 임포트해야 하나?  

		scala> import scala.BigInt._
		scala> import scala.util.Random

	probablePrime 메소드는 지정된 비트로 BigInt를 반환한다?  

8. 임의의 파일 혹은 디렉토리  이름을 생성하는 방법 중 하나는 임의의 BigInt를 생성하고  
	이를 36진법으로 변환하여 "qsnvbevtomcj38o06kul" 같은 문자열을 얻는 것이다.  
	스칼라독을 뒤져 scala에서 이를 할 방법을 찾아라.  

		scala> BigInt.probablePrime(128, Random).toString(32)
		res 0: String = ...

9. 스칼라에서 문자열의 첫 문자를 어떻게 얻는가? 마지막 문자는 어떻게 얻는가?  
	
		scala> val str = "abcde"
		str: String = abcde
		scala> str(0)
		res 0: Char = a
		scala> str.last
		res 1: Char = e

10. 문자열 함수 take, drop, takeRight, dropRight는 무엇을 하나?  
	substring을 사용하는 것에 비해 장wja과 단점은 무엇인가?  

		scala> val str = "abcde"
		str: String = abcde
		scala> str.drop(1)
		res 0: bcde
		scala> str.dropRight(2)
		res 1: abc
		scala> str.substring(1,2)
		res 2: b

