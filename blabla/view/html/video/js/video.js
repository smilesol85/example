var viewVideo = viewVideo || {};

viewVideo = function(){
	this.init();
};

viewVideo.prototype = {
	init : function(){
		this.elements();
		this.setEvents();
	},

	elements: function() {
		this.video = document.getElementById('view-video');
		this.seekBar = $('#btn-seekBar');
		this.btnPlay = $('#btn-play');
		this.btnPause = $('#btn-pause');
	},

	togglePlay: function() {
		this.video.play();

		this.btnPlay.hide();
		this.btnPause.show();
	},

	togglePause: function() {
		this.video.pause();

		this.btnPlay.show();
		this.btnPause.hide();
	},

	setEvents: function() {
		var oThis = this;
		this.btnPlay.on('click', $.proxy(this.togglePlay, this));
		this.btnPause.on('click', $.proxy(this.togglePause, this));
	}
};

var oViewVideo = new viewVideo();
