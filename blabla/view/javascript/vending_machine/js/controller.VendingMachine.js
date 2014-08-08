controller.VendingMachine = function(){
	this.init();
};

controller.VendingMachine.prototype = {
	init : function(){
		this.unit = '원';
		this.nCoin = 0;
		this.nMinCoin = 0;
		this.nMaxCoin = 10000;
		this.sShortage = '잔액이 부족하네요.ㅠㅠ';
		this.sDeadline = this.nMaxCoin+'원 까지만 넣을 수 있어요 :)';

		this.getElements();

		this.oOperate = new model.Operate(this.unit, this.nCoin, this.nMinCoin, this.nMaxCoin, this.sShortage, this.sDeadline);
		this.oItems = new view.Items();

		this.setModel();
		this.listProduct();
		this.listMoney();
		this._setEvent();
	},

	setModel : function(){
		this.getUnit = this.oOperate.setUnit();
		this.getCoin = this.oOperate.setCoin();

		this.setVendingMachine(this.getCoin);
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

	setVendingMachine : function(nCoin, sMessage){
		if(sMessage == undefined){
			sMessage = '';
		}
		this.oItems.setVendingMachine(nCoin, sMessage);
	},

	_addCoinEvent : function(event){
		this.addCoin = $(event.currentTarget).attr('data-Price');

		this.getAddCoin = this.oOperate.addCoin(this.addCoin);
		this.setVendingMachine(this.getAddCoin);
	},

	_pushProduct : function(event){
		this.enterCoin = $(event.currentTarget).attr('data-Price');

		this.getEnterCoin = this.oOperate.enterCoin(this.enterCoin);
		this.setVendingMachine(this.getEnterCoin);
	},

	_setEvent : function(){
		$('.wallet button').on('click', $.proxy(this._addCoinEvent, this));
		$('.product button').on('click', $.proxy(this._pushProduct, this));
	}
};
