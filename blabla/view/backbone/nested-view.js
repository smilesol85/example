var Band = {};

Band.Member = Backbone.Model.extend({});

Band.Members = Backbone.Collection.extend({
	model: Band.Member
});

var band = new Band.Members([
	{name: 'a'},
	{name: 'b'},
	{name: 'c'},
	{name: 'd'}
]);

Band.Member.View = Backbone.View.extend({
	tagName: 'li',

	render: function() {
		this.$el.text(this.model.get('name'));

		this.parentView.$el.append(this.$el);

		return this;
	}
});

Band.Members.View = Backbone.View.extend({
	el: '#band-wrapper',

	initialize: function() {
		_.bindAll(this, 'render');

		this.collection.on('change', this.render);
		this.collection.on('add', this.render);
		this.collection.on('remove', this.render);

		this.render();
	},

	render: function() {
		this.$el.empty();

		var thisView = this;

		this.collection.each(function(bandMember) {
			var bandMemberView = new Band.Member.View({
				model: bandMember
			});

			bandMemberView.parentView = thisView;

			bandMemberView.render();
		});

		return this;
	}
});

var bandView = new Band.Members.View({
	collection: band
});
