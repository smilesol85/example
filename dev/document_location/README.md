#document location
**[github.io](http://smilesol85.github.io/dev/document_location/document_location.html "document location")**
		
```javascript
// 문서의 전체 url 주소
document.write(document.location.href+'<br>');

/* page 이동
.href 와 .repalce()는 모두 location의 하위객채로 브라우저에서 URL이동때 쓰인다.
.href 는 프로퍼티고, .replace()는 메소드다.

document.location.href = 'http://www.naver.com';  // 값을 정의해야 하는 프로퍼티
document.location.replace('http://www.naver.com');  // 파라미터로 동작을 명령하는 메소드
*/

// 문서의 url 주소 중 host 이름과 포트 번호
document.write(document.location.host+'<br>');

// 문서의 url 주소 중 host 이름
document.write(document.location.hostname+'<br>');

// 프로토콜의 종류
document.write(document.location.protocol+'<br>');

// 호스트에서 문서가 있는 경로
document.write(document.location.pathname+'<br>');

// 문서의 포트 번호
document.write(document.location.port+'<br>');

// 문서의 표식 이름
document.write(document.location.hash+'<br>');

/* 새로고침
history.go(0);   // 캐시에서 먼저 찾음
document.location.reload();   // 캐시에서 먼저 검색 후 없을 경우 서버에 재호출
document.location.reload(true);   // 서버에서 무조건 재호출
*/
```