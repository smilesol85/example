// Name Space 설정
var nts = nts || {};

/**
 * SpinBox 클래스
 */
nts.SpinBox = function(wel, htOptions){
	$.extend(this, htOptions || {});
	this.wel = wel;
	this.init();
};

nts.SpinBox.prototype = {
	nDefaultValue : 200,
	welText : null,
	welButtons : null,
	sText : '',

	/**
	 * @constructor
	 */
	init : function(){	
		this._setElements();
		this._initVals();
		this.testReg();
		this.setInput(this.nDefaultValue);
		this._setEvents();
	},

	_setElements : function(){
		this.welText = $('#_text_input');
    	this.welButtons = $('input[type=button]');
	},

	_initVals : function(){
		this.sText = this.welText.val();
	},
	
	/**
	 *  인자값을 이용하여 값을 초기화해준다
	 */
	setInput : function(nValue){
		if(nValue < 100 || nValue > 300){
            alert('100 이상 또는 300 이하만 입력 가능합니다.');
            nValue = 200;
        }else{

        }
        var nNumber = parseInt(nValue, 10);
        this.welText.val(nValue);
	},

	testReg : function(){
		var rx = /\D/g;
        var sInput = this.welText.val() + '';
		var sReplace = sInput.replace(rx,'');
        var nNumber = parseInt(sReplace, 10);
        this.setInput(nNumber);
	},

	/**
	 * 이벤트 바인딩
	 * @private
	 */
	_setEvents : function(){
		var oSelf = this;

		this.welText.on('focusout', function(){
			oSelf.testReg();
		});

		this.welButtons.on('click', function(){
			var nCount = oSelf.welText.val();
	        if($(this).val() == '+'){
	            nCount++;
	        }else{
	            nCount--;
	        }

	        if(nCount < 100 || nCount > 300){
	            alert('100 이상 또는 300 이하만 입력 가능합니다.');
	        }else{
	            oSelf.setInput(nCount);
	        }
		});
	}
};