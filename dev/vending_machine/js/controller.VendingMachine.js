controller.VendingMachine = function(){
	this.init();
};

controller.VendingMachine.prototype = {
	init : function(){
		this.unit = '원';
		this.nCoin = 0;
		this.nMinCoin = 0;
		this.nMaxCoin = 50000;
		this.sShortage = '잔액이 부족하네요.ㅠㅠ';
		this.sDeadline = this.nMaxCoin+'원 까지만 넣을 수 있어요 :)';

		this.getElements();

		this.oOperate = new model.Operate(this.unit, this.nCoin, this.nMinCoin, this.nMaxCoin, this.sShortage, this.sDeadline);
		this.oItems = new view.Items();

		this.getUnit = this.oOperate.getUnit();
		this.getCoin = this.oOperate.getCoin();
		this.getMessage = this.oOperate.getMessage();

		this.listProduct();
		this.listMoney();
		this._setEvents();

		this.oItems.setVendingMachine(this.getCoin, this.getMessage);
	},

	getElements : function(){
		welBalance = $('#balance');
		welConsole = $('.console');
		welProduct = $('.product');
		welWalet = $('.wallet');
	},

	listProduct : function(){
		product = {
			candy : 300,
			chololate : 700,
			milk : 1500
		};

		this.oItems._setProduct(this.getUnit, product);
	},

	listMoney : function(){
		money = {
			money_100 : 100,
			money_500 : 500,
			money_1000 : 1000
		};

		this.oItems._setMoney(this.getUnit, money);
	},

	_setEvents : function(){
		oSelf = this;
		$(document).ready(function(){
			welWalet.find('button').on('click', function(){
				this.inputMoney = $(this).attr('data-Price');
				oSelf.oOperate.addCoin(this.inputMoney);
			});
		});
	}
};

// vending.controller.prototype = {
// 	init : function(){
// 		this.setElements();
// 		this._addCoin();
// 		// this._pushGet();
// 	},

// 	setElements : function(){
// 		welBalance = $('#balance');
// 		welConsole = $('.console');
// 		welProduct = $('.product');
// 		welWalet = $('.wallet');
// 	},

// 	_addCoin : function(){
// 		$(document).ready(function(){
// 			welWalet.find('button').on('click', function(){
// 				var addCoin = $(this).attr('data-price');
// 				var nAddCoin = parseInt(addCoin, 10);

// 			});
// 		});
// 	}

// 	// _pushGet : function(){
// 	// 	welButtonSnak.on('click', function(){
// 	// 		var getSnack = $(this).attr('data-won');
// 	// 		var nameSnack = $(this).attr('data-snack');
// 	// 		var nGetSnack = parseInt(getSnack, 10);
// 	// 		nCoin -= nGetSnack;
// 	// 		if(nCoin < 0){
// 	// 			sResult = sWantMoney;
// 	// 			nCoin += nGetSnack;
// 	// 		}else{
// 	// 			sResult = nameSnack+' 나왔다!';
// 	// 		}
// 	// 		oVendingControlls.buy(getSnack, nCoin, sResult);	
// 	// 	});
// 	// }
// };