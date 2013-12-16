vending.models.prototype = {
	init : function(){
		this._default();
		this.getElements();
		this._setVending();
	},

	_default : function(){
		nWon = 0;
		sOutput = '돈 넣으면 먹을 수 있지롱~!';
		sDeadline = '5만원 까지만 넣을 수 있어요 :)';
		sWantMoney = '돈을 더 넣어야 먹지~!';
	},

	getElements : function(){
		welBalance = $('#balance');
		welOutput = $('.output');
		welButtonWalet = $('.wallet button');
		welWon100 = $('.won_100');
		welWon500 = $('.won_500');
		welWon1000 = $('.won_1000');
		welButtonSnak = $('.snack button');
	},

	_setVending : function(){
		welBalance.attr('value', nWon);
		welOutput.prepend('<p>'+sOutput+'</p>');
	}
};