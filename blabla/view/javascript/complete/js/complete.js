var complete = complete || {};

complete = function(){
	this.init();
};

complete.prototype = {
	init : function(){
		this.elements();
		this._setEvent();
	},
	elements: function() {
		this.elImg = document.getElementById('myImg');
		this.elBtn = $('button');
	},
	result: function() {
		if(this.elImg.complete) {
			console.log('true');
		} else {
			console.log('false');
		}
	},
	_setEvent: function() {
		this.elBtn.on('click', $.proxy(this.result, this));
	}
};

var oComplete = new complete();
