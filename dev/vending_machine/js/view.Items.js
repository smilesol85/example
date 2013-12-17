view.Items = function(){
	this.init();
}

view.Items.prototype = {
	init : function(){
		
	},

	_setProduct : function(getUnit, product){
		for(var nameProduct in product){
			welProduct.append('<li>'+nameProduct+'<br>'+product[nameProduct] + getUnit+'<br><button type="button" data-Price="'+product[nameProduct]+'" class="btn_get">PUSH</button></li>');
		}
	},

	_setMoney : function(getUnit, money){
		for(var nameMoney in money){
			welWalet.append('<button type="button" data-Price="'+money[nameMoney]+'">'+money[nameMoney] + getUnit+'</button>');
		}
	},

	setVendingMachine : function(nCoin, sDeadline){
		alert(nCoin);
		welBalance.attr('value', nCoin);
		welConsole.prepend('<p>'+sDeadline+'</p>');
	}
};

// vending.view.prototype = {
// 	init : function(){
// 		this._setProduct();
// 		this._setMoney();
// 		this._setVending(nDefaultCoin, sDeadline);
// 	},

// 	// addCoin : function(changeWon, nCoin, sResult){
// 	// 	this.setVending(nCoin, changeWon+'won '+sResult);
// 	// },

// 	// buy : function(changeWon, nCoin, sResult){
// 	// 	this.setVending(nCoin, sResult);	
// 	// },

// 	_setProduct : function(){
// 		for(var nameProduct in product){
// 			welProduct.append('<li>'+nameProduct+'<br>￦'+product[nameProduct]+'<br><button type="button" data-Price="'+product[nameProduct]+'" class="btn_get">PUSH</button></li>');
// 		}
// 	},

// 	_setMoney : function(){
// 		for(var nameMoney in money){
// 			welWalet.append('<button type="button" data-Price="'+money[nameMoney]+'">￦'+money[nameMoney]+'</button>');
// 		}
// 	},
	
// 	_setVending : function(nCoin, sResult){
// 		welBalance.attr('value', nCoin);
// 		welConsole.prepend('<p>'+sResult+'</p>');
// 	}
// };