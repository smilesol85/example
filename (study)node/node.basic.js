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

// 현재 운영체제 또는 프로그램과 관련된 정보를 표시하는 속성과 메서드
console.log('- process.env: ', process.env);
console.log('- process.version: ', process.version);
console.log('- process.versions: ', process.versions);
console.log('- process.arch: ', process.arch);
console.log('- process.platform: ', process.platform);

console.log('- process.memoryUsage(): ', process.memoryUsage());
console.log('- process.uptime(): ', process.uptime());