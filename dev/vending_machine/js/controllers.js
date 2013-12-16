vending.controlls.prototype = {
	_enterWon : function(changeWon, nWon, nSum){
		if(nWon <= 50000){
			welBalance.attr('value', nWon);
			changeWon = changeWon + nSum;
		}else{
			changeWon = sDeadline;
		}
		oVendingControlls._addMessage(changeWon);
	},

	_addMessage : function(changeWon){
		welOutput.prepend('<p>'+changeWon+'</p>');
	}
};