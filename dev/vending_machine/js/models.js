vending.models.prototype = {
	init : function(){
		this._defaultValue();
		this.getElements();
		this.setVending(nCoin, sOutput);
	},

	_defaultValue : function(){
		nCoin = 0;
		nMaxCoin = 50000;
		sResult = null;
		sOutput = '돈 넣으면 먹을 수 있지롱~!';
		sDeadline = '5만원 까지만 넣을 수 있어요 :)';
		sWantMoney = '돈을 더 넣어야 먹지~!';
	},
	
	// TODO : controll
	getElements : function(){
		welBalance = $('#balance');
		welOutput = $('.output');
		welButtonWalet = $('.wallet button');
		welWon100 = $('.won_100');
		welWon500 = $('.won_500');
		welWon1000 = $('.won_1000');
		welButtonSnak = $('.snack button');
	},
	
	// TODO : view
	setVending : function(nCoin, sOutput){
		welBalance.attr('value', nCoin);
		welOutput.prepend('<p>'+sOutput+'</p>');
	}
};
