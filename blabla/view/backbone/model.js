var Fruit = Backbone.Model.extend({
	// 이 콜백은 모델의 인스턴스를 생성할 때마다 호출한다.
	initialize: function() {
		console.log('initialized');

		// condition 속성 변경 추적
		this.on('change:condition', function() {
			console.log('changed condition');
		});
	},

	descripttion: function() {
		return this.get('color') + ', ' + this.get('condition') + ' ' + this.get('type');
	},

	defaults: {
		color: 'red'
	},

	// 유효성 검사
	validate: function(options) {
		if(options.quantity && !_.isNumber(options.quantity)) {
			return 'not a number!';
		}
	}
});

var apple = new Fruit({
	type: 'apple',
	condition: 'shiny'
});

apple.set({
	quantity: 'aaa'
});

console.log(apple.descripttion());

// 오류 이벤트 추가, 유효성 검사 실패시 호출
apple.on('error', function(model, error) {
	console.log(error);
});
