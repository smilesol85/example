// name space
var spinbox = spinbox || {};

// spinbox class
spinbox = function(){
	// this.init.apply(this, arguments);
	this.init();
};

spinbox.prototype = {
	nDefault : 200,
	nMax : 300,
	nMin : 100,
	nDelaySpin : 500,

	init : function(options){
		// this.nSpin = options.nSpin || null;
		
		this.nSpin = null;
		this.elInterval = null;
		this.sGetValue = null;
		this.regInput = null;

		this._setElement();
		this._setNumber();
		this._setEvent();
	},

	_setElement : function(){
		this.elSpin = $('.number_spin');
		this.elUp = $('.btn_up');
		this.elDown = $('.btn_down');
	},

	_setNumber : function(){
		this.elSpin.attr('value', this.nDefault);
	},

	_blur : function(){
		this.sGetValue = this.elSpin.val();
		this._regGetNum(this.sGetValue);
	},

	_regGetNum : function(getValue){
		this.regValue = /[^0-9]/gi;
		this.nDefault = parseInt(getValue.replace(this.regValue,''), 10);
		this._counter();
	},

	_counter : function(){
		if(this.nMax === this.nDefault || this.nDefault > this.nMax){
			this.nDefault = this.nMax;
		}else if(this.nMin === this.nDefault || this.nDefault < this.nMin){
			this.nDefault = this.nMin;
		}else if(isNaN(this.nDefault) === true){
			this.nDefault = 200;
		}

		this.elSpin.attr('value', this.nDefault);
		this.elSpin.val(this.nDefault);
	},

	_setUp : function(){
		var oSelf = this;

		this._startSpin('up');
		this.elInterval = setInterval(function(){
			oSelf._startSpin('up');
		}, this.nDelaySpin);
	},

	_setDown : function(){
		var oSelf = this;

		this._startSpin('down');
		this.elInterval = setInterval(function(){
			oSelf._startSpin('down');
		}, this.nDelaySpin);
	},

	_startSpin : function(statusSpin){
		if(statusSpin == 'up'){
			this.nDefault++;
			this._counter();
		}else if(statusSpin == 'down'){
			this.nDefault--;
			this._counter();
		}
	},

	_stopSpin : function(){
		clearInterval(this.elInterval);
	},

	_setEvent : function(){
		this.elSpin.on('blur', $.proxy(this._blur, this));
		this.elUp.on('mousedown', $.proxy(this._setUp, this));
		this.elDown.on('mousedown', $.proxy(this._setDown, this));
		$(document).on('mouseup', $.proxy(this._stopSpin, this));
	}
};

$(document).ready(function(){
	var oSpinbox = new spinbox();
});