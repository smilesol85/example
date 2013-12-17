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

	getUnit : function(){
		return this.unit;
	},

	getCoin : function(){
		return this.nCoin;
	},

	getMessage : function(){
		return this.sDeadline;
	},

	addCoin : function(inputMoney){
		this.nCoin += parseInt(inputMoney, 10);
		return this.nCoin;
	}
};

// vending.model.prototype = {

// 	init : function(){
// 		this._nCoin = 0;
// 		this.nMaxCoin = 50000;
// 	}



// 	// init : function(){
// 	// 	this.defaultValue();
// 	// 	this.listProduct();
// 	// 	this.listMoney();
// 	// },

// 	// defaultValue : function(){
// 	// 	nDefaultCoin = 0;
// 	// 	nMinCoin = 0;
// 	// 	nMaxCoin = 50000;
// 	// 	sShortage = '잔액이 부족하네요.ㅠㅠ';
// 	// 	sDeadline = nMaxCoin+'원 까지만 넣을 수 있어요 :)';
// 	// },

// 	// listProduct : function(){
// 	// 	product = {
// 	// 		candy : 300,
// 	// 		chololate : 700,
// 	// 		milk : 1500
// 	// 	};
// 	// },

// 	// listMoney : function(){
// 	// 	money = {
// 	// 		money_100 : 100,
// 	// 		money_500 : 500,
// 	// 		money_1000 : 1000
// 	// 	};
// 	// },

// 	// resultCoin : function(nAddCoin){
// 	// 	alert(nAddCoin);
// 	// 	// nDefaultCoin += nAddCoin;
// 	// 	// if(nCoin > nMaxCoin){
// 	// 	// 	sResult = sDeadline;
// 	// 	// 	nCoin -= nAddWon;
// 	// 	// }else{
// 	// 	// 	sResult = ' 넣었군요';
// 	// 	// }
// 	// 	// oVendingControlls.addCoin(nAddWon, nCoin, sResult);
// 	// }
// };