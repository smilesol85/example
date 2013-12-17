vending.views.prototype = {
	init : function(){
		this._inputCoin();
		this._pushGet();
	},

	_inputCoin : function(){
		welButtonWalet.on('click', function(){
			var addWon = $(this).attr('data-won');
			var nAddWon = parseInt(addWon, 10);
			nCoin += nAddWon;
			if(nCoin > nMaxCoin){
				sResult = sDeadline;
				nCoin -= nAddWon;
			}else{
				sResult = ' 넣었군요';
			}
			oVendingControlls.addCoin(nAddWon, nCoin, sResult);
		});
	},

	_pushGet : function(){
		welButtonSnak.on('click', function(){
			var getSnack = $(this).attr('data-won');
			var nameSnack = $(this).attr('data-snack');
			var nGetSnack = parseInt(getSnack, 10);
			nCoin -= nGetSnack;
			if(nCoin < 0){
				sResult = sWantMoney;
				nCoin += nGetSnack;
			}else{
				sResult = nameSnack+' 나왔다!';
			}
			oVendingControlls.buy(getSnack, nCoin, sResult);	
		});
	}
};