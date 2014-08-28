var a = 1;
var b = 2;

module('group a');
test("테스트 중입니다.", function(){
	strictEqual(1, a, "Passed!");
});

module('group b');
test("테스트 중이지요!", function(){
	strictEqual(1, b, "Passed!");
});
