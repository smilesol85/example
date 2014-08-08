## 서버 원격 접속
	
	# ssh root@domain / #ssh root@ip

## bit
	
	# getconf LONG_BIT

## cat
cat은 concatenate (사슬로 잇다. 연결하다)의 의미가 있다.
이것은 파일의 내용을 화면에 출력하는데 사용되기도 하며
파일을 다른 곳에 순차적인 스트림으로 보내기 위해 사용된다.

[계정 확인]
	
	# cat /etc/passwd

[사용자 추가 확인]
	
	# cat /etc/passwd | grep 사용자명

## mysql
	
	# cd /usr/local/mysql
	# ./bin/mysqladmin -u root password ‘setting password’
	# mysql -u root -p ‘setting password’
	mysql> 
	mysql> show database;
	mysql> use mysql;
	mysql> select host, user, password from user;
	mysql> update user set password=password(“pwd”) where user = ‘root’;
	mysql> create database DBNAME;

## sudo permission
	
	# sudo chown -R $USER /usr/local