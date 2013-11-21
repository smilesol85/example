// name space
var spinbox = spinbox || {};

// spinbox class
spinbox.act = function(){
	// this.init.apply(this, arguments);
	this.init();
};

spinbox.act.prototype = {
	nDefault : 200,
	nMax : 300,
	nMin : 100,

	init : function(options){
		// this.nSpin = options.nSpin || null;
		this.nSpin = null;
		this.elSpin = null;
		this.elUp = null;
		this.elDown = null;
		this.elInterval = null;

		this._setElement();
		this._setNumber();
		this._setUp();
		this._setDown();
		this._blur();
	},

	_setElement : function(){
		this.elSpin = $('.number_spin');
		this.elUp = $('.btn_up');
		this.elDown = $('.btn_down');
	},

	_setNumber : function(){
		this.elSpin.attr('value', this.nDefault);
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

	_blur : function(){
		var oSelf = this;
		this.elSpin.on('blur', function(){
			// TODO 1a1b1b 입력시 정상작동 안함.
			oSelf.nDefault = parseInt(oSelf.elSpin.val(), 10);
			oSelf._counter();
		});
	},

	_setUp : function(){
		var oSelf = this;
		this.elUp.on('mousedown', function(){
			oSelf.elInterval = setInterval(function(){
				oSelf.nDefault++;
				oSelf._counter();
			}, 500);
		});
		// TODO document 기준으로 변경
		this.elUp.on('mouseup', function(){
			clearInterval(oSelf.elInterval);
			oSelf.nDefault++;
			oSelf._counter();
		});
	},

	_setDown : function(){
		var oSelf = this;
		this.elDown.on('mousedown', function(){
			oSelf.elInterval = setInterval(function(){
				oSelf.nDefault--;
				oSelf._counter();
			}, 500);
		});
		this.elDown.on('mouseup', function(){
			clearInterval(oSelf.elInterval);
			oSelf.nDefault--;
			oSelf._counter();
		});
	}
};

$(document).ready(function(){
	var oSpinbox = new spinbox.act();
});
