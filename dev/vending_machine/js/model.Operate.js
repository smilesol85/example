model.Operate = function(unit, nCoin, nMinCoin, nMaxCoin, sShortage, sDeadline){
	this.init(unit, nCoin, nMinCoin, nMaxCoin, sShortage, sDeadline);
};

model.Operate.prototype = {
	init : function(unit, nCoin, nMinCoin, nMaxCoin, sShortage, sDeadline){
		this.unit = unit;
		this.nCoin = nCoin;
		this.nMinCoin = nMinCoin;
		this.nMaxCoin = nMaxCoin;
		this.sShortage = sShortage;
		this.sDeadline = sDeadline;
	},

	setUnit : function(unit){
		if(unit == undefined){
			return this.unit;
		}else{
			return unit;
		}
	},

	setCoin : function(nCoin){
		if(nCoin == undefined){
			return this.nCoin;
		}else{
			return nCoin;
		}
	},

	addCoin : function(addCoin){
		addCoin = parseInt(addCoin, 10);
		this.nCoin += addCoin;
		if(this.nCoin > this.nMaxCoin){
			this.nCoin -= addCoin;
		}else{
		}

		return this.nCoin;
	},

	enterCoin : function(enterCoin){
		enterCoin = parseInt(enterCoin, 10);
		this.nCoin -= enterCoin;
		if(this.nCoin < this.nMinCoin){
			this.nCoin += enterCoin;
		}else{
		}

		return this.nCoin;
	}
};