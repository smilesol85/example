
// Name Space 설정
var nts = nts || {};

/**
 * Tester 클래스
 */
nts.Tester = function(wel, htOptions){
	$.extend(this, htOptions || {});
	
	this.init();
};

nts.Tester.prototype = {
	
	/**
	 * @constructor
	 */
	init : function(){	
		this._setEvents();
	},
	
	/**
	 * 이벤트 바인딩
	 * @private
	 */
	_setEvents : function(){
		alert('set_events');
	}
};