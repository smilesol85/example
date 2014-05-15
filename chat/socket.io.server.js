// 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹서버 생성
var server = http.createServer(function(request, response){
	//HTMLPage.html 파일 읽기
	 fs.readFile('HTMLPage.html', function(error, data){
	 	response.writeHead(200, {'Cpntent-Type': 'text/html'});
		response.end(data);
	 });
}).listen(52273);

// 소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.socket.on('connection', function(socket){

});