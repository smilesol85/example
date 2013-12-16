vending.controlls.prototype = {
	_addWon : function(changeWon, nWon, sResult){
		oVendingModels._setVending(nWon, changeWon+'won '+sResult);
	},

	_getSnack : function(changeWon, nWon, sResult){
		oVendingModels._setVending(nWon, sResult);	
	}
};