vending.controlls.prototype = {
	addCoin : function(changeWon, nCoin, sResult){
		oVendingModels.setVending(nCoin, changeWon+'won '+sResult);
	},

	buy : function(changeWon, nCoin, sResult){
		oVendingModels.setVending(nCoin, sResult);	
	}
};