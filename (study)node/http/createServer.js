// #NOTE 1
// 모듈 추출
//var http = require('http');

// 웹 서버 생성
//var server = http.createServer();

// 웹 서버 실행
//server.listen(52273);


// #NOTE 2
// 서버 생성
//var server = require('http').createServer();

// 서버 실행
//server.listen(52273, function(){
//	console.log('Server Running at http://127.0.0.1:52273');
//});

// 10초 후 함수를 실행
//setInterval(function(){
//	// 서버 종료
//	server.close();
//}, 10000);


// #NOTE 3
// 모듈 추출
var http = require('http');

// server 객체 생성
var server = http.createServer();

// server 객체에 이벤트 연결
server.on('request', function(){
	console.log('Request on');
});
server.on('connection', function(){
	console.log('Connection on');
});
server.on('close', function(){
	console.log('Close on');
});

// listen() 메서드 실행
server.listen(52273);