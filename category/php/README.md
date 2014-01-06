#php  
1. [개요](#php)  
1. [기본문법](#basic)  

##<a href="#" name="php">개요</a>  
서버 사이드 언어이다.  
대부분의 데이터베이스를 지한다.  
[공식 홈페이지](http://php.net/)  
[국내 커뮤니티](http://phpschool.com/)  

##<a href="#" name="basic">기본문법</a>  
		
	<html>
	<head>
	<title>php</title>
	</head>
	<body>

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

	// 명령어는 세미 콜론으로 끝낸다.
	echo "hi";

	// $ 심볼은 모든 변수 앞에 붙는다.
	$num = 1;

	// 변수 네이밍 규칙
	/*
	- 변수의 시작은 알파벳이나 밑줄(_) 로 시작
	- 변수의 이름에는 알파벳과 숫자, 밑줄만 사용 가능
	- 변수 이름에는 공백 포함 불가능
	- 대소문자 구분
	*/
	?>

	</body>
	</html>

