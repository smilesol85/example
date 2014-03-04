// 모듈 추출
var fs = require('fs');
var http = require('http');

// 52273번 포트 서버 생성 및 실행
http.createServer(function(request, response){
    // 이미지 파일 읽기
    fs.readFile('test.jpg', function(error, data){
        response.writeHead(200, {'Content-Type' : 'image/jpeg'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

// 52274번 포트 서버 생성 및 실행
http.createServer(function(request, response){
    // 음악 파일 읽기
    fs.readFile('test.mp3', function(error, data){
        response.writeHead(200, {'Content-Type' : 'audio/mp3'});
        response.end(data);
    });
}).listen(52274, function(){
    console.log('Server Running at http://127.0.0.1:52274');
});