// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // EJSPage.ejs 파일을 읽습니다.
    fs.readFile('EJSPage.ejs', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
		// EJS 페이지를 HTML 페이지로 변환할 때는 render() 메서드를 사용
        response.end(ejs.render(data, {
			name: 'test',
			description: 'description test'
		}));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
