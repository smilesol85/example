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
			this.unit = this.unit;
		}else{
			this.unit = unit;
		}

		return this.unit;
	},

	setCoin : function(nCoin){
		if(nCoin == undefined){
			this.nCoin = this.nCoin;
		}else{
			this.nCoin = nCoin;
		}

		return this.nCoin;
	},

	addCoin : function(addCoin){
		addCoin = parseInt(addCoin, 10);
		this.nCoin += addCoin;
		if(this.nCoin > this.nMaxCoin){
			this.nCoin -= addCoin;
			this.sMessage = this.sDeadline;
		}else{
			this.sMessage = addCoin+'원 넣었네?!';
		}
		alert(this.sMessage);
		return this.nCoin;
	},

	enterCoin : function(enterCoin){
		enterCoin = parseInt(enterCoin, 10);
		this.nCoin -= enterCoin;
		if(this.nCoin < this.nMinCoin){
			this.nCoin += enterCoin;
			this.sMessage = this.sShortage;
		}else{
			this.sMessage = enterCoin+'원 짜리 뽑았네요?!';
		}
		alert(this.sMessage);
		return this.nCoin;
	}
};
