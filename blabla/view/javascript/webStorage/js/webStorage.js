var webStorage = webStorage || {};

webStorage = function(){
	this.init();
};

webStorage.prototype = {
	init : function(){
		this.elements();
		this.storages();
		this.availables();
		this._setEvent();
	},

	elements: function() {
		this.available = $('.resultAvailable');
		this.nLocalCount = $('.nLocalCount');
		this.nSessionCount = $('.nSessionCount');
		this.btnCountLocal = $('.countLocal');
		this.btnCountSession = $('.countSession');
	},

	storages: function() {
//		localStorage.nLocal = '';
//		sessionStorage.nSession = '';
	},

	result: function(available) {
		if(available.length) {
			this.available.html(available);
		} else {
			this.available.html('??');
		}
	},

	availables: function() {
		var availables = '';
		if(typeof(Storage) !== 'undefined') {
			availables = 'ok. available';
		} else {
			availables = 'oh, no...';
		}

		this.result(availables);
	},

	countLocal: function() {
		if(localStorage.nLocal) {
			localStorage.nLocal = Number(localStorage.nLocal) + 1;
		} else {
			localStorage.nLocal = 1;
		}

		this.nLocalCount.html(localStorage.nLocal);
	},

	countSession: function() {
		if(sessionStorage.nSession) {
			sessionStorage.nSession = Number(sessionStorage.nSession) + 1;
		} else {
			sessionStorage.nSession = 1;
		}

		this.nSessionCount.html(sessionStorage.nSession);
	},

	_setEvent: function() {
		this.btnCountLocal.on('click', $.proxy(this.countLocal, this));
		this.btnCountSession.on('click', $.proxy(this.countSession, this));
	}
};

var oWebStorage = new webStorage();
