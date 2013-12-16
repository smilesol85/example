vending.views.prototype = {
	init : function(){
		this._inputWon();
		this._getSnack();
	},

	_inputWon : function(){
		welButtonWalet.on('click', function(){
			var addWon = $(this).attr('data-won');
			nWon += parseInt(addWon, 10);
			nSum = ' 넣었군요';
			oVendingControlls._enterWon(addWon, nWon, nSum);
		});
	},

	_getSnack : function(){
		welButtonSnak.on('click', function(){
			var getSnack = $(this).attr('data-won');
			nWon -= parseInt(getSnack, 10);
			nSum = ' 썼군요';
			oVendingControlls._enterWon(getSnack, nWon, nSum);
		});
	}
};