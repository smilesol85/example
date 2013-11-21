# 상속  
		
```javascript
function human(name, age){
	this.name = name;
	this.age = age;
}

human.prototype.speak = function(contents){
	console.log(this.name + ': ' + contents);
}

player.prototype = new human();
function player(name, age, salary, record){
	human.call(this, name, age);

	this.salary = salary;
	this.record = record;
}

player.prototype.run = function(){
	console.log(this.name + ': run!');
}

var sol = new player('Sol', 30, 999999999999, {win:6, lose:3});
sol.speak('YEAH~~');  // Sol: YEAH~~
sol.run();

var boy = new human('boy', 33);
boy.run();  // Syntax Error

console.log(boy.__proto__);
console.log(sol.__proto__);
```