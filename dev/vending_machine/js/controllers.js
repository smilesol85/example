vending.views.prototype = {
	init : function(){
		this._inputWon();
		this._pushGet();
	},

	_inputWon : function(){
		welButtonWalet.on('click', function(){
			var addWon = $(this).attr('data-won');
			var nAddWon = parseInt(addWon, 10);
			nWon += nAddWon;
			if(nWon > nMaxWon){
				sResult = sDeadline;
				nWon -= nAddWon;
			}else{
				sResult = ' 넣었군요';
			}
			oVendingControlls._addWon(nAddWon, nWon, sResult);
		});
	},

	_pushGet : function(){
		welButtonSnak.on('click', function(){
			var getSnack = $(this).attr('data-won');
			var nameSnack = $(this).attr('data-snack');
			var nGetSnack = parseInt(getSnack, 10);
			nWon -= nGetSnack;
			if(nWon < 0){
				sResult = sWantMoney;
				nWon += nGetSnack;
			}else{
				sResult = nameSnack+' 나왔다!';
			}
			oVendingControlls._getSnack(getSnack, nWon, sResult);	
		});
	}
};