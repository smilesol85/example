## apm  
서버 세팅을 위해 apm(apach, php, mysql)은 꼭 필요하다.  
기본적으로 Mac 에서는 apach, php 모듈을 탑재하고 있다.  
(아래 내용은 Mac 기준)  

### apach  
브라우저 주소창에 localhost 라고 입력하게 되면 `It Works!` 라는 텍스트가 노출된다.  
apach가 실행중이라는 것을 알 수 있다.  
텍스트가 노출되지 않고 페이지를 찾지 못한다면, Terminal 에서 apach를 실행하라는 명령을 해줘야 한다.  
	
	# apachectl -k start

It Works! 텍스트는 아래의 경로로 이동하면 `index.html.en` 파일에 있는 것을 확인할 수 있다.  
	
	# cd /Library/WebServer/Documents

<a href="http://httpd.apache.org/docs/2.2/programs/apachectl.html">apach 웹서버 조절 인터페이스</a>  

### php  
이제 php가 동작할 수 있도록 `httpd.conf` 파일을 수정해야 한다.  
	
	# sudo vi /etc/apache2/httpd.conf

루트 권한으로 httpd.conf 파일을 편집하겠다는 명령이다.  
해당 파일에서 `#LoadModule php5_module libexec/apache2/libphp5.so` 라인을 찾은 후 주석(#)을 제거해 줘야 한다.  
`/` 을 누르면 검색이 가능하며, php5_module 을 검색하면 위의 라인을 검색할 수 있다.  
검색 후 `i` 를 누르면 insert 모드로 전환되며, 편집이 가능하여 주석을 제거할 수 있다.  
esc 를 누른 후 `:wq` 를 입력하게 되면 수정된 내용이 저장되고 빠져나올 수 있다.  
이제 apach 를 재구동 후 정상적으로 php를 사용할 수 있는 환경이 되었는지 확인해야 한다.  
	
	# sudo apachectl restart

아래와 같이 php 파일을 생성 후 해당 php 파일을 실행하게 되면 각종 정보들을 확인할 수 있는 페이지(http://localhost/phpinfo.php)를 볼 수 있다.  
> phpinfo.php
	
		<?php
			phpinfo(); 
		?>

### mysql  
이제 database 활용을 위해 mysql을 설치해야 한다.  
> <a href="http://www.mysql.com">download</a>  

download 후 dmg 파일을 실행하면 3가지 파일이 보인다.  
- mysql-5.5.16-osx10.6-x86_64.pkg (mysql 설치파일)  
- MySQLStartupItem.pkg (mysql 구동을 위한 파일)  
- MySQL.prefPane (시스템 환경에서 mysql을 구동, 정지를 쉽게 할 수 있는 파일)  

설치 파일로 설치 후 prefPane파일은 `/Library/PreferencePanes` 위치에 복사해 주면 된다.  
mysql 구동을 위해서 2가지 방법이 있다.  
첫번째,  
	
	# sudo /Library/StartupItems/MySQLCOM/MySQLCOM start

두번째는 시스템환경에서 mysql 항목 이용하면 된다.  

이제 apm 셋팅이 완료되었다.  