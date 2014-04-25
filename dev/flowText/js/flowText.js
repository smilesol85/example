var flowText = flowText || {};

flowText = function(){
	this.init();
};

flowText.prototype = {
	init : function(){
		this.setElement();
		this.setSize();
		this.move();
	},

	setElement : function(){
		this.elFlowText = $('.floatText ul');
		this.nList = this.elFlowText.find('li').length;
		this.nAniLength = 0;
		$('.floatText ul').find('li').css('margin-right', ''+setFlowText.marginList+'px');
	},

	setSize : function(){
		var oThis = this;
		var nWidth = 0;
		this.getWidth = [];
		this.nSumWidth = 0;
		this.elFlowText.find('li').each(function(){
			oThis.getWidth[nWidth] = parseInt($(this).css('width')) + parseInt(setFlowText.marginList);
			oThis.nSumWidth += oThis.getWidth[nWidth];
			nWidth++;
		});
		this.nSumWidth = this.nSumWidth + (setFlowText.marginList * nWidth);
		this.elFlowText.css('width', ''+this.nSumWidth+'px');
	},

	move : function(){
		var oThis = this;
		setInterval(function aniFunc(){
			oThis.elFlowText.find('li').eq(0).animate({
				marginLeft:'-'+oThis.getWidth[oThis.nAniLength]+'px'
			}, setFlowText.speedFlow, function(){
				oThis.elFlowText.find('li').eq(0).clone().css('margin-left', '0px').appendTo('.floatText ul');
				oThis.elFlowText.find('li').eq(0).remove()
			});
			if(oThis.nAniLength < oThis.nList - 1){
				oThis.nAniLength++;
			}else{
				oThis.nAniLength = 0;
			}
		}, setFlowText.speedRepeat);
	}
};
