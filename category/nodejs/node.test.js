console.log('hello world');

console.log('filename : ', __filename);
console.log('dirname : ', __dirname);

console.log('숫자열 : %d', 273);
// 숫자를 차례대로 출력한다.
console.log('%d + %d = %d', 10, 20, 10 + 20);
console.log('%d + %d = %d', 10, 20, 10 + 20, 1111);
console.log('%d %d %d %d', 10, 20, 10 + 20);
console.log('문자열 : %s', 'hello', '문자');
console.log('JSON : %j', {name:'Hello'});

// 프로그램 실행 시간
console.time('checkTime');
var output = 1;
for(var i = 0; i <= 10; i++){
	output *= i;
}
console.log('Result : ', output);
console.timeEnd('checkTime');