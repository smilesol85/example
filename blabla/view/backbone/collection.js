var Fruit = Backbone.Model.extend({});

// collection 은 model 기반이다.
var Fruits = Backbone.Collection.extend({
	model: Fruit,

	initialize: function() {
		this.on('add', function() {
			console.log('add');
		});

		this.on('remove', function() {
			console.log('remove');
		});
	}
});

// collection 인스턴스 생성
var fruitbowl = new Fruits({
	type: 'apple',
	color: 'red'
});

// collection 또 다른 모델 추가
fruitbowl.add({
	type: 'banana',
	color: 'yellow'
});
