// 변수를 선언
var onUncaughtException = function (error) {
    // 출력
    console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');

    // 특정 이벤트를 제거
    process.removeListener('uncaughtException', onUncaughtException);
	
	// 모든 이벤트 제거
	// process.removeAllListener([eventName]);
};

// 이벤트를 연결
process.on('uncaughtException', onUncaughtException);

// 2초마다 함수를 실행
setInterval(function () {
    // 예외를 발생
    error.error.error('^_^');
}, 2000);
