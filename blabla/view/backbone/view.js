var User = Backbone.Model.extend({

});

var user = new User({
	username: 'testName',
	displayName: 'displayName',
	bio: 'bio'
});

var UserView = Backbone.View.extend({
	el: '#user-card',

	initialize: function() {
		this.render();
	},

	render: function() {
		var $card = $('<a href="/users/' + this.model.get('username') + '">');
		var $name = $('<h1>' + this.model.get('displayName') + '</h1>').appendTo($card);
		var $bio = $('<p>' + this.model.get('bio') + '</p>').appendTo('$card');
		this.$el.html($card);
		return this;
	}
});

var userView = new UserView({
	model: user
});
