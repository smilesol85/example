// 이벤트 생성
// Node.js에서 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다.
// process 객체도 EventEmitter 객체의 상속을 받기 때문에 이벤트를 연결할 수 있는 것이다. 
var custom = new process.EventEmitter();

custom.on('tick', function(){
    console.log('이벤트를 실행합니다.');
});

custom.emit('tick');