#php  
1. [개요](#php)  
1. [기본문법](#basic)  
1. [숫자와 문자](#number-string)  
1. [연산자](#operator)  
1. [변수와 상수](#variable)  
1. [데이터 형 검사 및 변경](#data-type)

##<a href="#" name="php">개요</a>  
서버 사이드 언어이다.  
대부분의 데이터베이스를 지한다.  
[공식 홈페이지](http://php.net/)  
[국내 커뮤니티](http://phpschool.com/)  

##<a href="#" name="basic">기본문법</a>  
		
	<?  // bad
	echo “hello world”;
	?>

	<?php  // good
	echo “hello world”;
	?>

	<?php
	// 한줄 주석
	
	/*
	다중 주석
	*/

	// 명령어는 세미 콜론으로 끝난다.
	echo "hi";

	// '$'' 심볼은 모든 변수 앞에 붙는다.
	$num = 1;

	// 변수 네이밍 규칙
	/*
	- 변수의 시작은 알파벳이나 밑줄(_) 로 시작
	- 변수의 이름에는 알파벳과 숫자, 밑줄만 사용 가능
	- 변수 이름에는 공백 포함 불가능
	- 대소문자 구분
	*/
	?>

##<a href="#" name="number-string">숫자와 문자</a>  
		
	<?php
	// is_numeric() 함수는 숫자인지 구별한다.
	$nNum = is_numeric('asd');
	if($nNum){
		echo "number";
	}else{
		echo "string";
	}

	echo 3 + 1;  // 4
	
	echo 3 * 1;  // 3
	
	echo 4 / 2;  // 2
	
	echo var_dump(6);  // int(6)
	
	echo var_dump(6.1);  // float(6.1)
	
	echo var_dump(1234);  // int(1234)
	
	echo var_dump('1234');  // string(4) "1234"
	
	echo 'hello'.'world';  // helloworld => 문자를 결합할 경우 '+' 가 아닌 '.'을 사용한다.
	
	echo "가나다\"라마바\"";  // 쌍따옴표 내에서 쌍따옴표 사용하기 (역슬래시)
	
	echo '가나다\'라마바\'';  // 따옴표 내에서 따옴표 사용하기 (역슬래시)
	?>

##<a href="#" name="operator">연산자</a>  
		
	echo 6+2;  // 8

	$count = 1;
	$count += 1;  // 2

	$a = 1;
	$b = 2;
	$c = 3;
	if($a > $b){}
	if($a > $b && $a > $c){}

	$j = 15;
	$j += 15;  // $j = $j + 15
	$j -= 15;  // $j = $j - 15
	$j *= 15;  // $j = $j * 15
	$j /= 15;  // $j = $j / 15
	$j %= 15;  // $j = $j % 15
	$j .= $k;  // $j = $j.$k

논리 연산자 중 xor 연산자는 조금 특이하다.  
두 개 중 하나의 값이 참이면 TRUE, 두 값 모두 참이거나 거짓이면 FALSE를 반환한다.  
		
	$a = '1';
	$c = $a xor $b;
	echo $c;  // 1

##<a href="#" name="variable">변수와 상수</a>  
변수는 항상 변할 수 있는 값이며,  
상수는 변하지 않는 값이다.  
		
	$a = 'Hello';
	$b = 'World';
	echo $a.$b;  // Hello World

	$c = 'abc'\d';
	echo $c;  // adc'd

	// 상수를 정의할 때는 define을 사용한다.
	define('title', 'value');
	echo title;  // value
	define('title', 'abcde');
	echo title;  // 오류 문구

	// 가변 변수
	$title = 'title2';
	$$title = 'php';
	echo $title2;  // php
 
##<a href="#" name="data-type">데이터 형 검사 및 변경</a>  
		
	$a = 10;
	echo gettype($a);  // integer

	settype($a, 'double');
	echo gettype($a);  // double

##