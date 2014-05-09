view.Items = function(){
}

view.Items.prototype = {
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

	setVendingMachine : function(nCoin, sMessage){
		welBalance.attr('value', nCoin);
		welConsole.prepend('<p>'+sMessage+'</p>');
	}
};
