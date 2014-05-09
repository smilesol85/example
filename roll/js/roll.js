var roll = roll || {};

roll = function(){
	this.init();
};

roll.prototype = {
	init : function(){
		this.setElement();
		this.setSize();
		this.setListPosition();
		this.setBtn();

		if(setRoll.setRollType === 'auto'){
			this.rollAnimate();
			this.startAnimate();
			this.stopAnimate();
		}else{
			this.clickBtnNext();
			this.clickBtnPrev();
		}
	},

	setElement : function(){
		this.elRollAuto = $('.rollAuto');
		this.elRollAutoLi = $('.rollAuto >ul li');
		this.elBtnStartAnimate = $('.btnStartAnimate');
		this.elBtnStopAnimate = $('.btnStopAnimate');
		this.elBtnAuto = $('.btnAuto');
		this.elBtnManual = $('.btnManual');
		this.elBtnPrev = $('.btnPrev');
		this.elBtnNext = $('.btnNext');
		this.setCount = 0;
		this.nList = this.elRollAutoLi.length;
	},

	setBtn : function(){
		if(setRoll.setRollType === 'auto'){
			this.elBtnAuto.show();
			this.elBtnManual.hide();
		}else{
			this.elBtnAuto.hide();
			this.elBtnManual.show();
		}
	},

	setSize : function(){
		this.elRollAuto.css({'width':''+setRoll.rollAutoWidth+'px', 'height':''+setRoll.rollAutoHeight+'px'});
		this.elRollAutoLi.css({'width':''+setRoll.rollAutoWidth+'px', 'height':''+setRoll.rollAutoHeight+'px'});
	},

	setListPosition : function(){
		var nLeft = '';
		for(var i = 0; i < this.nList; i++){
			if(i === 0){
				nLeft = '0px';
			}else{
				nLeft = ''+setRoll.rollAutoWidth+'px';
			}
			this.elRollAutoLi.eq(i).css('left', nLeft);
		}
	},

	controlCommon : function(){
		this.elRollAutoLi.eq(this.setCount).animate({
			left:'0px'
		}, setRoll.rollActionTime);
	},

	controlNext : function(){
		var oThis = this;
		var getAnimated = oThis.elRollAutoLi.is(':animated');
		if(getAnimated){
		}else{
			if(this.setCount < this.nList){
				this.elRollAutoLi.eq(this.setCount).animate({
					left:'-'+setRoll.rollAutoWidth+'px'
				}, setRoll.rollActionTime, function(){
					if(setRoll.setRollType === 'auto'){
						oThis.elRollAutoLi.css('left',''+setRoll.rollAutoWidth+'px');
					}else{}
				});

				this.setCount++;

				if(this.setCount === this.nList){
					this.setCount = 0;
				}else{}

				oThis.controlCommon();
			}else{}
		}
	},

	controlPrev : function(){
		var oThis = this;
		var getAnimated = oThis.elRollAutoLi.is(':animated');
		if(getAnimated){
		}else{
			this.elRollAutoLi.eq(this.setCount).animate({
				left:''+setRoll.rollAutoWidth+'px'
			}, setRoll.rollActionTime);

			this.setCount--;

			oThis.controlCommon();
		}
	},

	rollAnimate : function(){
		var oThis = this;
		this.setRoll = setInterval(function rollFunc(){
			oThis.controlNext();
		}, setRoll.rollRepeatTime);
	},

	startAnimate : function(){
		var oThis = this;
		this.elBtnStartAnimate.on('click', function(){
			oThis.rollAnimate();
			oThis.toggleBtn();
		});
	},

	stopAnimate : function(){
		var oThis = this;
		this.elBtnStopAnimate.on('click', function(){
			clearInterval(oThis.setRoll);
			oThis.toggleBtn();
		});
	},

	toggleBtn : function(){
		this.elBtnStartAnimate.toggle();
		this.elBtnStopAnimate.toggle();
	},

	clickBtnNext : function(){
		var oThis = this;
		this.elBtnNext.on('click', function(){
			if(oThis.setCount === oThis.nList - 1){
			}else{
				oThis.controlNext();
			}
		});
	},

	clickBtnPrev : function(){
		var oThis = this;
		this.elBtnPrev.on('click', function(){
			if(oThis.setCount === 0){
			}else{
				oThis.controlPrev();
			}
		});
	}
};
