// name space
var spinbox = spinbox || {};

// spinbox class
spinbox.act = function(){
	this.init();
};

spinbox.act.prototype = {
	nDefault : 200,
	nSpin : null,
	elSpin : null,
	elUp : null,
	elDown : null,
	elInterval : null,

	init : function(){
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

	_counter : function(nSpin){
		if(nSpin === 300 || nSpin > 300){
			this.elUp.hide();
		}else if(nSpin === 100 || nSpin < 100){
			this.elDown.hide();
		}else{
			this.elUp.show();
			this.elDown.show();
		}
		this.elSpin.attr('value', nSpin);
		alert(nSpin);
	},

	_blur : function(){
		var oSelf = this;
		this.elSpin.on('blur', function(){
			var nSpin = parseInt(oSelf.elSpin.val());
			oSelf.nDefault = nSpin;
			oSelf._counter(oSelf.nDefault);
		});
	},

	_setUp : function(){
		var oSelf = this;
		this.elUp.on('mousedown', function(){
			oSelf.elInterval = setInterval(function(){
				oSelf.nDefault++;
				oSelf._counter(oSelf.nDefault);
			}, 500);
		});
		this.elUp.on('mouseup', function(){
			clearInterval(oSelf.elInterval);
			oSelf.nDefault++;
			oSelf._counter(oSelf.nDefault);
		});
	},

	_setDown : function(){
		var oSelf = this;
		this.elDown.on('mousedown', function(){
			oSelf.elInterval = setInterval(function(){
				oSelf.nDefault--;
				oSelf._counter(oSelf.nDefault);
			}, 500);
		});
		this.elDown.on('mouseup', function(){
			clearInterval(oSelf.elInterval);
			oSelf.nDefault--;
			oSelf._counter(oSelf.nDefault);
		});
	}
};

$(document).ready(function(){
	var oSpinbox = new spinbox.act();
});