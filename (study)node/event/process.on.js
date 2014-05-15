// 이벤트를 연결
// 10개가 넘는 이벤트는 개발자 실수로 간주한다.
// 이벤트 개수를 정의할 수 있다.
// process.setMaxListeners(15);
process.on('exit', function () {
    console.log('안녕히 가거라 ^_^ .. !');
});

// 이벤트를 연결
// uncaughtException는 예외가 발생했을 때 실행되는 이벤트
process.on('uncaughtException', function (error) {
    console.log('예외가 발생했군 ^_^ 봐주겠다 ^_^ .. !');
});

// 2초 간격으로 3번 예외를 발생
var count = 0;
var id = setInterval(function () {
    // 횟수를 증가시킵니다.
    count++;

    // 3번 실행하면 타이머를 중지
    if (count == 3) { clearInterval(id); }

    // 예외를 강제로 발생
    error.error.error();
}, 2000);
