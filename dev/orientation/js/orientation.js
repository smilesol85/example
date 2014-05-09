var orient = orient || {};

orient.check = function(){
    this.init();
};

orient.check.prototype = {
    init : function(){
		this.setElement();
        this.checkOrient();
    },

	setElement : function(){
		this.elContent = $('#content');
	},
    
    checkOrient : function(){
        var oThis = this;
		var sGetUrl = document.location.href;
        var sWrite = '';
        $(window).bind('orientationchange', function(e){
			alert(window.orientation);
			alert('1');
            switch(window.orientation){
                case 0: 
                    // document.getElementById("orient_css").href = "css/iphone_portrait.css";
                    sWrite = '0';
                    break;
                case -90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    sWrite = '-90';
                    break;
                case 90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    sWrite = '+90';
                    break;
            }
//            oThis.elContent.html(sWrite);
        });
    }
};

var oOrient = new orient.check();
